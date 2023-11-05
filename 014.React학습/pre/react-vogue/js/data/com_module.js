// 상단, 하단 공통 모듈 html코드
export default {
    topArea:`
    <!-- 1-1.상단메뉴 -->
    <div class="tmenu">
        <!-- 1-1-1.sns박스 -->
        <div class="sns">
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
            <a href="#" class="fi cas">
                <span class="ir">카카오스토리</span>
            </a>
        </div>
        <!-- 1-1-2.사이드메뉴 -->
        <div class="sideMenu">
            <ul class="smbx">
                <li>
                    <a href="#">SIDE MENU</a>
                    <!-- 서브메뉴 -->
                    <ol class="smsub">
                        <li>
                            <a href="#">회사 소개</a>
                        </li>
                        <li>
                            <a href="#">광고 및 제휴</a>
                        </li>
                        <li>
                            <a href="#">개인정보 처리방침</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <a href="#">SUBSCRIBE</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 1-2.로고박스 -->
    <h1 class="logo">
        <a href="#">
            <img src="./images/mlogo.png" alt="메인로고" />
        </a>
    </h1>
    <!-- 1-3.GNB박스 -->
    <nav class="gnb">
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
                <a href="#">TIME &amp; GEM</a>
            </li>
            <li>
                <a href="#">SHOPPING</a>
            </li>
            <li>
                <!-- 돋보기 검색버튼 -->
                <i href="#" class="fi fi-search">
                    <span class="ir">search</span>
                </i>
            </li>
        </ul>
    </nav>

    `,
    footerArea:`
    <!-- 3-1.하단로고 -->
    <div class="blogo">
        <img src="./images/footer_logo.png" alt="하단로고">
    </div>
    <!-- 3-2.회사주소 -->
    <address class="addr">
        WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
        ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED 
        BY DOOSAN MAGAZINE.
    </address>
    <!-- 3-3.하단링크 -->
    <ul class="blink">
        <li>
            <a href="#">정기구독</a>
        </li>
        <li>
            <a href="#">회사소개</a>
        </li>
        <li>
            <a href="#">광고 및 제휴</a>
        </li>
        <li>
            <a href="#">개인정보 처리방침</a>
        </li>
    </ul>
    `,
    // 모바일버튼코드 : header.top-area 안에 넣기
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
    // 모바일메뉴박스코드 : 
    // header.top-area 바깥에 넣기(#top-area안에)
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
}