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
    // (3) 내용 타이틀
    const contit = document.querySelectorAll(".icont h2");
    // (4) 컨텐츠 상위박스(카테고리 클래스 넣기)
    const cont = document.querySelector(".cont");
    // (5) title요소(타이틀 내용에 카테고리명 앞에추가)
    const titag = document.querySelector("title");

    // console.log(stit,lnb,contit,cont,titag);

    // 2. 메뉴데이타 (sinfo변수) 객체에서 카테고리값 선택하기
    const mdata = sinfo[pm];

    console.log(mdata);

    // 3. 대상에 변경 적용하기
    // (1) 카테고리 페이지 타이틀 넣기
    // 대상: .stit -> stit변수
    stit.innerText = mdata["제목"];

    // (2) LNB 메뉴 넣기

    // (3) 내용 타이틀 넣기 : 대상 - contit변수
    // -> h2개수만큼 순번대로 mdata["타이틀"][순번]
    // h2를 돌릴때 for of말고 forEach() 메서드로 사용!
    // forEach((요소,순번)=>{코드})
    contit.forEach((ele,idx)=>{
        ele.innerHTML = mdata["타이틀"][idx];
    }); /////// forEach //////////////


    // (3) 컨텐츠 박스에 pm과 같은 이름의 class넣기
    cont.classList.add(pm.replace(" & ","-"));
    // replace(바뀔값,바꿀값)

} ////////// loadFn함수 //////////////