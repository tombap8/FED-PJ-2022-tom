// 뷰라우터 인스턴스 설정파일 - glist-router.js



// 라우터 템플릿 만들기
let Glist = {
    template: `
        <section>
            <!-- 필터옵션 체크박스구역 -->
            <div id="optbx">
                <label for="men">남성</label>
                <input type="checkbox" id="men"
                v-model="$store.state.chkarr[0]"
                @change="$store.commit('resCheck')">

                <label for="women">여성</label>
                <input type="checkbox" id="women"
                v-model="$store.state.chkarr[1]"
                @change="$store.commit('resCheck')">

                <label for="style">스타일</label>
                <input type="checkbox" id="style"
                v-model="$store.state.chkarr[2]"
                @change="$store.commit('resCheck')">
            </div>

            <!-- 상품리스트박스 -->
            <div class="grid">
                <div 
                    v-for="
                        (v,i) in $store.state.gdata
                    "
                    v-if="
                        v.cat==$store.state.selnm[0] ||
                        v.cat==$store.state.selnm[1] ||
                        v.cat==$store.state.selnm[2]
                ">

                
                <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
                <router-link 
                    v-bind:to="{
                        name:'det',
                        params:{id : v.idx, list : $route.path}
                    }">
                [{{v.idx}}]
                    <img 
                        v-bind:src="
                        './images/goods/'+
                        v.cat +
                        '/'+v.ginfo[0]+'.png'  
                        " alt="dress" />
                    <aside>
                        <h2>{{v.ginfo[1]}}</h2>
                        <h3>{{v.ginfo[3]}}</h3>
                    </aside>


                </router-link>

                    
                </div>
            </div>
        </section>
    `,
};


// v-model 디렉티브 속성은 요소 자신의 값이
// 타겟 값으로 반영되게해준다!
// 변경 데이터의 뷰JS의 동기화기능을 확인!

// v-for에 기술된 v-if조건에 사이범위를 넣고 스토어변수로 컨트롤한다!
// 조건: 인덱스번호가 1이상 10이하 -> 여기에 일정수를 더함
// 10씩 더하면 다음 범위가 리스트로 정해짐!!
// v.idx >= 1 + $store.state.pnum && 
//  v.idx <= 10 + $store.state.pnum
let Paging = {
    template: `
    <section>
        <!-- 상품리스트박스 -->
        <div class="grid">
            <div 
            v-for="
                (v,i) in $store.state.gdata
            "
            v-if="
                v.idx >= 1 + $store.state.pnum && 
                v.idx <= 10 + $store.state.pnum
            ">

               
            <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
            <router-link 
                v-bind:to="{
                    name:'det',
                    params:{id : v.idx, list : $route.path}
                }">
                [{{v.idx}}]
                
                <img 
                    v-bind:src="
                    './images/goods/'+
                    v.cat +
                    '/'+v.ginfo[0]+'.png'  
                    " alt="dress" />
                <aside>
                    <h2>{{v.ginfo[1]}}</h2>
                    <h3>{{v.ginfo[3]}}</h3>
                </aside>

            </router-link>

            </div>
        </div>

        <!-- 페이징 표시구역 -->
        <div id="paging">
            <a href="#" 
            @click.prevent="
            $store.commit('updatePaging',0)">
                1
            </a>
             | 
            <a href="#" 
            @click.prevent="
            $store.commit('updatePaging',10)">
                2
            </a>
             | 
            <a href="#" 
            @click.prevent="
            $store.commit('updatePaging',20)">
                3
            </a>
        </div>
    </section>
`,
};
let More = {
    template: `
    <section>
        <!-- 상품리스트박스 -->
        <div class="grid">
            <div 
            v-for="
                (v,i) in $store.state.gdata
            "
            v-if="
                v.idx >= 1 && 
                v.idx <= 5 + $store.state.mnum
            ">

               
            <!-- 파라미터가 있는 뷰라우터는 이름으로 호출! -->
            <router-link 
                v-bind:to="{
                    name:'det',
                    params:{id : v.idx, list : $route.path}
                }">
                    
                [{{v.idx}}]
                
                <img 
                    v-bind:src="
                    './images/goods/'+
                    v.cat +
                    '/'+v.ginfo[0]+'.png'  
                    " alt="dress" />
                <aside>
                    <h2>{{v.ginfo[1]}}</h2>
                    <h3>{{v.ginfo[3]}}</h3>
                </aside>
            </router-link>

            </div>
        </div>

        <!-- 모어버튼 표시구역 -->
        <div id="more" v-if="$store.state.mbtn">
            <button class="more" 
            @click.prevent="
            $store.commit('updateMore',5)"
            >
                MORE
            </button>
        </div>
    </section>
`,
};

