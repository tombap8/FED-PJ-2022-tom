///  검색 모듈 - Search.js
import $ from "jquery";
import { useEffect, useState } from "react";
import cat_data from "../data/cat";
import "../css/search.css";
import CatList from "./CatList";

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

// 최초 원본데이터 정렬변경하기(오름차순)
// 주의사항: 컴포넌트에 포함시키지 말것!
// 왜? 배열의 정렬정보가 컴포넌트에 포함될 경우 컴포넌트 초기화때문에
// 정렬변경이 되지 않는다! 따라서 컴포넌트 바깥위에서
// 데이터 정렬이 변경된 원본배열을 만들어준것을
// 컴포넌트 내부에서 사용하도록 하면 기존 정렬변경이 반영됨!
cat_data.sort((x,y)=>{
    return x.cname===y.cname?0:x.cname>y.cname?1:-1;
})

function Search(props) { // props.skw - 전달키워드

    // 데이터 선택하기 : Hook 데이터 구성하기
    // -> 데이터 정렬을 반영하기 위해 정렬상태값을 같이설정함!
    // 데이터구성 : [배열데이터,정렬상태값]
    // 정렬상태값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
    // 설정이유 : 데이터 정렬만 변경될 경우 배열데이터가
    //          변경되지 않은 것으로 Hook 상태관리에서 인식함!
    let [sdt, setSdt] = useState([cat_data, 2]);
    // sdt[0] -> 배열데이터만 가져갈 경우 0번째로 선택함!

    // 데이터 건수 : Hook 데이터 구성하기
    let [tot, setTot] = useState(cat_data.length);

    // 데이터 검색 함수 ///////////////////
    const schList = () => {
        // 검색요소 대상 :  #schin
        let inp = document.querySelector("#schin");

        // 1. 검색어 읽기
        let keyword = inp.value;

        // 2. 검색어 입력확인분기
        if (keyword.trim() == "") {
            // 입력창으로 다시 보내기
            inp.focus();
            return;
        }
        console.log("검색어:", keyword);

        // 3. 데이터 검색하기
        // 배열값 다중검색 메서드 -> filter()
        // 검색대상: 전체원본데이터 (cat_data)
        let newList = cat_data.filter((v) => {
            if (v.cname.toLowerCase().indexOf(keyword) !== -1) return true;
        }); ////////// filter /////////////////

        console.log("검색결과:", newList);

        // 4. 검색결과 리스트 업데이트하기
        // Hook변수인 데이터변수와 데이터건수 변수를 업데이트함!
        setSdt([newList, 2]);
        setTot(newList.length);

    }; /////////// schList 함수 /////////////

    // 입력창에서 엔터키를 누르면 검색함수 호출!
    const enterKey = (e) => {
        if (e.key === "Enter") schList();
    }; //////////// enterKey 함수 ////////////

    // 리스트 정렬 변경함수 /////////////
    const sortList = (e) => {
        // 1. 선택옵션값 : 0 - 오름차순 / 1 - 내림차순
        let opt = e.target.value;
        console.log("선택옵션:", opt);

        // 임시변수 : 배열데이터만 가져옴
        let temp = sdt[0];

        // 2. 옵션에 따른 정렬반영하기

        //// 내림차순(1) ///
        temp.sort((x, y) => {
            if (opt == 1) {
                return x.cname == y.cname ? 0 : x.cname > y.cname ? -1 : 1;
            } //////// if //////////
            else if (opt == 0) {
                return x.cname == y.cname ? 0 : x.cname > y.cname ? 1 : -1;
            } /////// else //////////
        }); /////////// sort ///////////

        console.log("정렬후:", temp, opt);

        // 3. 데이터 정렬변경 반영하기
        // setSdt([배열데이터,정렬상태값])
        setSdt([temp, Number(opt)]);

    }; //////////// sortList 함수 //////////////

    // 체크박스 요소
    let chkele = document.querySelectorAll(".chkhdn");

    /////// 체크박스 검색함수 ////////////
    const chkSearch = (e) => {
        // 1. 체크박스 아이디 : 검색항목의 값(alignment)
        let cid = e.target.id;
        
        // 2. 체크박스 체크여부 : checked (true/false)
        let chked = e.target.checked;
        console.log("아이디:",cid,chked);

        // 임시변수 : 기존입력된 데이터 가져옴
        let temp = sdt[0];
        console.log("기존저장데이터:",temp);
        // 결과집합변수
        let newList = [];

        // 3. 체크박스 체크개수세기 : 1개초과시 배열합치기할것임!
        let num = 0;
        chkele.forEach(v=>{if(v.checked)num++});
        console.log("체크개수:",num);


        // 4. 체크박스 체크여부에 따른 분기
        // (1) 체크여부가 true일때 해당 검색어로 검색하기
        if(chked){
            // 현재데이터 변수에 담기
            let nowdt = cat_data.filter(v=>{
                if(v.alignment === cid) return true;
            }); ///////// filter /////////

            // 체크개수가 1초과일때 배열합치기
            if(num > 1){ // 스프레드 연산자(...)사용!
                // 기존데이터(temp)+새데이터(nowdt)
                newList = [...temp,...nowdt];
            } /////// if ////////////
            // 체크개수 1일때 ////
            else{
                newList = nowdt;
            } ////// else ///////////


        } ////////// if : 체크박스 true ///////
        //(2) 체크박스가 false일때 데이터지우기
        else{
            console.log("지울데이터:",cid);
            // splice삭제시 일반for문으로 --처리해야함!
            for(let i=0; i < temp.length; i++){
                // 조건은 체크박스 풀린 값
                if(temp[i].alignment === cid){
                    // 배열지우기 메서드 : splice(순번,개수)
                    temp.splice(i,1);
                    // 중요!!! splice로 지우면 배열항목자체가
                    // 삭제 되므로 for문 돌때 개수가 줄어든다!
                    // 따라서 다음번호를 지울때 ++을 --처리필수!
                    i--;

                    // delete temp[i];
                    // -> delete 배열지우기는 배열의 값만지우고
                    // 그값은 undefined처리된다 
                    // 따라서 리스트처리시 에러가 날 수 있음!
                    // 이 경우에 꼭 배열주소 전체를 삭제하는
                    // splice를 사용하도록 한다!!!
                    
                } //////////// if ////////////

            } //////////// for문 ////////////

            console.log("삭제처리배열:",temp);

            // 결과처리하기 : 삭제처리된 temp를 결과에 넣기!
            newList = temp;

        } /////////// else : 체크박스 false //////

        // 5. 검색결과 리스트 업데이트 하기
        // Hook 데이터변수+데이터건수
        setSdt([newList],2);
        setTot(newList.length);



    }; //////////// chkSearch 함수 ////////////

    // 검색어가 있으면 검색함수 호출하기!
    // 검색함수는 검색어 입력창으로 부터 검색어를 가져가므로
    // 넘어온 검색어는 검색입력창에 넣은 후 검색함수를 호출한다!
    const linkSearch = () => {
        console.log("링크검색어:",props.skw);
        // 검색어가 빈값 아니면
        if(props.skw != ""){

            // 1. 검색창 원상복귀하기
            document.querySelector(".searchingGnb")
            .style.display = "none";
            
            document.querySelector(".searchingGnb+a")
            .style.opacity = "1";

            // 2. 검색페이지 검색창에 키워드 넣기
            document.querySelector(".searching input")
            .value = props.skw;

            // 3. 검색함수 호출하기
            schList();

        } ///////// if ///////////////

    }; ///////////// linkSearch ////////////////////

    // 검색어가 있을때 검색함수의 호출은 페이지로딩후
    // 체크해주는 useEffect를 활용한다!
    useEffect(linkSearch,[]);


    return (
        <>
            {/* 모듈코드 */}
            <section className="schbx">
                {/* 1. 옵션선택박스 */}
                <div className="schopt">
                    {/* 검색박스 */}
                    <div className="searching">
                        {/* 검색버튼 돋보기아이콘 */}
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="schbtn"
                            title="Open search"
                            onClick={schList}
                        />
                        {/* 입력창 */}
                        <input
                            id="schin"
                            type="text"
                            placeholder="Filter by Keyword"
                            onKeyUp={enterKey}
                        />
                    </div>
                    {/* 체크박스구역 */}
                    <div className="chkbx">
                        <ul>
                            <li>
                                <h2>
                                    ALIGNMENT
                                    <span className="spbtn">
                                        ＋
                                    </span>
                                </h2>
                                {/* 체크박스리스트 */}
                                <ol>
                                    <li>
                                        Heroes
                                        <input 
                                        type="checkbox"
                                        id="hero"
                                        className="chkhdn"
                                        onChange={chkSearch} 
                                        />
                                        <label
                                        htmlFor="hero"
                                        className="chklb"></label>
                                    </li>
                                    <li>
                                        It's Complicated
                                        <input 
                                        type="checkbox"
                                        id="comp"
                                        className="chkhdn"
                                        onChange={chkSearch} 
                                        />
                                        <label
                                        htmlFor="comp"
                                        className="chklb"></label>
                                    </li>
                                    <li>
                                        Villiains
                                        <input 
                                        type="checkbox"
                                        id="villain"
                                        className="chkhdn"
                                        onChange={chkSearch} 
                                        />
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
                    {/* 결과타이틀 */}
                    <h2 className="restit">BROWSE CHARACTERS({tot})</h2>
                    {/* 정렬선택박스 */}
                    <aside className="sortbx">
                        <select className="sel" name="sel" id="sel" onChange={sortList}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </aside>
                    {/* 캐릭터 리스트 컴포넌트 
                전달속성 dt - 리스트 데이터 */}
                    <CatList dt={sdt[0]} />
                </div>
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default Search;
