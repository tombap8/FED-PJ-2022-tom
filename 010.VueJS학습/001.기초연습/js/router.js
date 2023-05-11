// 뷰라우터 인스턴스 설정파일 - router.js

/************************************************ 

    [  뷰 라우터란? : Vue Router ]

    1. 단일페이지 어플리케이션을 구축하기 위한 
        뷰JS 확장 라이브러리다!
    2. 컴포넌트와 URL을 연결해주는 역할을 함!

    (참고: SPA란?) Single Page Application
    메인과 여러개의 서브 페이지로 구성된 사이트를
    단 하나의 페이지에서 변경할 부분만 업데이트 가능하도록
    구현구조를 만들어서 렌더링 속도가 매우 빠르도록 설계된 
    어플리케이션이다!

    3. 설치 :
        (1) CDN방식 : 상단호출
        <!-- 뷰JS 라우터 CDN -->
        <script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>

        (2) Vue CLI 방식 : npm 설치
            npm install --save vue-router@3

            -> 설치후 import 로 사용할 페이지에 팩키지를 포함시킨다!

            import Vue from 'vue'
            import VueRouter from 'vue-router'
            Vue.use(VueRouter) -> 뷰JS에서 라우터사용 등록필수!

        (3) 뷰 인스턴스 객체 내부에 옵션으로
        반드시!!!!!! 등록해 줘야 사용할 수 있다!!!
        예)   new Vue({
            el:"#app",
            router, ->  등록필수!!!
        })

        참고) router 변수와 옵션 routes 변수는
         변경불가하다! 이미 라이브러리 에서 변수명을
         제한하고 있다!


    4. 버전 : Vue 2.x 버전일 경우 Vue Router 3.x 버전을 사용함!

    5. 내장 컴포넌트 
        (1) <router-view> : 라우트와 일치하는 컴포넌트를 랜더링함
        (2) <router-link> : 라우트 링크를 생성함

    6. 전용속성
        (1) $router : VueRouter 인스턴스 자체
            사용예) this.$router
        (2) $route : 매칭된 라우트 정보 객체
            사용예) this.$route

            - 정보종류
            1) fullPath : '/'로 시작하는 전체경로
            2) hash : URL의 '#' 뒤에 연결되는 문자열
            3) matched : 부모 라우트를 포함한 네스트된 모든 라우트 객체배열
            4) meta : 라우트 메타정보
            5) name : 라우트 이름
            6) params : 라우트 매개변수 객체
            7) path : 라우트 경로
            8) query : URL의 '?'에 이어지는 객체정보

    7. 라우터 정의와 옵션
        (1) 일반형
            const router = new VueRouter({
                routes: [
                    {
                        라우트 정의1
                    },
                    {
                        라우트 정의2
                    }
                ]
            })
        (2) 라우터 이름 붙이기
            const router = new VueRouter({
                routes: [
                    {
                        name: '내꺼얌', -> 라우트 이름
                        path: '/goods', -> 매칭 URL 
                        component: Goods -> 연결 컴포넌트
                    }
                ]
            })

************************************************/

// 라우터 템플릿 만들기
let Trip = {
    template: `<div class="trip router">World Trip</div>`,
};
let Foods = {
    template: `
    <div v-bind:class="
        'foods router '+this.$route.params.cls
    ">
        World Foods {{ this.$route.params.item }}
    </div>`,
};
// this.$route.params.cls
// (해석:)
// this는 현재 라우터를 사용하는 뷰인스턴스 자신
// $route 는 현재 연결된 라우트 정보객체
// params 파라미터 전달 속성
// cls -> 내가만든 파라미터 전달속성변수

// 뷰라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 첫번째 루트
        {
            path: "/trip",
            component: Trip,
        },
        // 두번째 루트
        {
            path: "/foods",
            component: Foods,
        },
        // 두번째 루트의 파라미터 버전 루트추가!
        {
            // 파라미터를 받는 같은 path의 루트는
            // 호출과 구분을 위해 반드시 name속성을 설정해야한다!
            name: "umsik",
            path: "/foods:item", 
            // 경로뒤에 콜론(:)을쓰고 뒤에 파라미터 변수를 써준다!
            component: Foods,
        },
    ],
});

// 내보내기
export default router;
