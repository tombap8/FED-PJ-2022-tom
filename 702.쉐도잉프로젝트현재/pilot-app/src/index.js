// 메인 페이지 JS - index.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
// 컨텍스트 API 불러오기
import { pCon } from "./modules/PilotContext";

import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";
import { CartList } from "./modules/CartList";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 페이지 공통 CSS
import "./css/common.css";

// 최상위 Root 컴포넌트 ///////
function App() {
  // 후크상태변수 설정 : 페이지변경
  const [pgName, setPgName] = useState("main");

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt);
  }; ///////// chgPgName 함수 //////

  // 자식 카트 컴포넌트와 함께 상태값 공유할 변수
  const flag = useRef(true);
  // -> 이값이 true일때만 새로추가하는 데이터가 반영됨
  // -> 이값이 false이면 카트 컴포넌트의 삭제 등 자체기능이 작동함!
  // useRef를 사용한 이유는 리랜더링시에도 값을 유지하면서
  // 이 값이 변경되어도 리랜더링 되지 않아야 하기 때문에 선택함!!!

  // 카트 사용여부 초기값은 로컬스 'cart'가 있으면 1
  // 없으면 0 으로 셋팅해준다!
  let stsVal = 0;
  let transVal = null;

  // 카트셋팅에 필요한 데이터를 로컬스에 따라 셋팅함!
  if (localStorage.getItem("cart")) {
    // 로컬스가 있으므로 객체화하기!
    transVal = JSON.parse(localStorage.getItem("cart"));
    // 로컬스 객체화 데이터 개수가 0이 아닐때만 상태값 1로 노출하기
    if (transVal.length !== 0) stsVal = 1;
  } ///// if ////////

  console.log("로컬스있니?", stsVal);

  // 로컬스 변환값 변수 - 상태변수로 리랜더링시 값을 유지하게함!
  const [transData, setTransData] = useState(transVal);

  // 카트사용여부 상태변수 /////////
  const [csts, setCsts] = useState(stsVal);

  // 랜더링 후 실행구역 ////////////
  useEffect(() => {
    // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
    $(".ham").click((e) => {
      // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
      $(".mbox").fadeToggle(400);

      // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
      $(e.currentTarget).toggleClass("on");
      // e.target과 e.currentTarget은 다르다!
      // 후자가 햄버거 버튼 자신임!
      // console.log(e.currentTarget)

      // 3. 비디오 재생/멈춤 : 대상 - .bgm
      // get(0)은 비디오컬렉션임! -> 제이쿼리용
      const vid = $(".bgm").get(0);
      vid.paused ? vid.play() : vid.pause();
      // console.log(vid.paused);
      // paused 속성 : 동영상 멈춤일때 true 리턴
      // play() 메서드 : 동영상 재생 메서드
      // pause() 메서드 : 동영상 정지 메서드
    }); //////// click ////////

    // 카트가 생성된 경우 버튼 보이기
    // (카트부모박스 .bgbx 보이기)
    console.log("카트노출상태:", csts);
    if (csts === 1) {
      $(() => {
        // 로딩구역 ///
        // 전체 보여라!
        $(".bgbx").show();
        // 카트 사이드에 나와라!
        $("#mycart").addClass("on");
      }); /// 로딩구역 /////
    } /// if ////

    // 랜더링구역 한번만 실행 : 옵션 []
  }, []); ////////// useEffect //////////////
  

  useEffect(()=>{
    // 전체상품리스트 페이지를 위한 초기화변수확인
    console.log('초기화상태값:',gInit.current);

  });

  // GList 페이지에서 사용하는 모드구분 참조변수
  const [gMode,setGMode] = useState('F');
  // 처음값은 'F' -> Filter List임!
  // 'P' -> Paging List
  // 'M' -> More List

  // 전체 리스트 페이지에서 초기화 상태변수를 참조변수로 생성
  const gInit = useRef(false);

  /***************************************** 
    [ 컨텍스트 API 공개 변수들 ]
    1. pgName - 페이지 이름
    2. chgPgName - 페이지 이름 업데이트함수
    3. flag - 카트 데이터 상태변수
    4. setTransData - 카트 사용 데이터 셋업
    5. transData - 카트 사용 데이터
    6. setCsts - 로컬스에 카트정보 셋업여부
    7. gMode, setGMode 
      - 전체 리스트 페이지 뷰모드 구분
    8. gInit - 초기화 여부를 결정하는 변수
  *****************************************/

  // 리턴코드 //////////////////////////
  return (
    <pCon.Provider
      value={{ pgName, chgPgName, 
        flag, setTransData, transData, 
        setCsts, gMode, setGMode, gInit }}
    >
      <TopArea cat={pgName} />
      <MainArea page={pgName} />
      <FooterArea />
      {/* 카트리스트 */}
      {
        csts && <CartList selData={transData} flag={flag} />
        // useRef 변수인 flag를 보내면 자식 컴포넌트에서도
        // 이 값을 참조할 뿐만 아니라 변경도 가능하다!!!
        // 주의: useRef변수는 사용시 변수명.current를 꼭 쓴다!
      }
    </pCon.Provider>
  );
} ///////////// App 컴포넌트 /////////////

/* 
<button onClick={()=>chgPgName('main')}>
  메인페이지
</button>
<button onClick={()=>chgPgName('men')}>
  남성페이지
</button>
<button onClick={()=>chgPgName('women')}>
  여성페이지
</button>
<button onClick={()=>chgPgName('style')}>
  스타일페이지
</button>
*/

// 출력하기 ///////
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
