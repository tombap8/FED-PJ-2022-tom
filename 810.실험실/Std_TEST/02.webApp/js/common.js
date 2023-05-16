import comData from "./tempData/commonData.js"

// 상단영역 뷰 컴포넌트
Vue.component("top-area",{
    name: "top-area",
    template: comData.topArea,
});

// 하단영역 뷰 컴포넌트
Vue.component("info-area",{
    name: "info-area",
    template: comData.infoArea,
});

Vue.component("prod-comp",{
    template: comData.rcent_view_pbx,
});

const makeVue = x => new Vue({el:x});
makeVue("#info");
makeVue(".recent-view-prod-bx");

new Vue({
    el: "#header",
})

// Get방식으로 넘어온 url값 받아서 파라미터값 변경!
$('.header_top_gnb > ul > li').click(function(){
    const catName = $(this).text(); // 클릭한 카테고리명 가져오기
    const wUrl = window.location.href.split('?')[0]; // 현재 페이지 URL에서 '?' 이전 부분 가져오기
    const newUrl = wUrl + '?cat=' + catName;
    window.location.href = newUrl; // 새로운 url 페이지로 이동
});

// 공사중 표시
$('.header_top_personal_menu > ul > li:nth-child(2), .header_top_personal_menu > ul > li:nth-child(3)').on('click',function() {
    alert("공사중입니다.");
});
