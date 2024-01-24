// 쇼핑몰 갤러리 템플릿 데이터 JS - hcode.js

const hcode = {
    // 1. 타이틀
    tit: `
        <strong>
            <span>👩‍🦰다이아나 쇼핑몰💕</span><br>
            👗Diana Shopping Mall🥻
        </strong>
    `,
    // 2. 리스트
    list: `
        <div>
            <img 
            v-bind:src="gsrc" 
            v-on:click="goPapa" 
            v-on:mouseover="ovNow" 
            alt="dress" />
            <aside>
                <h2>{{gname}}</h2>
                <h3>
                    <span v-bind:class="{del:condiRet()}"
                    v-bind:data-price="orgprice">
                        {{gprice}}
                    </span>
                    <span class="sale" v-if="condiRet()">
                        {{sale}}
                    </span>
                </h3>
            </aside>
        </div>
    `,
    /* 
        [뷰JS에서 클래스 바인드하기]

        1. 일반적인 클래스 바인드
        <요소 v-bind:class=클래스명>
        예) <span v-bind:class="'del'"></span>
        -클래스명이 변수에 있다면 변수를 쓰고
        직접 문자로 넣으로면 따옴표처리를 한다!

        2. 조건에의한 클래스 바인드
        <요소 v-bind:class={클래스명:조건}>
        예) <span v-bind:class="{del:haha==3}"></span>
        - 클래스의 값으로 객체를 설정하고 객체속성명에 클래스명을
         객체값에 조건식을 쓰면 해당조건에서만 클래스가 적용된다!

        참고) 조건이 많을 경우 또는 여러군데 사용될 경우
        조건식의 결과를 리턴하는 메서드를 만들어 사용한다!
        예) <span v-bind:class="{del:constiRet()}"></span>

        ->>> 해당 컴포넌트 methods:{} 처리구역에 리턴메서드 생성
        methods:{
            condiRet(){
                return this.haha==3 || this.haha==5 || this.haha==20;
            }
        }

    */


    // 3. 큰이미지
    big: `
    <!-- 큰이미지 배경박스 -->
    <div id="bgbx">
        <!-- 오른쪽버튼 -->
        <a href="#" class="abtn rb">
            <span class="ir">오른쪽버튼</span>
        </a>
        <!-- 왼쪽버튼 -->
        <a href="#" class="abtn lb">
            <span class="ir">왼쪽버튼</span>
        </a>
        <!-- 닫기버튼 -->
        <a href="#" class="cbtn">
            <span class="ir">닫기버튼</span>
        </a>
        
        <!-- 큰이미지 박스 -->
        <div id="imbx">
            <div class="inx">
                <!-- 큰 이미지 -->
                <section class="gimg">
                    <img src="img_gallery/50.jpg" alt="큰 이미지">
                </section>
                <!-- 이미지 설명 -->
                <section class="gdesc scbar">
                    
                    <!--상품 정보 영역-->
                    <h1>HOME &gt; WOMEN &gt; DRESS</h1>
                    <div>
                        <ol>
                            <li>
                                <img src="img_gallery/dx_ico_new-28143800.gif" alt="new버튼">
                            </li>
                            <li id="gtit">상품명</li>
                            <li>
                                <img src="img_gallery/icon_type02_social01.gif" alt="페이스북"><img
                                    src="img_gallery/icon_type02_social02.gif" alt="트위터"><img src="img_gallery/icon_mail02.gif"
                                    alt="이메일"><img src="img_gallery/btn_source_copy.gif" alt="URL복사">
                            </li>
                            <li>
                                <span>판매가</span>
                                <span id="gprice">99,000</span>
                            </li>
                            <li>
                                <span>적립금</span>
                                <span><img src="img_gallery/icon_my_m02.gif" alt="적립금">4,950(5%적립)</span>
                            </li>
                            <li>
                                <span>무이자할부</span>
                                <span>부분 무이자 할부 혜택 <img src="img_gallery/view_btn_nointerest_card.gif" alt="무이자카드보기"></span>
                            </li>
                            <li>
                                <span>상품코드</span>
                                <span id="gcode">23fdfsdfsfsd</span>
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
                                        <img src="img_gallery/cnt_up.png" alt="증가">
                                        <img src="img_gallery/cnt_down.png" alt="감소">
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

    `,
}; ////////////// hcode객체 //////////////

// 객체 내보내기
export default hcode;
