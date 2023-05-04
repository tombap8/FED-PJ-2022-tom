// 뷰엑스 스토어 구현 JS 

// [1] 컴포넌트 셋팅하기 //////
// 1. 상단영역 컴포넌트 셋팅
Vue.component("top-area",{
    template:`
        <header>
            <ul class="gnb">
                <li>
                    <a href="#">서울</a>
                </li>
                <li>
                    <a href="#">부산</a>
                </li>
                <li>
                    <a href="#">제주</a>
                </li>
            </ul>
        </header>
    `,
    data(){
        return{}
    },
    methods:{

    }
});
// 2. 메인영역 컴포넌트 셋팅
Vue.component("main-area",{
    template:`
        <main>
            <img src="https://www.shutterstock.com/image-photo/songpagu-seoul-south-korea-september-260nw-2094838786.jpg" alt="지역이미지">
            <p>
                대한민국의 수도인 서울을 지방자치단체인 특별시로 부르는 명칭이다. 한반도 중앙에 있으며, 한강을 사이에 두고 남북으로 펼쳐져 있다. 북쪽 끝은 도봉구 도봉동, 동쪽 끝은 강동구 상일동, 남쪽 끝은 서초구 원지동, 서쪽 끝은 강서구 오곡동이다. 시청은 중구 을지로1가(태평로1가 31)에 있다.
            </p>
        </main>
    `,
    data(){
        return{}
    },
    methods:{

    }
});
// 3. 하단영역 컴포넌트 셋팅
Vue.component("info-area",{
    template:`
        <footer>
            <address>
                서울시 강남구 역삼동 119 뷰엑스B
            </address>
        </footer>
    `,
    data(){
        return{}
    },
    methods:{

    }
});

// [2] 뷰 인스턴스 생성하기 //////
// 대상요소:  #app
new Vue({
    el:"#app",
    data:{
        // 변수:값
    },
    methods:{
        // 메서드(){}
    }
}); //////// Vue 인스턴스 /////////
