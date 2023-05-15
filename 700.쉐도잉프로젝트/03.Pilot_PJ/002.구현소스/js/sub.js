// 카테고리 서브페이지 JS - sub.js

// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";
// 서브 데이터 가져오기
import subData from "./tempData/data-sub.js";
// 신상정보
import sinsang from "./gdsData/sinsang.js";

// 뷰엑스 스토어 JS 가져오기
// 중요! 반드시 메인JS파일 한군데서 불러와 써야 상태관리됨!
// -> 이 JS파일에 Vue 인스턴스 생성코드가 같이 있어야한다!
import store from "./store.js";

// 스와이퍼 변수
let swiper;

// 바로실행구역 함수구역 ///
// 바로실행구역을 쓰는이유: 
// 변수나 명령어를 다른 영역과 구분하여
// 코딩할때 주로 사용됨!
// GET방식 데이터를 store에서 초기값으로 셋팅하는 것을
// 인스턴스 생성전에 해야 아래쪽에 빈값으로 셋팅된값이
// 들어가서 에러나는 것을 막을 수 있다!
(() => {
    // 파라미터 변수
    let pm;

    // GET 방식으로 넘어온 데이터 처리하여
    // 분류별 서브 페이지 구성하기!
    // location.href -> 상단 url읽어옴!
    // indexOf("?")!==-1 -> 물음표가 있으면!
    if (location.href.indexOf("?") !== -1) 
        pm = location.href.split("?")[1].split("=")[1];
    // 물음표(?)로 잘라서 뒤엣것,이퀄(=)로 잘라서 뒤엣것
    // 파라미터 값만 추출함!
    // pm에 할당이 되었다면 undefined가 아니므로 true
    if (pm) store.commit("chgData", decodeURI(pm));
    // 메뉴를 선택해서 파라미터로 들어오지 않으면 "남성"
    else store.commit("chgData", "남성");

    // decodeURI() - 변경할 문자열만 있어야 변환됨
    // decodeURIComponent() - url전체에 섞여 있어도 모두 변환

})(); ////////////// 바로실행함수구역 ///////////////////

// DOM연결전 데이터 가공작업
console.log("created구역");

//###### 서브영역 메뉴 뷰 템플릿 셋팅하기 #######
// 1. 배너파트 컴포넌트
Vue.component("ban-comp", {
    template: subData.banner,
}); ////////// 상단영역 Vue component //////////

// 2. 컨텐츠1 영역 컴포넌트
Vue.component("cont1-comp", {
    template: subData.cont1,
}); ////////// 상단영역 Vue component //////////

// 3. 컨텐츠2 영역 컴포넌트
Vue.component("cont2-comp", {
    template: subData.cont2,
}); ////////// 상단영역 Vue component //////////

// 4. 컨텐츠3 영역 컴포넌트
Vue.component("cont3-comp", {
    template: subData.cont3,
}); ////////// 상단영역 Vue component //////////

// 5. 컨텐츠4 영역 컴포넌트
Vue.component("cont4-comp", {
    template: subData.cont4,
}); ////////// 상단영역 Vue component //////////

//###### 서브영역 뷰 인스턴스 셋팅하기 #######
new Vue({
    el: "#cont",
    store, // 뷰엑스 스토어 등록필수!!!
}); ////////// 상단영역 Vue component //////////

//###### 상단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp", {
    template: comData.tareaSub,
    methods: {},
}); ////////// 상단영역 Vue component //////////

//###### 하단영역 메뉴 뷰 템플릿 셋팅하기 #######
Vue.component("foot-comp", {
    template: comData.barea,
}); ////////// 하단영역 Vue component //////////

