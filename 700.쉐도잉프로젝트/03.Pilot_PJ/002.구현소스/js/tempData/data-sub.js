// 서브 data 객체 셋팅 JS - data-sub.js

const subData = {
    // 배너영역
    banner:`
        <section id="ban" class="page">
            <!-- Swiper -->
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                    v-for="v in $store.state.cnt"
                    v-bind:key="v">
                        <img 
                        v-bind:src="
                        './images/sub/'+
                        $store.state.cat+
                        '/banner/ban'+
                        v+
                        '.png'
                        " alt="서브배너이미지" />
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    `,
    // 컨텐츠영역1 : new arrival
    cont1:`
        <section 
        :class="
            'cont c1 '+ $store.state.cat
        " id="c1"
        :data-cat="$store.state.cat">

        <!-- 
            class = "cont c1 카테고리명"
            -> 해당 배경이미지가 나오도록 카테고리명 클래스넣기

            data-cat 속성 : data-로 시작하는 사용자정의속성
            -> 제이쿼리에서 DOM셋팅 속성을 읽어서
            sinsang 객체의 하위 속성 카테고리명을
            사용하기 위해 셋팅함!
        -->

            <!-- 2-1-1.신상품 타이틀 -->
            <h2 class="c1tit js-reveal">
                {{ $store.state.menu[0] }}
            </h2>
            <!-- 2-1-2.신상품 박스 -->
            <div class="flowbx js-reveal">
                <!-- 리스트박스 -->
                <ul class="flist">
                    <li v-for="v in 9" :class="'m'+v">
                        <a href="#">
                            <img :src="
                            './images/goods/'+
                            $store.state.cat +
                            '/m'+ v +
                            '.png'
                            " alt="신상품" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    `,
    // 컨텐츠영역2 : special
    cont2:`
        <section 
        :class="
            'cont c2 '+ $store.state.cat
        " id="c2">
            <h2 class="c2tit js-reveal">
                2023 {{$store.state.menu[1]}}
            </h2>
        </section>
    `,
    // 컨텐츠영역3 : 일반소개1
    cont3:`
        <section class="cont c3" id="c3">
            <ul class="pgc">
                <li class="txtc">
                    <h2 class="js-reveal">
                        <a href="#"> 
                        {{$store.state.cat.toUpperCase()}}'S <br />
                        {{$store.state.menu[2]}} </a>
                    </h2>
                </li>
                <li class="imgc jr1 js-reveal">
                    <img 
                    :src="
                        './images/sub/'+
                        $store.state.cat+'/03.disc.png'
                    " alt="해변공유" />
                </li>
            </ul>
        </section>
    `,
    // 컨텐츠영역4 : 일반소개2
    cont4:`
        <section class="cont c4" id="c4">
            <ul class="pgc">
                <li class="imgc jr2 js-reveal">
                    <img :src="
                        './images/sub/'+
                        $store.state.cat+'/04.disc.png'
                    " alt="가방공유" />
                </li>
                <li class="txtc">
                    <h2 class="tm">
                        <a href="#" class="js-reveal"> 
                        {{$store.state.cat.toUpperCase()}}'S<br />
                        SPORT STYLE </a>
                    </h2>
                    <h2 class="tw">
                        <a href="#" class="js-reveal"> 
                        {{$store.state.cat.toUpperCase()}}'S<br />
                        LIFE STYLE </a>
                    </h2>
                </li>
                <li class="imgc jr2 js-reveal">
                    <img :src="
                        './images/sub/'+
                        $store.state.cat+'/05.disc.png'
                    " alt="의자공유" class="js-reveal" />
                </li>
            </ul>
        </section>
    `,
    // 상세보기 박스
    detail:`
        <!-- 큰이미지 배경박스 -->
        <div id="bgbx">
            <!-- 닫기버튼 -->
            <a href="#" class="cbtn">
                <span class="ir">닫기버튼</span>
            </a>
            
            <!-- 큰이미지 박스 -->
            <div id="imbx">
                <div class="inx">
                    <!-- 큰 이미지 -->
                    <section class="gimg">
                        <img 
                        :src="
                            'images/goods/'+
                            $store.state.cat+
                            '/'+
                            $store.state.cls+
                            '.png'
                        " alt="큰 이미지">
                     <!-- 썸네일 이미지 구역 -->
                     <div class="small">
                        <a href="#">
                            <img 
                            v-for="v in 6"
                            v-bind:src="
                                'images/goods/'+
                                $store.state.cat+
                                '/m'+ v +
                                '.png'
                            " alt="썸네일 이미지">
                        </a>
                     </div>   
                    </section>
                    <!-- 이미지 설명 -->
                    <section class="gdesc scbar">
                        
                        <!--상품 정보 영역-->
                        <h1>
                            HOME &gt; 
                        {{$store.state.cat.toUpperCase()}} 
                        </h1>
                        <div>
                            <ol>
                                <li>
                                    <img src="images/dx_ico_new-28143800.gif" alt="new버튼">
                                </li>
                                <li id="gtit">
                                상품명:
                                {{$store.state.gname}}
                                </li>
                                <li>
                                    <img src="images/icon_type02_social01.gif" alt="페이스북"><img
                                        src="images/icon_type02_social02.gif" alt="트위터"><img src="images/icon_mail02.gif"
                                        alt="이메일"><img src="images/btn_source_copy.gif" alt="URL복사">
                                </li>
                                <li>
                                    <span>판매가</span>
                                    <span id="gprice">
                                    {{$store.state.gprice}}
                                    </span>
                                </li>
                                <li>
                                    <span>적립금</span>
                                    <span><img src="images/icon_my_m02.gif" alt="적립금">4,950(5%적립)</span>
                                </li>
                                <li>
                                    <span>무이자할부</span>
                                    <span>부분 무이자 할부 혜택 <img src="images/view_btn_nointerest_card.gif" alt="무이자카드보기"></span>
                                </li>
                                <li>
                                    <span>상품코드</span>
                                    <span id="gcode">
                                    {{$store.state.gcode}}
                                    </span>
                                </li>
                                <li>
                                    <span>사이즈</span>
                                    <span>95 100 105 110</span>
                                </li>
                                <li>
                                    <span>구매수량</span>
                                    <span>
                                        <input type="text" id="sum" value="1">
                                        <!--
                                        readonly 속성은 직접입력을 막음
                                        disable 속성은 입력창의 비활성화
                                        -->
                                        <b class="chg_num">
                                            <img src="images/cnt_up.png" alt="증가">
                                            <img src="images/cnt_down.png" alt="감소">
                                        </b>
                                    </span>
                                </li>
                                <li>
                                    <span>컬러</span>
                                    <span></span>
                                </li>
                                <li>
                                    <span>권장계절</span>
                                    <span>여름</span>
                                </li>
                                <li class="tot">
                                    <span>총합계</span>
                                    <span id="total">13,000</span>
                                </li>
                            </ol>

                        </div>
                        <div>
                            <!--버튼영역-->
                            <button class="btn btn1">BUY NOW</button>
                            <button class="btn">SHOPPING CART</button>
                            <button class="btn">WISH LIST</button>

                        </div>
                    </section>
                </div>
            </div>
        </div>

    `

}; //////////// subData ////////////////

// 내보내기!
export default subData;