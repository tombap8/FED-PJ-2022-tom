// 달력 생성자함수 /////

// 호출
MakeDallyeok();

function MakeDallyeok(){

    // 선택함수 //////
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);
    // 메시지 /////
    const cg = x => console.log(x);

    // 1. 변수셋팅 /////////////
    
    // (1) 변경할 현재날짜 객체
    const curr_date = new Date();
    // (2) 오늘날짜 객체
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = qs(".yearTit");
    // (4) 월요소 : .monthTit
    const monthTit = qs(".monthTit");
    // (5) 날짜요소 : .dates
    const dates = qs(".dates");

    cg(dates);

    // 2. 함수 만들기 /////////////////
    // (1) 달력 초기화구성 함수
    const initDallyeok = () => {
        // getMonth() 정보는 항상 현재달 숫자보다 1작음(배열순번임!)
        // 1. 전달 마지막 날짜(옵션:0) -> 달력 전달끝쪽 날짜표시
        const prevLast = new Date(curr_date.getFullYear(),curr_date.getMonth(),0);
        cg(prevLast);

    }; ///////// initDallyeok 함수 //////

    initDallyeok();




} //////////// MakeDallyeok //////////////
