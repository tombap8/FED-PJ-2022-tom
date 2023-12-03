// DC PJ 검색모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";

// 제이쿼리
import $ from "jquery";

// 검색모듈용 CSS 불러오기
import "../../css/searching.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// 최초 원본 데이터 정렬변경하기(오름차순)
// 주의사항 : 컴포넌트에 포함시키지 말것!
// 이유는 배열의 정렬정보가 컴포넌트에 포함될경우
// 컴포넌트 리랜더링시 초기화 되므로 정렬이 변경되지 않는다!
// 따라서 컴포넌트 바깥쪽 위에서 정렬된 원본 배열데이터를
// 만들어준다! -> 외부검색어로 검색을 위해 여기는 주석!
// catListData.sort((a,b)=>{
//   return a.cname==b.cname?0:a.cname>b.cname?1:-1;
// })

// console.log(catListData);


export function Searching(props) {
  // props.kword - 검색어전달
  console.log("전달검색어:", props.kword);

  ////////// 후크 상태관리 변수 ////////////
  // 1. 검색어 후크상태변수 : 초기값은 전달된 검색어 안넣음
  const [kword,setKword] = useState(null);

  // 2. 출력개수 후크상태변수
  const [cntNum,setCntNum] = useState(0);

  // 3. 데이터 구성 상태변수 : [배열데이터,정렬상태]
  const [selData, setSelData] = useState([[],2])
  // - 정렬상태값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
  // 두가지값을 같이 관리하는 이유는 데이터정렬만 변경될 경우
  // 배열자체가 변경된 것으로 인식하지 않기때문이다!

  // 4. 데이터 건수 상태변수
  const [cnt, setCnt] = useState(0);

  //////////////////////////////////////////
  
  // 검색어 업데이트 함수 /////
  const chgKword = txt => setKword(txt);

  // 검색 케이스 구분변수(useRef->값유지!)
  const allow = useRef(1);
  // 1-상단검색허용 , 0-상단검색불허용
  // useRef 변수 사용은 변수명.current

  // 처음상태 구분변수(랜더링이전 시점에 한번실행구분)
  const firstSts = useRef(0);

  // 폰트어썸을 참조하는 테스트용 참조변수
  const xx = useRef(null);
  useEffect(()=>{
    //xx가 폰트어썸 컴포넌트를 담은후!
    console.log(xx);
    // 테두리디자인 줘봐요!
    xx.current.style.outline = '5px dotted orange';
  }); //// useEffect ///

  // 상단검색 초기실행함수 ///////
  const initFn = () => {
    // 넘어온 검색어와 셋팅된 검색어가 다르면 업데이트
    if(props.kword!=kword){ 
      console.log('상단검색실행!',props.kword,kword);
      // 키워드 상태변수에 업데이트
      chgKword(props.kword);
      // 모듈검색 input창에 같은 값 넣어주기
      $('#schin').val(props.kword);
      // 검색리스트 만들기 함수 호출
      schList();
    } ///////// if ///////////
  } ///////// initFn 함수 ///////////

  // 만약 useRef변수값이 1이면(true면) initFn실행!
  if(allow.current) initFn();

  console.log('allow값:',allow.current);


  

function firstDo (){
  console.log('처음한번만~!',props.kword);
  const firstTemp = catListData.filter(v=>{
    if(v.cname.toLowerCase().indexOf(props.kword.toLowerCase())!==-1) return true;
  })
  
  firstTemp.sort((a,b)=>{
    return a.cname==b.cname?0:a.cname>b.cname?1:-1;
  })

  console.log('처음결과:',firstTemp);
  // 데이터변경 업데이트
  setSelData([firstTemp,2]);
  // 검색건수 상태관리변수 업데이트!
  setCnt(firstTemp.length);
  // 키워드 업데이트
  chgKword(props.kword);

} ///////////// firstDo 함수 ////////

// 한번만 호출 ////
if(!firstSts.current) {
  firstDo();
  firstSts.current = 1;
} //// if /////////////

useEffect(()=>{},[])



  // 리스트 개수변경함수 ///////
  const chgCnt = (num) => {
    // 후크 상태개수변수 업데이트하기
    setCntNum(num);
    // $('.cntNum').text(num);
  }; ///////// showCnt 함수 ///////

  //////////////////////////
  // 검색리스트 만들기 함수 //
  //////////////////////////
  function schList (e) {
    // 1. 검색어 읽어오기
    let keyword = $('#schin').val();

    // 2. 데이터 검색하기
    const newList = catListData.filter(v=>{
      if(v.cname.toLowerCase().indexOf(keyword)!=-1) 
      return true;
    }); //////////// filter ////////////////////

    console.log('검색결과:',newList);

    // 3. 검색결과 리스트 업데이트하기
    // 데이터 상태관리변수 업데이트!
    setSelData([newList,2]);
    // 검색건수 상태관리변수 업데이트!
    setCnt(newList.length);
    
  } ///////////// schList 함수 /////////////

  // 엔터키 반응 함수
  const enterKey = (e) => {
    // 엔터키일때만 반영함
    if(e.key == 'Enter'){
      // 상단키워드 검색막기
      allow.current = 0;
      // 잠시후 상태해제(비동기)
      setTimeout(()=>allow.current=1,0);

      let txt = $(e.target).val();
      chgKword(txt)
      console.log(txt,e.key);

      // 검색리스트만들기 함수 호출
      schList();
    } /////// if //////
  }; ////// enterKey 함수 //////

  ////////////////////////
  // 체크박스검색 함수 ////
  ////////////////////////
  const chkSearch = (e) => {
    // 1. 체크박스 아이디 : 검색항목의 값(alignment)
    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    console.log('아이디:',cid,chked);

    // 3. 기존 입력 데이터 가져오기
    // selData의 첫번째 배열값
    let temp = selData[0];

    // 결과집합배열변수 : 최종결과배열
    let lastList = [];

    // 4.체크박스 체크개수세기 : 1개초과시 배열합치기!
    let num = $('.chkhdn:checked').length;
    console.log('체크개수:',num);

    // 5. 체크박스 체크유무에 따른 분기
    // (1) 체크박스가 true일대 해당 검색어로 검색하기
    if(chked){
      // 현재데이터 변수에 담기(수정예정!)
      const nowList = catListData.filter(v=>{
        if(v.alignment == cid) return true;
      }); /////////// filter //////////

      // 체크개수가 1초과일때 배열합치기
      if(num>1){ // 스프레드 연산자(...)사용!
        lastList = [...temp,...nowList];
      } //// if /////
      else{ // 하나일때
        lastList = nowList;
      }

    } /////////// if /////////
    // (2) 체크박스가 false일때 데이터 지우기
    else{
      console.log('지울데이터:',cid);
      // for문을 돌면서 배열데이터중 해당값을 지운다!
      for(let i=0; i<temp.length;i++){
        // -> 삭제대상:
        // 데이터중 alignment 항목값이 아이디명과 같은것
        if(temp[i].alignment==cid){
          // 해당항목 지우기
          // 배열지우기 메서드 : splice(순번,개수)
          temp.splice(i,1);
          // 주의! 배열을 지우면 전체개수가 1씩줄어든다!
          // 반드시 줄임처리할것!
          i--;

          // 참고테스트 : 배열삭제 delete는 무엇인가?
          // delete배열지우기는 값만지우고 주소는 남는다!
          // 지운후 값은 undefined로 남아진다!
          // delete temp[i];
          // -> 리스트처리시 에러발생함!
          // 여기서는 splice를 반드시 사용할것!

        } //////// if ///////
      } ///////// for ////////

      console.log('삭제처리된배열:',temp);

      // 결과처리하기 : 삭제처리된 temp를 결과에 넣기!
      lastList = temp;

    } /////////// else ///////////

    // 6. 검색결과 리스트 업데이트 하기
    setSelData([lastList,2]);
    setCnt(lastList.length);

  }; ////////////// chkSearch 함수 ///////////

  //////////////////////
  // 리스트 정렬 함수 ///
  //////////////////////
  const sortList = (e) => {
    // 1. 선택옵션값 : 0 - 오름차순 / 1 - 내림차순
    const optVal = e.target.value;
    console.log('선택옵션:',optVal);

    // 2. 재정렬할 데이터를 가져온다 : selData 첫번째값
    let temp = selData[0];

    // 3. 옵션에 따른 정렬반영하기
    temp.sort((a,b)=>{
      if(optVal == 1){ // 내림차순
        return a.cname==b.cname?0:a.cname>b.cname?-1:1;
      } ////// if ////
      else if(optVal == 0){ // 오름차순
        return a.cname==b.cname?0:a.cname>b.cname?1:-1;
      } ////// else if ////
    }); /////// sort /////////

    console.log('정렬후:',temp,optVal);

    // 4. 데이터 정렬후 정렬변경 반영하기
    // -> 데이터 변경만 하면 정렬이 반영안됨!
    // setSelData([배열데이터,정렬상태값])
    setSelData([temp,Number(optVal)]);
    
  }; ////////////// sortList 함수 //////////


  // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
              onClick={schList}
              ref={xx}
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              onKeyUp={enterKey}
              defaultValue={kword}
              /* input요소에서 리액트 value속성은 
              defaultValue를 사용한다! -> 처음입력값 
              _________________________________
              value속성을 쓰면 동적변경이 이루어지고
              사용자가 입력하지 못하도록 readOnly(읽기전용)
              설정이 되어 있어야한다! */
              
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="comp" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="comp"
                    className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="villain" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="villain"
                    className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
            {/* 2-1. 결과 타이틀 */}
            <h2 className="restit">
                BROWSE CHARACTERS ({cnt})
            </h2>
            {/* 2-2. 정렬선택박스 */}
            <aside className="sortbx">
                <select 
                    name="sel" 
                    id="sel" 
                    className="sel"
                    onChange={sortList}
                >
                    <option value="0">A-Z</option>
                    <option value="1">Z-A</option>
                </select>
            </aside>
            {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
            <SchCatList dt={selData[0]} total={cnt} />
        </div>
      </section>
    </>
  );
} ////////////// Searching 컴포넌트 //////////
