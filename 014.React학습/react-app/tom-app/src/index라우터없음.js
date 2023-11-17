// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// css 도 불러온다!
import "./css/index.css";
import { TopArea } from "./dc/layout/TopArea";
import { MainArea } from "./dc/layout/MainArea";
import { FooterArea } from "./dc/layout/FooterArea";

function App() {
  // 상단메뉴 클릭시 메인컨텐츠 변경을 위해
  // 후크관리변수를 생성한다!
  const [menu, setMenu] = useState("main");

  // 메뉴 업데이트 함수
  const chgMenu = (txt) => {
    console.log("메뉴 업데이트!", txt);
    // 상태관리변수 변경
    setMenu(txt);
  }; ////////// chgMenu 함수 //////

  return (
    <>
      <TopArea chgFn={chgMenu} />
      <MainArea cat={menu} />
      <FooterArea />
    </>
  );
}

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
