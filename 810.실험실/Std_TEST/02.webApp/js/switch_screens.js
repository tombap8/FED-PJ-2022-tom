const fadeContbx = document.querySelector(".fade-container");
const arrow = document.querySelector("svg");

// fadeOut 애니 완료 여부 저장 변수
let isScrolling = false;
let AniComplete = false; 

// 화살표애니 완료후 실행 함수
function handleAniComplete(){
    AniComplete = true;
    if(isScrolling && AniComplete) { // 화살표애니 완료되고, 스크롤 발생시 실행
        window.location.href = "main.html";
    }
}

// 스크롤이벤트 감지 함수
function handleScrollEvt(){
    if(!isScrolling) { 
        isScrolling = true;
        fadeContbx.classList.add('fade-out');
        setTimeout(() => {
            window.removeEventListener("scroll", handleScrollEvt);
            arrow.removeEventListener("animationend", handleAniComplete);
            handleAniComplete();
        }, 100);
    }
}

window.addEventListener("scroll", handleScrollEvt);
arrow.addEventListener("animationend", handleAniComplete); 

