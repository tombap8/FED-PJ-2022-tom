// 공통 data 객체 셋팅 JS - data-common.js

const comData = {
    // 상단영역 html data
    tarea: `                    
    <header class="top ibx">
        <!-- 1-1.로고 -->
        <h1 id="logo">
            <a href="#">
                <img src="images/main_logo.png" alt="파일럿로고" />
            </a>
        </h1>
        <!-- 1-2.GNB메뉴 : 3개(배너,하단제외) -->
        <nav class="gnb">
            All ITEMS LIST
            <ul>                
                <li>
                    <router-link to="/glist">
                        Filter List
                    </router-link>
                </li>
                <li>
                    <router-link to="/paging">
                        Paging List
                    </router-link>
                </li>
                <li>
                    <router-link to="/more">
                        More List
                    </router-link>
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
                    <dt><a href="sub.html?cat=남성">MEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="sub.html?cat=여성">WOMEN</a></dt>
                    <dd><a href="#">T-SHIRT</a></dd>
                    <dd><a href="#">JACKET</a></dd>
                    <dd><a href="#">TRAINING WARE</a></dd>
                    <dd><a href="#">BEACH WARE</a></dd>
                </dl>
                <dl>
                    <dt><a href="sub.html?cat=스타일">STYLE</a></dt>
                    <dd><a href="#">COLLECTION</a></dd>
                    <dd><a href="#">SEASON AD</a></dd>
                    <dd><a href="#">STAR &amp; NEWS</a></dd>
                    <dd><a href="#">MAIN ITEM</a></dd>
                </dl>
            </nav>
        </div>
    </header>

    `,
    

    // 하단영역 html 데이터
    barea: `    
    <address>
        서울특별시 강남구 언주로 541 에프앤에프빌딩<br />
        사업자등록번호 : 214-86-09977 / 통신판매업 신고번호 : 제2011-서울강남-00086호 (주)
        에프앤에프 / 대표 : 김창수<br />
        교환·반품 반송처 : (17384) 경기도 이천시 마장면 프리미엄아울렛로 113-37 F&amp;F
        물류센터 디스커버리 물류부<br /><br />

        고객센터　<em>080 - 820 - 8802</em> 　　 평일 오전 9시 ~ 오후 6시 (토·일·공휴일
        휴무) <br />
        A/S : 02 - 3474 - 8914　 E - MAIL :
        <a href="mailto:discovery@fnf.co.kr" title="메일 보내기">discovery@fnf.co.kr</a> 　
        FAX : 02 - 520 - 0991 <br /><br />

        COPYRIGHT F&amp;F CO.,LTD.ALL RIGHTS RESERVED
    </address>

    `,
}; ///////////////// comData //////////////


// 내보내기
export default comData;