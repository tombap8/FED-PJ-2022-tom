// 옷소매 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 광클금지 설정하기 //////
    if (prot) return;
    prot = 1; // 잠금!
    setTimeout(() => {
        prot = 0; // 해제!
    }, 400); /// 0.4초후 해제! ///

    // 대상: .gbx
    const gbx = document.querySelector(".gbx");

    /******************************************* 
        함수명: goSlide
        기능: 이동방향에 따른 요소 이동하기
    *******************************************/
    const goSlide = (dir) => {
        // dir - 버튼구분(1-오른쪽,0-왼쪽)
        // 1. 호출확인
        console.log("나야나!", dir);

        // 2. 대상선정
        // 이동대상: .gbx>div
        let tg = gbx.querySelectorAll("div");

        // 3. 분기하기
        // 3-1. 오른쪽버튼 클릭시
        if (dir) {
            // 첫번째 자식요소 div 맨뒤로이동
            // appendChild(첫번째요소)
            gbx.appendChild(tg[0]);
        } //////////// if : 오른쪽 /////

        // 3-2. 왼쪽버튼 클릭시
        else {
            // 마지막 자식요소 div 맨앞로이동
            // insertBefore(마지막요소,첫번째요소)
            gbx.insertBefore(tg[tg.length - 1], tg[0]);
        } //////////// else : 왼쪽 ///////
    }; /////////////// goSlide함수 ////////////////

    // 오른쪽버튼 클릭시 /////////////
    document.querySelector(".rb").onclick = () => {
        goSlide(1);

        console.log("오른쪽!");
        // 이동대상: .gbx>div
        let tg = gbx.querySelectorAll("div");

        // 첫번째 자식요소 div 맨뒤로이동
        // appendChild(첫번째요소)
        gbx.appendChild(tg[0]);
    }; ////////// click /////////////

    // 왼쪽버튼
    document.querySelector(".lb").onclick = () => {
        goSlide(0);

        console.log("왼쪽!");
        // 이동대상: .gbx>div
        let tg = gbx.querySelectorAll("div");

        // 마지막 자식요소 div 맨앞로이동
        // insertBefore(마지막요소,첫번째요소)
        gbx.insertBefore(tg[tg.length - 1], tg[0]);
    }; ////////// click /////////////
}); ///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////
