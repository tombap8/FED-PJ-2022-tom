// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useLayoutEffect, useState } from "react";
import { useEffect } from "react";

export function Layout() {
  
  // ********* Hook 상태관리 변수 ********* //
  // 1. 로그인 상태체크 변수 : 로컬스 'minfo'초기할당!
  const [logSts,setLogSts] = 
  useState(localStorage.getItem('minfo'));
  // 2. 로그인 환영메시지 상태변수
  const [logMsg,setLogMsg] = useState(null);

  /////////////////////////////
  ////// 로그아웃 함수 /////////
  // -> TopArea 컴포넌트에 전달함!
  const logOut = useCallback(()=>{
    // 1. 로컬스 삭제(minfo)
    localStorage.removeItem('minfo');
    // 2. 로그인 상태값 업데이트
    setLogSts(null);
    // 3. 로그인 메시지 업데이트
    setLogMsg(null);
    // 4. 첫페이지로 이동
    // chgPage('/',{});
  },[]); //////// logOut함수 //////////

  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{    

    
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0);
  }); /////////// useEffect ///////////
  
  // 랜더링후 실행구역 한번만 ///////
  useEffect(()=>{
    // 로그인 로컬스가 있으면 환영메시지 넣기
    if(localStorage.getItem('minfo')){
      const minfo = JSON.parse(localStorage.getItem('minfo'));
      // 유저아이콘
      const usrIcon = ["🙍‍♂️","🧏‍♀️","🦸‍♂","👨‍🎤","🦸‍♀"];
      // 컨텍스트 API에 공개된 로그인 메시지 업데이트하기!
      setLogMsg("Welcome "+
      minfo.unm+usrIcon[Math.floor(Math.random()*5)]);  
    } /////// if //////////
  },[]); ////// useEffect //////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback(
    (pgName,param) => goNav(pgName,param),[]);
  // 메모이제이션 되는 TopArea 컴포넌트에 제공하는 함수가
  // useCallback을 사용한 메모이제이션 처리되어야 변경없는 것을
  // 체크하여 함수를 업데이트 하지 않는다!
  // useCallback(기존익명함수,[의존성])
  // -> 의존성 변수가 없을때 비워놓아도 효과 있음!(단,형식은 맞출것!)

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능 
   2. logSts : 로그인 상태값
   3. setLogSts : 로그인 상태값 업데이트  
   4. setLogMsg : 로그인 메시지 업데이트  
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <dcCon.Provider value={{ chgPage, logSts, setLogSts, setLogMsg }}>
      {/* 메모이제이션 관리를 위해 함수를
      컨텍스트방식이 아닌 속성으로 직접보냄! */}
      <TopArea 
        chgPageFn={chgPage} 
        logSts={logSts} 
        logMsg={logMsg}
        logOut={logOut}
      />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
} /////////// Layout 컴포넌트 ///////////
