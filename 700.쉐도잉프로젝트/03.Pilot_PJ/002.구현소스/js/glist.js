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
})