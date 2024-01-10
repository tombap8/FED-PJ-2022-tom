// 공통패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useRef, useState } from "react";

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

// 컨텍스트 API
import { pCon } from "../modules/PilotContext";

// 제이쿼리
import $ from "jquery";
import { SinSang } from "../modules/SinSang";
import { ItemDetail } from "../modules/ItemDetail";

// 수정된 부드러운 스크롤 /////
import { scrolled, setPos } from "../func/smoothScroll23";

// 리액트용 패럴랙스 - 설치 : npm i react-parallax
import { Parallax } from "react-parallax";
import { FashionIntro } from "../modules/FashionIntro";
// 설명 : https://www.npmjs.com/package/react-parallax

export function Fashion(props) {
  // 컨텍스트 API 사용!
  const myCon = useContext(pCon);

  // props.cat - 서브 카테고리명
  console.log("카테고리", props.cat);

  useEffect(() => {
    // 스크롤바 생성하기(x축은 숨김)
    $("html,body").css({
      overflow: "visible",
      overflowX: "hidden",
    });

    // 부드러운 스크롤
    document.addEventListener("mousewheel", scrolled, {
      passive: false,
    });
    document.addEventListener("DOMMouseScroll", scrolled, {
      passive: false,
    });
    // 초기값
    setPos(0);

    // 로고클릭시 페이지이동 : pgName 변경 -> chgPgName()
    $("#logo a").click(() => myCon.chgPgName("main"));

    // 소멸자 호출 //////////
    return () => {
      console.log("다시소멸~~~~");

      document.removeEventListener("mousewheel", scrolled, {
        passive: false,
      });
      document.removeEventListener("DOMMouseScroll", scrolled, {
        passive: false,
      });
      // 초기값 복원
      setPos(0);
    }; ////// 소멸자 끝 ///////

    // 상품상세보기 박스 처음에 숨기기
    // $(".bgbx").hide();
  }, []); ///////// useEffect ///////////

  // 카테고리 이전것 설정
  const afterCat = useRef(null);
  console.log("패션cat:", props.cat, "/패션afterCat:", afterCat.current);

  // 카테고리가 변경시에만 위로이동!
  if (props.cat !== afterCat.current) setPos(0);

  // 이전카테고리 업데이트
  afterCat.current = props.cat;

  // 후크 상태변수
  const [item, setItem] = useState("m1");

  // 신상컴포넌트에서 상세컴포넌트로 값을 전하기 위한
  // 상태변수를 셋팅하여 함수로 이것을 변경하게 해준다!
  // 프롭스 펑션다운~!!
  const chgItem = (v) => {
    console.log("상품정보:", v);
    // 상태변수 업데이트
    setItem(v);
    // 상세박스 슬라이드 애니로 보이기
    $(".bgbx").slideDown(400);
  }; /////////// chgItem 함수 //////

  // 리턴코드 //////////////////////////
  return (
    <>
      {/* 1. 배너영역 */}
      <section id="ban" className="page">
        <SwiperApp cat={myCon.pgName} />
      </section>
      {/* 2. 신상품영역 */}
      <section id="c1" className={"cont c1 " + myCon.pgName}>
        <SinSang cat={myCon.pgName} chgItemFn={chgItem} />
      </section>
      {/* 2.5. 상세보기박스 */}
      <div className="bgbx">
        <ItemDetail goods={item} cat={props.cat} />
      </div>
      {/* 3. 패럴랙스 영역 */}
      <section id="c2" className="cont">
        <Parallax
          className="c2"
          bgImage={"./images/sub/" + props.cat + "/02.special.png"}
          strength={200}
        ></Parallax>
        {/* 패럴랙스 속성 - bgImage : 배경이미지설정 / 
        strength : 움직임정도(-500~1000) 높은숫자 반대방향  */}
      </section>
      {/* 4. 단일상품영역 */}
      <section id="c3" className="cont c3">
        
      <FashionIntro cat="women" />
      </section>
      {/* 5. 스타일상품영역 */}
      <section id="c4" className="cont c4">
        
        
      <FashionIntro cat="style" />
      </section>
    </>
  );
} //////// Fashion 컴포넌트 ///////
