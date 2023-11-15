// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// 로딩구역없이 함수로 구현함! /////

// 제이쿼리 호출
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');


export function autoScroll() {
  /****************************************** 
    대상 변수할당하기
    ******************************************/
  // 전체 페이지번호
  let pno = 0;
  // 페이지 요소
  const pg = $(".page");
  // 전체 페이지개수
  const pgcnt = pg.length;
  console.log("페이지개수:", pgcnt, pg);
  // 광실행금지변수
  let prot = [];
  // 광스크롤금지
  prot[0] = 0;
  // GNB 메뉴 li
  const gnb = $(".gnb li");
  // indic 메뉴 li
  const indic = $(".indic li");
  // 각 페이지별 등장요소
  const minfo = $(".minfo");

  /****************************************** 
    이벤트 등록하기
    ******************************************/
  // 윈도우 휠이벤트 발생시
//   $(window).on('wheel',wheelFn);
document.addEventListener('wheel',wheelFn)

  // 키보드 이벤트발생시 업데이트
  // 1. Page Up(33) / Up Arrow (38)
  // 2. Page Down(34) / Down Arrow (40)
//   $(document).keydown((e) => {
  document.addEventListener('keydown',(e) => {
    // 이전페이지이동
    if (e.keyCode === 33 || e.keyCode === 38) {
      pno--;
      if (pno === -1) pno = 0;
      movePg();
    }
    // 다음페이지이동
    else if (e.keyCode === 34 || e.keyCode === 40) {
      pno++;
      if (pno === pgcnt) pno = pgcnt - 1;
      movePg();
    }
  }); ///////////// keydown ////////////////

  // 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
  $("html,body").animate({ scrollTop: "0px" });

  /**************************************** 
    함수명: wheelFn
    기능: 마우스휠 이벤트 발생시 호출됨
    -> 한페이지씩 자동스크롤 기능
    ****************************************/
  function wheelFn(e) {
    // 광휠금지
    if (prot[0]) return;
    chkCrazy(0);

    console.log("휠~~~~~~!");

    // 1.휠방향 알아내기
    let delta = e.wheelDelta;
    console.log(delta);

    // 2. 방향에 따른 페이지번호 증감
    if (delta < 0) {
      pno++;
      if (pno === pgcnt) pno = pgcnt - 1;
      // 마지막 페이지번호에 고정!
    } //// if /////
    else {
      pno--;
      if (pno === -1) pno = 0;
      // 첫페이지번호에 고정!
    } //// else ////

    console.log(pno);

    // 3. 스크롤 이동하기 + 메뉴에 클래스"on"넣기
    movePg();
  } /////////////// wheelFn 함수 ///////////////

  /******************************************** 
    함수명: chkCrazy
    기능: 광적동작 체크하여 제어리턴
    ********************************************/
  function chkCrazy(seq) {
    // seq 관리변수 순번
    prot[seq] = 1;
    setTimeout(() => (prot[seq] = 0), 800);
  } //////// chkCrazy함수 //////////////

  /******************************************** 
    함수명: movePg
    기능: 페이지이동 애니메이션
    ********************************************/
  function movePg() {
    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(window).height() * pno + "px",
        },
        700,
        "easeInOutQuint"
      );
  } ///////////////// movePg ////////////////
} ///////////// autoScroll 함수 //////////
