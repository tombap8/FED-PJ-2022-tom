// 달력 생성자함수 /////

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





} //////////// MakeDallyeok //////////////