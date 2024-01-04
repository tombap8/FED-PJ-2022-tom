// 상품 전체 리스트 페이지

// 상품전체리스트 CSS 불러오기
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "../css/glist.css";

// 제이쿼리
import $ from "jquery";

// 상품데이터 불러오기 : 원본데이터
import gdata from "../data/glist-items";

import { ItemDetail } from "../modules/ItemDetail";

// 컨텍스트 API 불러오기
import { pCon } from "../modules/PilotContext";

console.log("전체Data:", gdata);

///////////////////////////////////////////
//////// GList 컴포넌트 ///////////////////
export function GList() {
  // 컨텍스트 사용하기
  const myCon = useContext(pCon);

  // 컨텍스트 변수인 gMode의 3가지값 :
  // 1. 'F' -> Filter List임!
  // 2. 'P' -> Paging List
  // 3. 'M' -> More List
  // -> 위의 값에 따라 리액트 조건출력(&&)을 사용함!

  // 변경될 데이터 원본과 분리하여 데이터 변경하기위한 참조변수
  const transData = useRef(JSON.parse(JSON.stringify(gdata)));
  // -> 깊은복사로 원본데이터와 연결성 없음!!!
  // 주의: 사용시 current 속성을 씀!

  // 참조변수셋팅 : 리랜더링없이 값유지!
  // 1. 아이템 코드(m1,m2,m3,...)
  const item = useRef("m1");
  // 2. 카테고리명(men/women/style)
  const catName = useRef("men");

  // 리랜더링을 위한 상태변수 : 무조건 리랜더링설정목적
  const [force, setForce] = useState(null);
  // 데이터 상태관리 변수
  const [currData, setCurrData] = useState(gdata);

  // 페이징을 위한 변수 셋팅하기 //////
  // 1. 페이지 단위수 : 한 페이지 당 레코드수
  const pgBlock = 10;
  // 2. 전체 레코드수 : 배열데이터 총개수
  const totNum = gdata.length;
  // 3. 현재 페이지 번호 : 가장중요한 리스트 바인딩의 핵심!
  const [pgNum, setPgNum] = useState(1);

  // 리스트 만들기 함수 ////////
  const makeList = () => {
    // 리턴용변수
    let retVal;

    console.log(currData);

    // 1. Filter List //////////////
    if (myCon.gMode === "F") {

      // 데이터 초기화하기 /////////////
      // gdata와 같지 않으면 초기화!
      // 단, 모드를 변경하는 상단메뉴일때만 적용해야함!
      // 컨텍스트 API의 gInit 참조변수가 true일때만 적용함!
      if(currData !== gdata && myCon.gInit.current){
        // 깊은복사로 데이터 재할당!
        // -> 무한 리랜더링을 피하려면 참조변수를 활용한다!
        transData.current = JSON.parse(JSON.stringify(gdata));
      }

      // 참조변수 데이터로 map 돌기!
      retVal = transData.current.map((v, i) => (
        <div key={i}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showDetail(v.ginfo[0], v.cat);
            }}
          >
            [{i + 1}]
            <img
              src={"./images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"}
              alt="dress"
            />
            <aside>
              <h2>{v.ginfo[1]}</h2>
              <h3>{addComma(v.ginfo[3])}원</h3>
            </aside>
          </a>
        </div>
      ));
    } ////////////// if //////////////

    // 2. Paging List //////////////
    else if (myCon.gMode === "P") {
      // 페이징은 데이터 변형이 아닌 원본데이터에 대한
      // 부분데이터 가져오기다!
      // console.log('원본data:',gdata);

      // 만약 상단메뉴를 클릭해서 들어온 경우
      // 페이지 번호가 1이 아니면 초기화해주기
      if(pgNum!==1 && myCon.gInit.current){
        setPgNum(1);
      }

      console.log('원본개수:',totNum);

      // map아닌 일반 for문사용시
      // 배열에 push하여 데이터넣기
      // JSX문법 태그를 그냥태그가 아.니.다!!!!
      // 절대 변환불필요!!! 그대로 보내서 출력함!
      retVal = []; // 배열형 할당!

      // 시작값 : (페이지번호-1)*블록단위수
      let initNum = (pgNum - 1) * pgBlock;
      // 한계값 : 블록단위수*페이지번호
      let limitNum = pgBlock * pgNum;

      for (let i = initNum; i < limitNum; i++) {
        // 마지막 페이지 한계수체크
        if (i >= totNum) break;

        // 순회하며 데이터 넣기
        retVal.push(
          <div key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showDetail(gdata[i].ginfo[0], gdata[i].cat);
              }}
            >
              [{i + 1}]
              <img
                src={
                  "./images/goods/" +
                  gdata[i].cat +
                  "/" +
                  gdata[i].ginfo[0] +
                  ".png"
                }
                alt="dress"
              />
              <aside>
                <h2>{gdata[i].ginfo[1]}</h2>
                <h3>{addComma(gdata[i].ginfo[3])}원</h3>
              </aside>
            </a>
          </div>
        );
      } //////// for //////////////
    } ////////////// if //////////////

    // 분기문 결과 리턴하기 ////
    return retVal;
  }; ////////////// makeList ///////////////

  /************************************* 
    함수명 : pagingLink
    기능 : 리스트 페이징 링크를 생성한다!
  *************************************/
  const pagingLink = () => {
    // 페이징 블록만들기 ////
    // 1. 블록개수 계산하기
    const blockCnt = Math.floor(totNum / pgBlock);
    // 전체레코드수 / 페이지단위수 (나머지가 있으면 +1)
    // 전체레코드수 : pgBlock변수에 할당됨!
    // 2. 블록 나머지수
    const blockPad = totNum % pgBlock;

    // 최종 한계수 -> 여분레코드 존재에 따라 1더하기
    const limit = blockCnt + (blockPad === 0 ? 0 : 1);

    // console.log(
    //   "블록개수:",
    //   blockCnt,
    //   "\n블록나머지:",
    //   blockPad,
    //   "\n최종한계수:",
    //   limit
    // );

    // 리액트에서는 jsx문법 코드를 배열에 넣고
    // 출력하면 바로 코드로 변환된다!!!
    let pgCode = [];
    // 리턴 코드 //////////
    // 만약 빈태그 묶음에 key를 심어야할 경우
    // 불가하므로 Fragment 조각 가상태그를 사용한다!
    for (let i = 0; i < limit; i++) {
      pgCode[i] = (
        <Fragment key={i}>
          {pgNum - 1 === i ? (
            <b>{i + 1}</b>
          ) : (
            <a href="#" onClick={chgList}>
              {i + 1}
            </a>
          )}

          {i < limit - 1 ? " | " : ""}
        </Fragment>
      );
    } ////// for /////

    return pgCode;
  }; /////////// pagingLink 함수 ////////

  /************************************* 
    함수명 : chgList
    기능 : 페이지 링크 클릭시 리스트변경
  *************************************/
  const chgList = (e) => {
    // 초기화 전역변수 false로 업데이트하기(초기화막기!)
    myCon.gInit.current = false;

    let currNum = e.target.innerText;
    // console.log("번호:", currNum);
    // 현재 페이지번호 업데이트! -> 리스트 업데이트됨!
    setPgNum(currNum);
    // 바인드 리스트 호출 불필요!!!
    // 왜? pgNum을 bindList()에서 사용하기때문에
    // 리랜더링이 자동으로 일어남!!!
  }; ///////// chgList 함수 //////////////

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 상품클릭시 상세보기 보여주는 함수 ////
  const showDetail = (gCode, catCode) => {
    // gCode - 상품코드, catCode - 분류명
    console.log("상세보여!", gCode, catCode);

    // 1. 값업데이트
    item.current = gCode;
    catName.current = catCode;

    // 2. 리랜더링 상태변경
    setForce(Math.random());
    // -> 리랜더링시 변경된 부분만 업데이트 한다!
    // -> ItemDetail 컴포넌트 파트가 업데이트됨!

    // 대상 보이기
    $(".bgbx").slideDown(600);
  }; //////////// showDetail 함수 ///////////
  

  /******************************************* 
    함수명: changeList
    기능: 체크박스에 따른 리스트 변경하기
  *******************************************/
  const changeList = (e) => {
    // 체크박스일 경우 초기화 전역변수 false로 업데이트
    myCon.gInit.current = false;

    // 1. 체크박스 아이디
    const cid = e.target.id;

    // 2. 체크박스 체크여부 : checked (true/false)
    const chked = e.target.checked;
    console.log("아이디:", cid, chked);

    // 3.체크박스 체크개수세기 : 1개초과시 배열합치기!
    let num = $(".chkbx:checked").length;
    console.log("체크개수:", num);

    // 4. 체크박스 체크유무에 따른 분기
    // (1) 체크박스가 true일대 해당 검색어로 검색하기
    // -> 데이터 추가시 원본에서 데이터를 만들고 참조변수에 추가함!
    if (chked) {
      // 현재데이터 변수에 담기(원본데이터로 부터!)
      const nowList = gdata.filter((v) => {
        if (v.cat === cid) return true;
      }); /////////// filter //////////

      // 체크개수가 1초과일때 배열합치기
      if (num > 1) {
        // 스프레드 연산자(...)사용!
        transData.current = [...transData.current, ...nowList];
      } //// if /////
      else {
        // 하나일때
        transData.current = nowList;
      }

      console.log("추가구역:", transData.current);
    } /////////// if /////////

    // (2) 체크박스가 false일때 데이터 지우기
    // -> 참조변수에 있는 데이터를 기준으로 데이터를 삭제함!
    else {
      console.log("지울데이터:", cid);
      // 기존 연결성을 끊고 깊은복사로 임시변수에 할당함!
      const temp = JSON.parse(JSON.stringify(transData.current));

      // for문을 돌면서 배열데이터중 해당값을 지운다!
      for (let i = 0; i < temp.length; i++) {
        // -> 삭제대상:
        // 데이터중 cat 항목값이 아이디명과 같은것
        if (temp[i].cat == cid) {
          // 해당항목 지우기
          // 배열지우기 메서드 : splice(순번,개수)
          temp.splice(i, 1);
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

      console.log("삭제처리된배열:", temp);

      // 결과처리하기 : 삭제처리된 temp를 참조변수에 할당!
      transData.current = temp;
    } /////////// else ///////////

    // 6. 검색결과 리스트 업데이트 하기
    setCurrData(transData.current);
    // 위의 분기문에서 만들어진 참조변수 데이터를
    // 최종 업데이트함!
    // 리스트가 리랜더링됨!!!
  }; ////////////// changeList 함수 ///////////

  // 리턴 코드 ///////////////////
  return (
    <main id="cont">
      <h1 className="tit">All ITEMS LIST</h1>

      {
        // [ Filter List 모드 출력 ] //
        myCon.gMode === "F" && (
          <section>
            <div id="optbx">
              <label htmlFor="men">남성</label>
              <input
                type="checkbox"
                className="chkbx"
                id="men"
                defaultChecked
                onChange={changeList}
              />
              <label htmlFor="women">여성</label>
              <input
                type="checkbox"
                className="chkbx"
                id="women"
                defaultChecked
                onChange={changeList}
              />
              <label htmlFor="style">스타일</label>
              <input
                type="checkbox"
                className="chkbx"
                id="style"
                defaultChecked
                onChange={changeList}
              />
            </div>
            <div className="grid">{makeList()}</div>
          </section>
        )
      }

      {
        // [ Paging List 모드 출력 ] //
        myCon.gMode === "P" && (
          <section>
            <div className="grid">{makeList()}</div>
            <div id="paging">{pagingLink()}</div>
          </section>
        )
      }

      {
        // [ More List 모드 출력 ] //
        myCon.gMode === "M" && (
          <section>
            <div className="grid">{makeList()}</div>
            <div id="more">
              <button className="more">MORE</button>
            </div>
          </section>
        )
      }
      {/* 2.5. 상세보기박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: 0,
          paddingTop: "12vh",
          backdropFilter: "blur(8px)",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        <ItemDetail goods={item.current} cat={catName.current} />
      </div>
    </main>
  );
} /////////////// GList 컴포넌트 ///////////
