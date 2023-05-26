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

        // 페이지 로딩시 로컬스 데이터 
        // cart에 데이터가 있으면
        // 카트 이미지버튼 보여주기
        if(localStorage.getItem("cart") != null){
            // 널이 아닌경우에 length를 체크하여
            // 0이 아니면 카트버튼을 출력해준다!
            if(localStorage.getItem("cart").length != 0){
                let org = localStorage.getItem("cart");
                org = JSON.parse(org);
                console.log("변환객체:", org);
    
                // 카트버튼 애니메서드 호출하기
                store.commit('cartAni',{cnt:org.length,opt:0});
                // 애니메서드 파라미터
                // cnt - 카트아이템 개수
                // opt - 셋팅옵션번호 (초기CSS값 선택옵션)
                // opt값 - 0 (오른쪽위 작은것) / 1 (정중앙 큰것)

            } //////// if : length 체크 /////////////
        } ////////////// if : null 체크 //////////////



    }, ////////// mounted구역 /////////
})