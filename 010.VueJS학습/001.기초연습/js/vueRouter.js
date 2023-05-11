// 뷰라우터를 위한 뷰인스턴스 생성 JS - vueRouter.js

// 라우터 셋팅 가져오기
import router from "./router.js";

// 뷰 인스턴스 생성하기!!!
new Vue({
    el:"#app",
    router, // 라우터 인스턴스에 등록필수!!!
})