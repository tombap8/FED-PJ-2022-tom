// 파일럿 PJ 메인페이지 JS - main.js

/************************************************* 
    [ 메인 페이지 주요 기능 ]

    1. 자동스크롤 기능 구현 (OK)
    + 페이지 도착후 등장액션 구현

    2. 햄버거버튼 전체메뉴 보이기/숨기기(OK)
    + 전체메뉴 배경동영상 보일때만 재생(숨길때 멈춤)

    3. 배너 터치기능 넘기기 (제이쿼리 UI이용)
    + 배너별 타이틀 등장하기
    + 양쪽 이동버튼 플러그인 적용하기

*************************************************/

// 자동스크롤 기능 함수 가져오기
import autoScroll from "./jquery-autoScroll.js";
// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 배너기능함수 가져오기
import banFn from "./mainjs/ban.js";


//###### 상단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp",{
    template:`
                    
    <header class="top ibx">
    <!-- 1-1.로고 -->
    <h1 id="logo">
        <a href="#">
            <img src="images/main_logo.png" alt="파일럿로고" />
        </a>
    </h1>
    <!-- 1-2.GNB메뉴 : 3개(배너,하단제외) -->
    <nav class="gnb">
        <ul>
            <li class="bld">배너순번 li 숨기기</li>
            <li>
                <a href="#men">MEN</a>
            </li>
            <li>
                <a href="#women">WOMEN</a>
            </li>
            <li>
                <a href="#style">STYLE</a>
            </li>
        </ul>
    </nav>

    <!-- 햄버거버튼 -->
    <div class="ham">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <!-- 전체메뉴박스 -->
    <!-- 같은 부모박스 아래 있어야 z-index비교로 햄버거버튼
이 위에 올 수 있다! -->
    <div class="mbox">
        <!-- 
        배경 동영상 : muted 소리없음, loop 반복재생
    -->
        <video src="images/disc2018.mp4" class="bgm" loop muted></video>
        <!-- 전체메뉴 -->
        <nav class="mlist">
            <dl>
                <dt><a href="#">MEN</a></dt>
                <dd><a href="#">T-SHIRT</a></dd>
                <dd><a href="#">JACKET</a></dd>
                <dd><a href="#">TRAINING WARE</a></dd>
                <dd><a href="#">BEACH WARE</a></dd>
            </dl>
            <dl>
                <dt><a href="#">WOMEN</a></dt>
                <dd><a href="#">T-SHIRT</a></dd>
                <dd><a href="#">JACKET</a></dd>
                <dd><a href="#">TRAINING WARE</a></dd>
                <dd><a href="#">BEACH WARE</a></dd>
            </dl>
            <dl>
                <dt><a href="#">STYLE</a></dt>
                <dd><a href="#">COLLECTION</a></dd>
                <dd><a href="#">SEASON AD</a></dd>
                <dd><a href="#">STAR &amp; NEWS</a></dd>
                <dd><a href="#">MAIN ITEM</a></dd>
            </dl>
        </nav>
    </div>
</header>

    `,
}); ////////////// 상단영역 Vue component /////////////

//###### 상단영역 뷰 인스턴스 생성하기 ##########
// new Vue({옵션})
new Vue({
    el:"#top",
    data:{},
    // mounted 실행구역: DOM연결후
    mounted:function(){
        // 제이쿼리코드함수 호출!
        console.log("mounted구역");
        
        // 자동스크롤 호출
        autoScroll();
        // 메뉴기능 호출
        menuFn();
        // 배너기능 호출
        banFn();
        
    },    
    // created 실행구역 : DOM연결전
    created:function(){
        // DOM연결전 데이터 가공작업
        console.log("created구역");
    },    
})    





