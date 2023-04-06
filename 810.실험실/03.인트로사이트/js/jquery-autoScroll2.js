// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// [ 클래스로 묶어서 export해준다! ]
class AutoScroll {
    constructor() {
        // 로딩구역없이 함수로 구현함! /////

        /******************************************
            대상 변수할당하기
        ******************************************/
        // 전체 페이지번호
        this.pno = 0;
        // 페이지 요소
        this.pg = $(".page");
        // 전체 페이지개수
        this.pgcnt = this.pg.length;
        // console.log("페이지개수:", pgcnt, pg);
        // 광실행금지변수
        this.prot = [];
        // 광스크롤금지
        this.prot[0] = 0;
        // 광클 초기값
        this.prot[1] = 0;
        // GNB 메뉴 li
        this.gnb = $(".gnb li");
        // indic 메뉴 li
        this.indic = $(".indic li");
        // 각 페이지별 등장요소
        this.minfo = $(".minfo");
        // 이동시간
        this.sc_speed = 700;
        // 이징값
        this.easing = "easeInOutQuint";

        this.initPg();
        
    } //// constructor /////////////


    
        /****************************************
            메서드명: initPg
            기능: 페이지초기화
        ****************************************/
       initPg () {
            // 등장액션메서드 최초호출 ///
            setTimeout(this.showEle, 1000);
            /******************************************
                이벤트 등록하기
            ******************************************/
            // 윈도우 휠이벤트 발생시
            $(window).on("wheel", this.wheelFn);
            // GNB메뉴 클릭시 : 대상 - .gnb a
            $(".gnb a").click(this.chgMenu);
            // 인디케이터 클릭시 : 대상 - .indic a
            $(".indic a").click(this.chgMenu);

            // 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
            $("html,body").animate({ scrollTop: "0px" });
       } //////// initPg 메서드 //////////////


        /****************************************
            메서드명: wheelFn
            기능: 마우스휠 이벤트 발생시 호출됨
            -> 한페이지씩 자동스크롤 기능
        ****************************************/
        wheelFn () {
            // 광휠금지
            if (this.prot[0])
                return;
            this.chkCrazy(0);

            console.log("휠~~~~~~!");

            // 1.휠방향 알아내기
            let delta = event.wheelDelta;
            console.log(delta);

            // 2. 방향에 따른 페이지번호 증감
            if (delta < 0) {
                pno++;
                if (pno === pgcnt)
                    pno = pgcnt - 1;
                // 마지막 페이지번호에 고정!
            } //// if /////
            else {
                pno--;
                if (pno === -1)
                    pno = 0;
                // 첫페이지번호에 고정!
            } //// else ////

            console.log(pno);

            // 3. 스크롤 이동하기 + 메뉴에 클래스"on"넣기
            movePg();
        } /////////////// wheelFn 메서드 ///////////////

        /********************************************
            메서드명: chgMenu
            기능: 메뉴 클릭시 메뉴변경과 페이지이동
        ********************************************/
        chgMenu () {
            // 0. 광클금지
            if (prot[1])
                return;
            chkCrazy(1);

            // 1. 클릭된 a요소의 부모 li 순번을 구함 === pno
            let idx = $(event.currentTarget).parent().index();

            console.log("나,클릭?", this, idx);

            // 2. 전역페이지번호에 순번 업데이트
            pno = idx;

            // 3. 페이지이동 + 메뉴에 클래스"on"넣기
            movePg();
        } ////////// chgMenu 메서드 ///////////////////





        /********************************************
            메서드명: chkCrazy
            기능: 광적동작 체크하여 제어리턴
        ********************************************/
        chkCrazy (seq) {
            // seq 관리변수 순번
            prot[seq] = 1;
            setTimeout(() => (prot[seq] = 0), this.sc_speed);
        } //////// chkCrazy메서드 //////////////





        /********************************************
            메서드명: movePg
            기능: 페이지이동 애니메이션
        ********************************************/
        movePg () {
            // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
            $("html,body").animate(
                {
                    scrollTop: $(window).height() * pno + "px",
                },
                this.sc_speed,
                this.easing,
                //showEle // 이동후 콜백메서드호출!
            );

            // 대상: GNB메뉴 , 인디케이터 메뉴
            gnb.eq(pno).addClass("on").siblings().removeClass("on");
            indic.eq(pno).addClass("on").siblings().removeClass("on");
        } ///////////////// movePg ////////////////


       




        /********************************************
            메서드명: showEle
            기능: 페이지이동후 요소 등장하기
        ********************************************/
        showEle() {
            console.log("요소액션!");
            // .minfo 페이지별 등장하기!
            // pg.eq(pno).find(".minfo").css({
            //     opacity: 1,
            //     transform: "translate(-50%,-50%)",
            // }) ///////// css //////

            //     // 다른페이지 초기화
            //     .parents(".page").siblings().find(".minfo")
            //     .css({
            //         opacity: 0,
            //         transform: "translate(-50%,50%)",
            //         transition: ".3s ease-out",
            //     }); ///////// css //////
        } /////////// showEle 메서드 ///////////////////



} /////////////// AutoScroll ///////////////////

// 내보내기
export default AutoScroll;