// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export function Layout() {

  // 상단영역 단일 실행을 위한 상태값
  const [sts,setSts] = useState(null);
  const [keyWord,setKeyWord] = useState(null);

  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0);
  }); /////////// useEffect ///////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  // 하위요소에 전달할 함수를 useCallback을 사용해야 리랜더링시에 다시 전달하지 않는다
  // 이때 상태훅이 필요함!
  const chgPage = useCallback((pgName,param) => goNav(pgName,param),[sts]);

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <dcCon.Provider value={{ keyWord,setKeyWord,chgPage }}>
      <TopArea chgPageFn={chgPage} />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
} /////////// Layout 컴포넌트 ///////////
