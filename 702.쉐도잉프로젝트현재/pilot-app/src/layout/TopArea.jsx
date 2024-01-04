// Pilot PJ 상단영역 공통 컴포넌트

// GNB 데이터 가져오기
import { gnbData } from "../data/gnb";
import { TotalMenu } from "../modules/TotalMenu";

// 컨텍스트 API 불러오기
import { pCon } from "../modules/PilotContext";

// 제이쿼리
import $ from 'jquery';
import { useContext } from "react";

export function TopArea(props) {
  // props.cat - 카테고리명(메뉴데이터 선택용)

  // 컨텍스트 API 사용하기
  const myCon = useContext(pCon);

  // GNB 클릭시 변경적용함수 ////
  const clickGnb = (e) => {
    console.log('카테고리:',props.cat);
    // glist일 경우 적용하기
    if(props.cat==="glist"){
      // 초기화 상태값 true로 업데이트 하기
      myCon.gInit.current = true;
      
      // 클릭된요소
      const tgEle = $(e.currentTarget);
      let atxt = tgEle.text();
      console.log('메뉴글자:',atxt);
      
      // 우선 공유 참조변수 myCon.gMode를 업데이트
      myCon.setGMode(atxt.substr(0,1));
      // 첫글자만 잘라서 넣기!(F/P/M)
      console.log('gMode:', myCon.gMode);


      // 클릭된 자신은 class 'on'넣고
      // 다른 형제 메뉴는 class 'on'빼기
      tgEle.addClass('on')
      .siblings().removeClass('on')



    } //////// if ////////
  }; ///////// clickGnb /////////

  /// GNB메뉴 리스트 만들기 함수
  const makeList = (data) => {
    console.log('GNB리스트:',data);
    return(
      gnbData[data].map((v,i)=>
        <li key={i}
          className={
            props.cat==="glist"&&i===0?'on':''
          }
          onClick={clickGnb}>
          <a href="#">{v}</a>
        </li>
      )
    )

  }; ///////// makeList /////////



  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="./images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {makeList(props.cat)}
            </ul>
          </nav>
          <div className="ham">
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu />
        </header>
      </div>
    </>
  );
} //////////////// TopArea 컴포넌트 //////////
