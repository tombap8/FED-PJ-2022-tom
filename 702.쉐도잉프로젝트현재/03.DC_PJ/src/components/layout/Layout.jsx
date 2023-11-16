// DC.com 레이아웃 컴포넌트

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export function Layout(){
  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수
  const chgPage = (txt) => goNav(txt); 

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });


    return(
    <dcCon.Provider value={{chgPage}}>
      <TopArea />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>

    );

} /////////// Layout 컴포넌트 ///////////