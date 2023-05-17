// 전체 리스트 페이지 JS - glist.js


// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 전체리스트 태그 데이터 가져오기
import comData from "./tempData/data-glist.js";

// 전체 리스트용 뷰엑스 스토어 JS 가져오기
import store from "./glist-store.js";
// 전체 리스트용 뷰 라우터 JS 가져오기
import router from "./glist-router.js";


// 1. 뷰 템블릿 만들기
//###### 상단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp", {
    template: comData.tarea,
    methods: {},
}); ////////// 상단영역 Vue component //////////

//###### 하단영역 메뉴 뷰 템플릿 셋팅하기 #######
Vue.component("foot-comp", {
    template: comData.barea,
}); ////////// 하단영역 Vue component //////////

// 2. 뷰 인스턴스 생성하기
new Vue({
    el:".wrap",
    store,// 스토어등록!
    router,// 라우터등록!
    mounted(){
        // 첫번째 라우터 강제실행!
        this.$router.push('/glist');
        // push(실행할 뷰라우터경로)
        // $router - 전체 라우터객체
        // 비교)  $route - 개별경로정보객체

        // 최초 체크박스체크 메서드 실행해야 리스트나옴!
        store.commit('resCheck');
        

        // 메뉴기능실행
        menuFn();

        // 로고이동기능
        $("#logo").click(() => 
        (location.href = "index.html"));
    }, ////////// mounted구역 /////////
})