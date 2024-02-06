// 보그 PJ - 공통 JS : common.js

// 모바일 구분코드(1-모바일,0-DT)
let mobsts = 0;

// 화면크기에 따른 모바일 코드 변경함수
const chkW = () =>{
    if($(window).width()<=500) mobsts = 1;
    else mobsts = 0;

    console.log("모바일여부:",mobsts);

}; ///////// chkW 함수 ////////////

// 화면체크함수 처음호출
chkW();

// 화면리사이즈시 화면체크함수 호출
$(window).resize(chkW);
// "resize" 화면크기변경시 발생 이벤트

// 로드구역 //////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("공통JS 로딩완료!");

    // 부드러운 스크롤 JS호출!
    startSS();

    // 만약 스크롤바를 직접 드래그할 경우
    // mouseup (즉, 스크롤바를 놓는경우)
    // 이벤트 발생시 Y축 스크롤바 위치를
    // pos전역변수에 업데이트 한다!
    window.addEventListener("mouseup",()=>{
        pos = window.scrollY;
    }); //////////// mouseup //////////////


    /// 모바일 메뉴 초기셋팅하기 /////
    // 대상: .top / #top
    $(".top").append(mobcode.mobtn);
    $("#top").append(mobcode.mobx);

    /// 모바일 버튼 기능 구현하기 ////
    // 1. 햄버거버튼 클릭시 전체메뉴 보이기
    // 이벤트대상: .hbtn / 변경대상 #mobx
    $(".hbtn").click(()=>$("#mobx").slideToggle(400));

    // 2. 검색버튼 클릭시 검색박스 보이기
    // 이벤트대상: .sbtn / 변경대상 .mos
    $(".sbtn").click(()=>$(".mos").slideToggle(200));

    // slideToggle(시간) 은 slideUp()/slideDown()을 자동전환한다!




}); ///////////////// load ///////////////////



/////// 모바일 관련 html코드 객체 /////
const mobcode = {
    // 모바일버튼코드 : header.top 안에 넣기
    mobtn:`
        <!-- 모바일용 햄버거버튼 -->
        <a href="#" class="mobtn hbtn fi fi-nav-icon">
            <span class="ir">GNB button</span>
        </a>
        <!-- 모바일용 검색버튼 -->
        <a href="#" class="mobtn sbtn fi fi-search">
            <span class="ir">search</span>
        </a>
    `,
    // 모바일메뉴박스코드 : header.top 바깥에 넣기(#top안에)
    mobx:`
        <!-- 1.4.모바일 검색박스 -->
        <div class="mos">
            <div class="mwrap">
                <!-- 입력창박스 -->
                <div id="search">
                    <input type="text" class="search">
                </div>
                <!-- 검색버튼 -->
                <button class="scbtn fi fi-search">
                    <span class="ir">돋보기검색아이콘</span>
                </button>
            </div>
        </div>

        <!-- 1.5.모바일 전체메뉴 -->
        <div id="mobx">
            <!-- 1.5-1.모바일 GNB 메뉴 -->
            <nav class="mognb">
                <ul>
                    <li>
                        <a href="#">FASHION</a>
                    </li>
                    <li>
                        <a href="#">BEAUTY</a>
                    </li>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">PEOPLE</a>
                    </li>
                    <li>
                        <a href="#">VIDEO</a>
                    </li>
                    <li>
                        <a href="#">RUNWAY</a>
                    </li>
                    <li>
                        <a href="#">SHOPPING</a>
                    </li>
                </ul>
            </nav>
            <!-- 1.5-2.모바일 sns 메뉴 -->
            <div class="mosns">
                <a href="#" class="fi fi-instagram">
                    <span class="ir">인스타그램</span>
                </a>
                <a href="#" class="fi fi-facebook">
                    <span class="ir">페이스북</span>
                </a>
                <a href="#" class="fi fi-twitter">
                    <span class="ir">트위터</span>
                </a>
                <a href="#" class="fi fi-youtube-play">
                    <span class="ir">유튜브</span>
                </a>
                <a href="#">
                    <span class="ir">카카오스토리</span>
                </a>

            </div>
            <!-- 1.5-3.매거진박스 -->
            <figure class="magbox">
                <!-- 잡지커버이미지 -->
                <a class="mcover" href="#">
                    <img src="./images/cover.jpg" alt="보그표지">
                </a>
                <!-- 잡지설명 -->
                <figcaption>
                    정기구독을 신청하면 최대 30% 할인혜택을 드립니다!
                </figcaption>
                <!-- 정기구독버튼 -->
                <button class="magbtn">정기구독 신청</button>
            </figure>

            <!-- 하단링크박스 -->
            <ul class="moblink">
                <li>
                    <a href="#">회사소개 /</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴 /</a>
                </li>
                <li>
                    <a href="#">
                        <strong>개인정보 처리방침</strong>
                    </a>
                </li>
            </ul>
        </div>
    `,

}; //////////// mobcode //////////////