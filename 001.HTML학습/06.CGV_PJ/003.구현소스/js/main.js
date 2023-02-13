// CGV PJ 메인 페이지 JS - main.js

// 요소선택함수 ////////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 로드구역 ////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    /************************************ 
        [ 포스터 메뉴 클릭시 클래스주기 ]
        - 포스터 메뉴 클릭시 해당 li에
        클래스 "on"을 주고 나머지 li는
        "on"을 모두 지워서 선택된 li만
        일어서있는 CSS가 적용되게 한다!
    ************************************/
   // 대상 : .mlist ul>li -> 이벤트+변경대상 일치
    const mlist = qsa(".mlist ul>li");
    console.log(mlist);


}); ///////////// 로드구역 ////////////////