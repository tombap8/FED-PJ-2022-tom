// 보그 PJ 카테고리 페이지 JS - category.js

// 넘어온 url 받기! pm -> parameter(전달값변수)
let pm = location.href;
// location.href 이 이퀄 오른쪽에 있으면 url주소 읽어옴!

// 문자열 잘라서 값 읽어오기
// -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
pm = pm.split("?")[1].split("=")[1];

// pm값 특수문자 복원하기
pm = decodeURIComponent(pm);

console.log(pm);

//////// 로딩구역 ///////////////////
window.addEventListener("DOMContentLoaded",loadFn);

//// 로드함수 ////////////////////////
function loadFn(){

    console.log("로딩완료!");

    // 1. 변경 대상 선정

} ////////// loadFn함수 //////////////