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

    // 1. 변경 대상 선정 ////////////////////////
    // (1) 서브타이틀
    const stit = document.querySelector(".stit");
    // (2) 서브메뉴
    const lnb = document.querySelector(".lnb");
    // (3) 컨텐츠 상위박스(카테고리 클래스 넣기)
    const cont = document.querySelector(".cont");
    // (4) title요소(타이틀 내용에 카테고리명 앞에추가)
    const titag = document.querySelector("title");

    console.log(stit,lnb,cont,titag);

} ////////// loadFn함수 //////////////