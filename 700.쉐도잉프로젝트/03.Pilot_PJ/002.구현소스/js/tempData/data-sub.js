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
        " id="c1">
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
    cont2:``,
    // 컨텐츠영역3 : 일반소개1
    cont3:``,
    // 컨텐츠영역4 : 일반소개2
    cont4:``,

}; //////////// subData ////////////////

// 내보내기!
export default subData;