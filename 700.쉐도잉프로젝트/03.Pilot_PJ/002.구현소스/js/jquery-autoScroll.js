// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// 로딩구역없이 함수로 구현함! /////

// 전체를 함수로 묶어준다! ///////
// 이유: export 하기위해!

function autoScroll() {
    // 현재 페이지 가로크기기준 800px이하일때 모바일로 변경
    // 모바일 상태변수
    let mob = 0; // 1-모바일/0-DT
    const updateW = () => {
        if ($(window).width() <= 800) mob = 1;
        else mob = 0;
        console.log("mob:", mob);
    }; ///////// updataW함수 ///////////

    // 로딩시 실행!
    updateW();

    // 배너초기화 적용함수
    const callInit = () => {
        if (!mob) {
            // 모바일아니면 초기화
            initSet();
            // 중간페이지일 경우 초기화 제외(지우기)
            $(".page").eq(pno)
            .find(".imgc,.txtc a").attr("style", "");

        } // 모바일이면 초기화 셋팅지우기
        else $(".imgc,.txtc a").attr("style", "");
    }; //////// callInit 함수 ////////

    // window 리사이즈 이벤트등록
    $(window).resize(() => {
        updateW(); // mob코드 업데이트함수
        callInit(); // 배너초기화 적용함수
    });

    /****************************************** 
        대상 변수할당하기
    ******************************************/
    // 전체 페이지번호
    let pno = 0;
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

    // 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
    $("html,body").animate({ scrollTop: "0px" });

    /**************************************** 
        함수명: wheelFn
        기능: 마우스휠 이벤트 발생시 호출됨
        -> 한페이지씩 자동스크롤 기능
    ****************************************/
    function wheelFn() {
        // 모바일일때 작동정지
        if (mob) return;

        // 광휠금지
        if (prot[0]) return;
        chkCrazy(0);

        console.log("휠~~~~~~!");

        // 1.휠방향 알아내기
        let delta = event.wheelDelta;
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
        // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
        $("html,body").animate(
            {
                scrollTop: $(window).height() * pno + "px",
            },
            700,
            "easeInOutQuint",
            actPage // 이동후 콜백함수호출!
        );

        // 대상: GNB메뉴 , 인디케이터 메뉴
        gnb.eq(pno).addClass("on").siblings().removeClass("on");
        indic.eq(pno).addClass("on").siblings().removeClass("on");
    } ///////////////// movePg ////////////////

    /******************************************** 
        [ 페이지 등장액션 요소 적용하기 ]
        1. 이벤트 적용시점 : 페이지도착후(애니후콜백) 
        2. 이벤트 대상 : 각 페이지 동일
            (1) .page .imgc - 이미지파트
            (2) .page .txtc h2 a - 타이틀파트
        3. 변경내용 :
            [스타일시트 아래 항목 변경]
            ((변경값))
            transform: rotate(45deg);
            opacity: 0;
            transition: 1s 1s; -> 타이틀만 지연시간
            ((고정값))
            transform-origin: left top;
            display: inline-block; -> a요소만
    ********************************************/

    /******************************************* 
        함수명: initSet
        기능: 등장요소 처음상태 셋팅
    *******************************************/
    function initSet() {
        // 1. 초기화하기 ///////////
        // 대상: .imgc
        $(".imgc").css({
            transform: "rotate(45deg)",
            transformOrigin: "-10% -10%",
            opacity: "0",
            transition: "1s ease-in-out",
        }); /////////// css ///////////

        // 대상: .txtc a
        $(".txtc a").css({
            transform: "rotate(45deg)",
            transformOrigin: "-100% -100%",
            opacity: "0",
            transition: "1s ease-in-out .5s",
            display: "inline-block",
        }); /////////// css ///////////
    } ////////////// initSet 함수 //////////////

    // 초기화함수 호출 -> 모바일이 아닐때만 호출!
    if (!mob) initSet();

    /**************************************** 
        함수명: actPage
        기능 : 페이지 도착후 등장애니메이션
    ****************************************/
    function actPage() {
        // 이동후 확인
        console.log("액숀~!!", pno);

        // pno가 0 또는 4가 아니면 액션작동!
        if (pno !== 0 || pno !== 4) {
            // 대상: 해당순번의 .page 아래 .imgc 와 .txtc a
            $(`.page:eq(${pno}) .imgc,
            .page:eq(${pno}) .txtc a`).css({
                transform: "rotate(0deg)",
                opacity: "1",
            }); /////////// css ///////////
        } ////////// if ///////////////////

        // 첫페이지 일때 초기화!
        if (pno === 0) initSet();
    } ///////////// actPage 함수 ////////////
} //////////// autoScroll /////////////////

// 전체함수 내보내기 ///////
export default autoScroll;
