// 공통패션 서브페이지 컨텐츠 컴포넌트

import {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

// 컨텍스트 API
import { pCon } from "../modules/PilotContext";

// 데이터 셋업을 위한 gnb데이터 불러오기
import { gnbData } from "../data/gnb";

// 제이쿼리
import $ from "jquery";
import { SinSang } from "../modules/SinSang";
import { ItemDetail } from "../modules/ItemDetail";

// 부드러운 스크롤 JS
import { scrolled, setPos } from "../func/smoothScroll24";

// 리액트용 패럴랙스 - 설치 : npm i react-parallax
import { Parallax } from "react-parallax";
// 설명 : https://www.npmjs.com/package/react-parallax
import { FashionIntro } from "../modules/FashionIntro";

export function Fashion(props) {
  // 컨텍스트 API 사용!
  const myCon = useContext(pCon);

  // props.cat - 서브 카테고리명
  console.log("패션페이지cat:", props.cat);

  useEffect(() => {
    // [부드러운 스크롤 함수 이벤트 설정하기]
    document.addEventListener("mousewheel", scrolled, {
      passive: false,
    });
    // 이전버전 파이어폭스 브라우저 이벤트처리
    document.addEventListener("DOMMouseScroll", scrolled, {
      passive: false,
    });
    // 이벤트 설정시 passive:false 설정의 이유는
    // 기본 설정값은 true이고 이것은 window,document,body
    // 이 세가지에 preventDefault() 기본작동막기를 할 경우
    // 이것을 사용할 수 없도록 설정된 값이 treu다!
    // passive모드를 false로 꺼놔야 window,document,body
    // 에 대한 기본 막기가 가능함!(여기서는 스크롤 기능임!)

    // 부드러운 스크롤 위치값 초기화!!!
    // setPos(0);

    // 스크롤바 생성하기(x축은 숨김)
    $("html,body").css({
      overflow: "visible",
      overflowX: "hidden",
    });

    // 로고클릭시 페이지이동 : pgName 변경 -> chgPgName()
    $("#logo a").click(() => myCon.chgPgName("main"));

    // 상품상세보기 박스 처음에 숨기기
    // $(".bgbx").hide();

    // 소멸자 구역 //////////////
    return () => {
      // 컴포넌트 소멸시 이벤트 삭제
      // 부드러운 스크롤 함수 이벤트 삭제하기
      document.removeEventListener("mousewheel", scrolled, {
        passive: false,
      });
      document.removeEventListener("DOMMouseScroll", scrolled, {
        passive: false,
      });

      // 부드러운 스크롤 위치값 초기화!!!
      setPos(0);

      // 이벤트 OFF - 필수!!! -> 안하면 첫페이지 에러남
      $(".gnb a").off("click");

      // 여기서 걸어준 앞단 이벤트는 모두 끊어준다!
      window.removeEventListener('scroll',chkPos);
    }; /////// 소멸자 ////////////////
  }, []); ///////// useEffect ///////////

  // props.cat 카테고리가 변경될때만 맨위로 값 변경!
  useLayoutEffect(() => {
    console.log("같으면 실행안함?");
    // 부드러운 스크롤 위치값
    setPos(0);
    // 윈도우 실제로 상단이동
    window.scrollTo(0, 0);
    // 열렸을 수 있는 상세페이지 닫기
    $(".bgbx").hide();

    // 메뉴 클릭이동 셋팅은 제이쿼리로~!^^ ////
    $(".gnb a").on("click", (e) => {
      e.preventDefault();
      // 아이디 읽어오기
      let cid = $(e.currentTarget).attr("href");
      // 해당 아이디 위치값 구하기
      let cpos = $(cid).offset().top;
      console.log(cpos);
      // 해당위치로 애니메이션 이동하기
      $("html,body")
        .stop()
        .animate({ scrollTop: cpos + "px" }, 600);
      // 부드러운 스크롤 씽크 맞추기
      setPos(cpos);
    }); ///////////// click //////////

    // 등장액션 초기화
    setEle();

    window.addEventListener('scroll',chkPos);

  }, [props.cat]);


  // 위치체크 및 액션함수 ////
  const chkPos = () => {
    // 등장액션 대상은 모두 순회함
    $('.sc-ani').each((idx,ele)=>{
      let cpos = retClient(idx);
      console.log(cpos);
      // 위치값이 화면1/3위치보다 위로 올라오면 등장
      if(cpos < $(window).height()/3*2){
        $(ele).css({
          opacity: 1,
          transform: 'translateY(0%)',  
        });
      }

    })
  }

  // 등장액션 일괄 셋팅 ///
  const setEle = () => {
    $('.sc-ani').css({
      opacity: 0,
      transform: 'translateY(20%)',
      transition: '1s ease-in-out',
    })
  }

  // 위치값 리턴함수 ///////
  const retClient = idx => {
    console.log(idx);
    return document.querySelectorAll('.sc-ani')[idx].getBoundingClientRect().top;
  }



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
      <section id="c1" className={"cont sc-ani c1 " + myCon.pgName}>
        <SinSang cat={myCon.pgName} chgItemFn={chgItem} />
      </section>
      {/* 2.5. 상세보기박스 */}
      <div className="bgbx">
        <ItemDetail goods={item} cat={props.cat} />
      </div>
      {/* 3. 패럴랙스 영역 : 리액트용 패럴랙스 적용 */}
      <section id="c2" className="cont">
        <Parallax
          className="c2"
          // 패럴랙스할 배경이미지 설정속성 bgImage
          bgImage={"./images/sub/" + props.cat + "/02.special.png"}
          // 패럴랙스 이동정도 조정속성 strength
          // 수치범위 :  -500 ~ 1000 -> 높은 숫자는 반대방향
          strength={200}
        >
          <h2 class="c2tit sc-ani">2024 {gnbData[props.cat][1]}</h2>
        </Parallax>
      </section>
      {/* 4. 단일상품영역 */}
      <section id="c3" className="cont c3">
        <FashionIntro cat="sub" subcat={[props.cat, 0]} />
      </section>
      {/* 5. 스타일상품영역 */}
      <section id="c4" className="cont c4">
        <FashionIntro cat="sub" subcat={[props.cat, 1]} />
      </section>
    </>
  );
} //////// Fashion 컴포넌트 ///////
