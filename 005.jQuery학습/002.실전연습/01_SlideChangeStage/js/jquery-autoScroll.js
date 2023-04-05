// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// 로딩구역없이 함수로 구현함! /////

/****************************************** 
    대상 변수할당하기
******************************************/
// 전체 페이지번호
let pno = 0;
// 페이지 요소
const pg = $(".page");
// 전체 페이지개수
const pgcnt = pg.length;
console.log("페이지개수:",pgcnt,pg);
// 광실행금지변수
let prot = [];
// 광스크롤금지
prot[0] = 0;



/****************************************** 
    이벤트 등록하기
******************************************/
// 윈도우 휠이벤트 발생시
$(window).on("wheel",wheelFn);

/**************************************** 
    함수명: wheelFn
    기능: 마우스휠 이벤트 발생시 호출됨
    -> 한페이지씩 자동스크롤 기능
****************************************/
function wheelFn(){

    // 광휠금지
    if(prot[0]) return;
    prot[0] = 1;
    setTimeout(()=>prot[0]=0,800);

    console.log("휠~~~~~~!");

    // 1.휠방향 알아내기
    let delta = event.wheelDelta;
    console.log(delta);
    
    // 2. 방향에 따른 페이지번호 증감
    if(delta < 0){
        pno++;
        if(pno===pgcnt)pno=pgcnt-1;
        // 마지막 페이지번호에 고정!
    } //// if /////
    else{
        pno--;
        if(pno===-1)pno=0;
        // 첫페이지번호에 고정!
    } //// else ////

    console.log(pno);

    // 3. 스크롤 이동하기
    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    $("html,body").animate({
        scrollTop:($(window).height()*pno)+"px"
    },800,"easeOutBounce")


} /////////////// wheelFn 함수 ///////////////
