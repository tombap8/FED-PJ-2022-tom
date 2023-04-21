// 패럴렉스 PJ JS - main.js

// 로드 이벤트 설정
window.addEventListener("DOMContentLoaded",loadFn);

// 로드함수 ////
function loadFn(){

    console.log("로딩완료!");

    // 1. 부드러운 스크롤 적용하기!
    startSS();

    // 2. 공통선택자함수
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);
    // 3. 등장위치리턴함수
    const retVal = x => x.getBoundingClientRect().top;
    // getBoundingClientRect().top 
    // -> 화면에 등장후 위로 올라가면 마이너스됨!

    // 4. 화면높이값읽기 : 등장요소의 시작값이 이것임!
    const winH = window.innerHeight;
    console.log("winH:",winH);

    // 5. 패럴렉스 수치범위 : 움직일값 설정
    const setH1 = 100;
    const setH2 = 200;

    // 6. 패럴렉스 대상선정
    // (1) 글자박스
    const tg1 = qsa(".txt");
    // (2) 아이콘
    const tg2 = qsa(".icon");

    // 7. 스크롤 이벤트함수 만들기
    window.addEventListener("scroll",()=>{

        let elpos = retVal(tg1[2]);
        // 테스트 - 3번째 텍스트 위치값
        console.log(elpos);

        // 패럴렉스 범위 : 윈도우높이값 ~ 0까지!
        // 화면에서 완전히 사라질때 범위는 0이 아니고
        // 요소의 -높이값만큼 이다!
        if(elpos < winH && elpos > 0){

            // 1. 위치이동값 계산
            let x = elpos * setH2 / winH;
            console.log("x:",-x);

            // 2. 해당요소에 위치이동 CSS반영
            tg1[2].style.cssText = `
                transform:translateY(${-x}px);
            `;
            // cssText속성은 style속성값을 직접넣어준다!

            // 대상요소의 트랜스폼 Y축이동
            // 위치이동의 계산원리
            // -> 윈도우화면 : 위치값 = 정한범위 : 실제이동값
            // -> 윈도우가 1000px : 500px = 200px : x?
            // 실제이동값 = 위치값*정한범위 / 윈도우화면
            // x = elpos * setH2 / winH


        } /////// if : 패럴렉스 범위 ///////

    }); /////////// scroll /////////////////





} ////////////// loadFn ///////////////////////////