//###### 상단영역 뷰 인스턴스 생성하기 ##########
// new Vue({옵션})
new Vue({
    el: "#top",
    store, // 뷰엑스 스토어 사용하려면 등록필수!
    data: {},
    // mounted 실행구역: DOM연결후
    mounted: function () {
        // 제이쿼리코드함수 호출!
        console.log("mounted구역");

        // 메뉴기능 호출
        menuFn();

        // 스와이퍼 생성함수 호출
        makeSwiper();

        // 부드러운 스크롤 실행
        startSS();

        // 신상품 기능함수 호출
        sinsangFn();

        // 패럴렉스 적용함수 호출!
        setParallax(".c2", 0.6);
        // setParallax(적용할요소,속도);
        // 속도는 0.1~0.9

        // 스크롤리빌 플러그인 적용호출!
        $.fn.scrollReveal();

        // 전체메뉴클릭시 ///////////
        $(".mlist a").click(() => {
            // 1. 전체메뉴창 닫기
            $(".ham").trigger("click");
            // 2. 부드러운 스크롤 위치값 업데이트
            sc_pos = 0;
            // 3. 스와이퍼 첫번째 슬라이드로 이동!
            swiper.slideTo(0);
            // 첫슬라이드는 0번: 스와이퍼 API이용!
            // 4. 등장액션 스크롤리빌 다시 호출!
            $.fn.scrollReveal();
        });
        // $(선택요소).trigger(이벤트명)
        // -> 선택요소의 이벤트 강제발생함!
        // 참고) JS 클릭이벤트 강제발생
        // document.querySelector(요소).click();

        // GNB 메뉴 클릭시 해당위치로 스크롤이동 애니메이션
        // 각 .gnb a 에는 href="#c2" 이런식으로 아이디요소가 있음!
        // a요소의 #아이디명 으로 기본 위치이동은 되지만
        // 스크롤 애니메이션은 되지 않는다!
        // 이것을 제이쿼리로 구현하자!!!
        $(".gnb a").click(function (e) {
            // 1. 기본이동막기
            e.preventDefault();

            // 2. 클릭된 a요소의 href값 읽어오기
            let aid = $(this).attr("href");

            // 3. 아이디요소 박스 위치구하기
            let newpos = $(aid).offset().top;

            console.log("이동아이디:", aid, "/위치:", newpos);

            // 4. 애니메이션 이동
            $("html,body").animate(
                {
                    scrollTop: newpos + "px",
                },
                600,
                "easeOutQuint"
            );

            // 5. 부드러운 스크롤 변수에 현재위치값 업데이트!
            sc_pos = newpos;
        }); //////////// click /////////

        // 로고 클릭시 첫페이지로 이동!!!
        $("#logo").click(() => (location.href = "index.html"));
    },
    // created 실행구역 : DOM연결전
    created: function () {},
}); //////// 상단영역 뷰 인스턴스 ////////

//###### 하단영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el: "#info",
}); //////// 하단영역 뷰 인스턴스 ////////

// 스와이퍼 플러그인 인스턴스 생성하기 ///
// 스와이퍼 생성함수
function makeSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            // 인터렉션 비활성화 false
            // -> 인터렉션 활성화! (가만히두면 다시자동넘김)
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 블릿클릭이동여부
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} /////////// makeSwiper 함수 ///////////

