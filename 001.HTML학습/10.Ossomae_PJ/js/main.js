// 옷소매 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 대상: .gbx
    const gbx = document.querySelector(".gbx");

    /******************************************* 
        함수명: goSlide
        기능: 이동방향에 따른 요소 이동하기
    *******************************************/
    const goSlide = (dir) => {
        // dir - 버튼구분(1-오른쪽,0-왼쪽)

        //// 0. 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

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
        // 1. 슬라이드함수 호출
        goSlide(1);
        // 2. 자동호출 지우기
        clearAuto();
    }; //////////// click ////////////////

    // 왼쪽버튼 클릭시 /////////////
    document.querySelector(".lb").onclick = () => {
        // 1. 슬라이드함수 호출
        goSlide(0);
        // 2. 자동호출 지우기
        clearAuto();
    }; //////////// click ////////////////

    // 인터발함수 지우기위한 변수
    let autoI;
    // 타임아웃함수 지우기위한 변수
    let autoT;

    /************************************ 
        함수명: autoSlide
        기능: 인터발함수로 슬라이드함수 호출
    ************************************/
    function autoSlide() {
        console.log("인터발시작!");
        // 인터발함수로 슬라이드함수 호출하기
        autoI = setInterval(() => goSlide(1), 3000);
    } ////////////// autoSlide함수 //////////

    // 자동넘김 최초호출!
    autoSlide();

    /************************************ 
        함수명: clearAuto
        기능: 인터발함수를 지우고 다시셋팅
   ************************************/
    function clearAuto() {
        console.log("인터발멈춤!");
        // 1. 인터발 지우기
        clearInterval(autoI);

        // 2. 타임아웃도 지우지 않으면
        // 쌓여서 타임아웃 쓰나미실행이 발생한다!
        clearTimeout(autoT);

        // 3. 잠시후 다시 작동하도록 타임아웃으로
        // 인터발함수를 호출한다!
        // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
        autoT = setTimeout(autoSlide, 5000);
    } ///////// clearAuto 함수 /////////////
}); ///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////
