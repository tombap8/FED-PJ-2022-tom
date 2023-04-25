// 제이쿼리로 구현한 가로방향 스크롤 JS : jquery-HrScroll.js

// 로딩구역없이 함수로 구현함! /////

/****************************************** 
    대상 변수할당하기
******************************************/
// 전체 페이지번호
// let pno = 0;

// 1.페이지번호 대신 스크롤횟수
let cnt_sc = 0;

// 2.이동단위!
const unit_sc = 200;

// 3.스크롤 횟수 한계값 : 화면가로폭*페이지수
let limit_sc = $(window).width()*7;
console.log("limit_sc:",limit_sc);

// 페이지 요소
const pg = $(".page");
// 전체 페이지개수
const pgcnt = pg.length;
// console.log("페이지개수:", pgcnt, pg);
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
$(window).on("wheel", wheelFn);
// GNB메뉴 클릭시 : 대상 - .gnb a
$(".gnb a").click(chgMenu);
// 인디케이터 클릭시 : 대상 - .indic a
$(".indic a").click(chgMenu);

// 키보드 이벤트발생시 업데이트
// 1. Page Up(33) / Up Arrow (38) 
// 2. Page Down(34) / Down Arrow (40) 
$(document).keydown((e)=>{
    // 이전페이지이동
    if(e.keyCode===33 || e.keyCode===38){
        pno--;
        if (pno === -1) pno = 0;
        movePg();
    }
    // 다음페이지이동
    else if(e.keyCode===34 || e.keyCode===40){
        pno++;
        if (pno === pgcnt) pno = pgcnt - 1;
        movePg();
    }
}); ///////////// keydown ////////////////


// 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
$("html,body").animate({ scrollLeft: "0px" });


/**************************************** 
    함수명: wheelFn
    기능: 마우스휠 이벤트 발생시 호출됨
    -> 한페이지씩 자동스크롤 기능
****************************************/
function wheelFn() {
    // 광휠금지
    // if (prot[0]) return;
    // chkCrazy(0);

    console.log("휠~~~~~~!");

    // 1.휠방향 알아내기
    let delta = event.wheelDelta;
    console.log(delta);

    // 2. 방향에 따른 페이지번호 증감
    if (delta < 0) {

        // 스크롤횟수*단위이동값 크기가
        // 전체크기보다 작을때만 ++처리함!
        if(cnt_sc*unit_sc < limit_sc){
            cnt_sc++;
        }
        
    } //// if /////
    else {
        // 스크롤횟수*단위이동값 크기가
        // 0보다 클때만 --처리함!
        if(cnt_sc*unit_sc > 0){
            cnt_sc--;
        }
    } //// else ////

    console.log(cnt_sc);

    // 3. 스크롤 이동하기 + 메뉴에 클래스"on"넣기
    movePg();
} /////////////// wheelFn 함수 ///////////////

// 광클 초기값
prot[1] = 0;
/******************************************** 
    함수명: chgMenu
    기능: 메뉴 클릭시 메뉴변경과 페이지이동
********************************************/
function chgMenu() {
    // 0. 광클금지
    if (prot[1]) return;
    chkCrazy(1);

    // 1. 클릭된 a요소의 부모 li 순번을 구함 === pno
    let idx = $(this).parent().index();

    console.log("나,클릭?", this, idx);

    // 2. 전역페이지번호에 순번 업데이트
    pno = idx;

    // 3. 페이지이동 + 메뉴에 클래스"on"넣기
    movePg();
} ////////// chgMenu 함수 ///////////////////

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
    // 이동할 위치 -> 이동단위*스크롤횟수
    let mpos = unit_sc * cnt_sc;

    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    $("html,body")
    .stop()
    .animate({ 
        // 가로스크롤이동이므로 scrollLeft로 적용함!
        // 가로스크롤 이동 기준은 윈도우 width 임!
            scrollLeft: mpos + "px",
        },
        2000,
        "easeOutQuint",
        // showEle // 이동후 콜백함수호출!
    );

    // 대상: GNB메뉴 , 인디케이터 메뉴
    // gnb.eq(pno).addClass("on").siblings().removeClass("on");
    // indic.eq(pno).addClass("on").siblings().removeClass("on");
} ///////////////// movePg ////////////////

// 등장할 요소 초기화 /////
minfo.css({
    opacity: 0,
    transform: "translate(-50%,50%)",
    transition: ".3s ease-out",
}); ///////// css //////

/******************************************** 
    함수명: showEle
    기능: 페이지이동후 요소 등장하기
********************************************/
function showEle() {
    // .minfo 페이지별 등장하기!
    pg.eq(pno).find(".minfo").css({
        opacity: 1,
        transform: "translate(-50%,-50%)",
    }) ///////// css //////
    // 다른페이지 초기화
    .parents(".page").siblings().find(".minfo")
    .css({
        opacity: 0,
        transform: "translate(-50%,50%)",
        transition: ".3s ease-out",
    }); ///////// css //////
} /////////// showEle 함수 ///////////////////

// 등장액션함수 최초호출 ///
// setTimeout(showEle, 1000);
