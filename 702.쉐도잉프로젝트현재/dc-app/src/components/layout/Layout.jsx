// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export function Layout() {

  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0);
  }); /////////// useEffect ///////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = (pgName,param) => goNav(pgName,param);

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <dcCon.Provider value={{ chgPage }}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
} /////////// Layout 컴포넌트 ///////////