////// 신상품 기능구현 함수 ///////////////
function sinsangFn() {
    /******************************************** 
        함수명 : moveList
        기능 : 신상품 리스트박스를 연속하여
              왼쪽방향으로 흘러가게 함!
    ********************************************/
    // 대상: .flist
    const flist = $(".flist");
    // 위치값변수
    let lpos = 0;
    // 재귀호출 상태값변수(1-호출가능/0-호출불가)
    let call_sts = 0;
    // 스크롤시 상태값변수(1-호출가능/0-호출불가)
    let sc_sts = 0;
    // 재귀호출 타임아웃용변수
    let callT;

    function moveList() {
        // 1. 이동위치값(left값) 감소하기
        lpos--;

        // console.log("위치값:", lpos);

        // 2. 한계값 초기화하기 + 첫번째 요소 맨뒤로 이동하기!
        if (lpos < -300) {
            // 위치값 초기화
            lpos = 0;

            // 첫번째 li 맨뒤로 이동!
            flist.append(flist.find("li").first());
        }

        // 3. 이동하기
        flist.css({
            left: lpos + "px",
        });

        // 타임아웃비우기
        clearTimeout(callT);

        // 재귀호출하기(비동기호출-setTimeout)
        // 조건: call_sts 상태값이 1일때만 호출함!
        if (call_sts) callT = setTimeout(moveList, 40);
    } ////////// moveList 함수 //////////////

    // 신상품 이동함수 최초호출
    // moveList();

    // 신상품 리스트에 마우스 오버시 멈춤
    // 신상품 리스트에 마우스 아웃시 이동
    // hover(함수1,함수2)
    flist.hover(
        function () {
            // over
            call_sts = 0; // 콜백중단!
        },
        function () {
            // out
            call_sts = 1; // 콜백허용!
            moveList(); // 함수재호출!
        }
    ); ////////// hover //////////////

    /********************************************** 
        신상품 리스트 li에 마우스 오버시 정보보이기
        1. 대상 : .flist li
        2. 정보구분법 : li의 클래스명으로 신상품정보와
                    매칭하여 상품정보박스를 동적으로
                    생성하여 애니메이션을 주어 보이게함
      **********************************************/
    flist.find("li").hover(
        function () {
            // over
            // 1. 클래스 정보 알아내기
            let clsnm = $(this).attr("class");

            // 2. 클래스 이름으로 셋팅된 신상정보 객체 데이터 가져오기
            // 중간 객체속성명 상위부모박스 #c1의 data-cat속성값
            // 읽어와서 sinsang[요기][] -> 요기에 넣기!
            let cat = $(this).parents("#c1").attr("data-cat");
            let gd_info = sinsang[cat][clsnm];

            console.log("data-cat:", cat);

            // 3. 상품정보박스 만들고 보이게하기
            // 마우스 오버된 li자신 (this)에 넣어준다!
            $(this).append(`<div class="ibox"></div>`);
            // .ibox에 상품정보 넣기
            // ^는 특수문자이므로 정규식에 넣을때 역슬래쉬와 함께씀
            // -> /\^/
            $(".ibox", this).html(gd_info.replace(/\^/g, "<br>")).animate(
                {
                    top: "110%",
                    opacity: 1,
                },
                300,
                "easeOutCirc"
            );
        },
        function () {
            // out
            // ibox 나갈때 지우기
            $(".ibox", this).remove();
        }
    ); //////////// hover ///////////////////////

    /*********************************************** 
        스크롤 위치가 신상품 박스가 보일때만 움직이기
      ***********************************************/
    // JS의 getBoundingClientRect()  의 값과 같은것은?
    // 적용박스 offset().top위치값 - scroll바 위치값

    // 1. 대상요소위치값
    let tgpos = flist.offset().top;

    // 2. 스크롤위치변수
    let scTop = 0;

    // 3. 화면높이값
    let winH = $(window).height();
    console.log("화면높이값:", winH);

    // 4. 스크롤 이벤트함수 ///////////
    $(window).scroll(function () {
        // 1. 스크롤위치값
        scTop = $(this).scrollTop();

        // 2. gBCR 값 구하기
        let gBCR = tgpos - scTop;

        // console.log("gBCR:", gBCR);

        // 3. 신상품 리스트 이동/멈춤 분기하기
        // (1) 이동기준 gBCR값이 화면높이보다 작고 0보다 클때 이동
        if (gBCR < winH && gBCR > -300 && sc_sts === 0) {
            sc_sts = 1; // 한번만실행
            call_sts = 1; // 콜백허용!
            moveList(); // 함수재호출!
            console.log("범위1");
        } ////// if ///////////
        // (2) 기타경우 멈춤
        // (조건: 윈도우높이보다 크거나 0보다 작고 call_sts===1일때)
        else if ((gBCR > winH || gBCR < -300) && sc_sts === 1) {
            sc_sts = 0; // 한번만실행
            call_sts = 0; // 콜백중단!
            console.log("범위2");
        } ///// else ///////////////

        ////////////////////////////
        // 서브 배너 스와이퍼 API를 //
        // 이용한 작동멈춤셋팅하기! //
        ////////////////////////////
        // 기준: 화면높이값 보다
        //      스크롤위치가 크면 멈춤
        // 스와이퍼API : swiper.autoplay.stop()
        //      스크롤위치가 작으면 자동넘김
        // 스와이퍼API : swiper.autoplay.start()
        if (scTop > winH) {
            swiper.autoplay.stop();
        } /////////// if ////////
        else {
            swiper.autoplay.start();
        } //////// else ///////////
    }); ////////// scroll /////////////
} ///////////// sinsangFn 함수 ////////////////

// 패럴렉스 플러그인 적용함수
function setParallax(ele, speed) {
    // 대상: .c2
    $(ele).parallax("50%", speed);
    // parallax(배경위치,속도)
} ///////////// setParallax 함수 ///////////