// 상세보기 구성 템플릿
const Detail = {
    template: `
            
    <!-- 큰이미지 배경박스 -->
    <div id="bgbx">
        <!-- 닫기버튼 -->
        <a href="#" class="cbtn" 
        @click="$router.push($route.params.list)">
            <span class="ir">닫기버튼</span>
        </a>
        
        <!-- 큰이미지 박스 -->
        <div id="imbx">
            <div class="inx">
                <!-- 큰 이미지 -->
                <section class="gimg">
                    <img class="magnify" 

                    v-bind:src="
                    'images/goods/'+

                    <!-- 카테고리명(men/women/style) -->
                    $store.state.gdata[$route.params.id-1].cat+

                    '/'+
                    
                    <!-- 이미지명(클래스명) -->
                    $store.state.gdata[$route.params.id-1].ginfo[0]+
                    
                    '.png'
                    " alt="큰 이미지">

                    <div class="small">
                        <a href="#">

                        <img v-for="v in 6" 

                        v-bind:src="

                        'images/goods/'+

                        <!-- 카테고리명(men/women/style) -->
                        $store.state.gdata[$route.params.id-1].cat+

                        '/m'+v+'.png'

                        " alt="작은 이미지"></a>
                    </div>
                </section>
                <!-- 이미지 설명 -->
                <section class="gdesc scbar">
                    
                    <!--상품 정보 영역-->
                    <h1>HOME &gt; WOMEN &gt; DRESS</h1>
                    <div>
                        <ol>
                            <li>
                                <img src="images/dx_ico_new-28143800.gif" alt="new버튼">
                            </li>
                            <li id="gtit">상품명 :

                            {{$store.state.gdata[$route.params.id-1].ginfo[1]}}
                            
                            </li>
                            <li>
                                <img src="images/icon_type02_social01.gif" alt="페이스북"><img
                                    src="images/icon_type02_social02.gif" alt="트위터"><img src="images/icon_mail02.gif"
                                    alt="이메일"><img src="images/btn_source_copy.gif" alt="URL복사">
                            </li>
                            <li>
                                <span>판매가</span>
                                <span id="gprice">

                                {{$store.state.gdata[$route.params.id-1].ginfo[3]}}

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
                                
                                {{$store.state.gdata[$route.params.id-1].ginfo[2]}}
                                
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
                                <span id="total">니가계산해!</span>
                            </li>
                        </ol>

                    </div>
                    <div>
                        <!--버튼영역-->
                        <button class="btn btn1">BUY NOW</button>
                        <button class="btn scbtn"
                        @click="$store.commit('setData',$route.params.id-1)"
                        >SHOPPING CART</button>
                        <button class="btn"
                        @click="$store.commit('clearData')"
                        >CLEAR CART</button>

                    </div>
                </section>
            </div>
        </div>
    </div>
`,
};


// 뷰라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 1. 필터 리스트
        {
            path: "/glist",
            component: Glist,
        },
        // 2. 페이징 리스트
        {
            path: "/paging",
            component: Paging,
        },
        // 3. 모어 리스트
        {
            path: "/more",
            component: More,
        },
        // 4. 상세보기 : 파라미터 필요! - 상품구분 idx로사용
        {
            // 파라미터를 쓰려면 뷰라우터 이름이 필수
            name : "det",
            path:"/detail",
            component: Detail,
        },
    ], /// routes 끝

    
    // 라우터 호출시 스크롤위치 최상단 자동이동코드!!!
    // 새로 라우팅을 할때마다 이 스크롤 메서드가 호출되어 실행됨!
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

});

// 내보내기
export default router;
