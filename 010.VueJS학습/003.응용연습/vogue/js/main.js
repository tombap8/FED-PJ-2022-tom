// 보그 PJ 메인페이지 JS - main.js

/////// 로딩구역 //////////////////////
window.addEventListener("DOMContentLoaded", () => {
    /************************ 
        리턴함수 셋팅구역
    *************************/
    // 1. 요소선택 함수 : querySelectorAll()함수
    const q = (x) => {
        // (1) 리턴할요소변수 : rv (return value)
        let rv = document.querySelectorAll(x);

        // (2) 요소개수체크
        let cnt = rv.length;
        cg(cnt + "개");

        // (3) 1개일 경우 첫번째만 선택해서 리턴함
        if (cnt === 1) rv = rv[0];

        // (4) 결과리턴하기
        return rv;
    }; /////////// q함수 ///////////

    // 2. 콘솔출력 함수
    const cg = (x) => console.log(x);

    // 3. 등장액션 대상 위치값 리턴함수/////
    const retVal = (ele) => ele.getBoundingClientRect().top;

    // ***********************************

    /********************************** 
        스크롤 등장액션 기능구현하기
   **********************************/
    // 스크롤 등장대상: .scAct
    const scAct = q(".scAct");

    // 상단메뉴 대상: #top
    const topA = q("#top");

    // 상단이동버튼 대상 : .tbtn
    const tbtn = q(".tbtn");
    // cg(tbtn);

    // 화면높이값의 2/3구하기
    const hv = (window.innerHeight / 3) * 2;
    // console.log("2/3높이:",hv);

    ////////////////////////////////
    // 클래스 넣기 함수 만들기 ///////
    ////////////////////////////////
    const showIt = (ele) => {
        // ele - 등장요소
        // 대상요소의 현재스크롤 위치
        let xval = retVal(ele);

        // 구간적용여부 검사하기
        // 0보다 크고 화면의 2/3보다 작은 구간!
        if (xval < hv && xval > 0) {
            // console.log("작동!~~~~");
            // 해당요소에 클래스 넣기!
            ele.classList.add("on");
        }

        // 되돌리기(on제거)는 else문에 구현가능함!
        // else{
        //     ele.classList.remove("on");
        // }
    }; //////////// showIt //////////

    // 현재스크롤 위치변수
    let scTop;

    // 스크롤 이벤트 셋팅하기 //////////
    window.addEventListener("scroll", () => {

        // 현재스크롤위치
        scTop = window.scrollY;
        // cg(scTop);

        // 상단영역 슬림메뉴 적용하기 + !mobsts -> 0일때(DT일때)만 적용 //
        if (scTop >= 100 && !mobsts) topA.classList.add("on");
        else topA.classList.remove("on");

        // 위로이동버튼 보이기/숨기기 + !mobsts -> 0일때(DT일때)만 적용 //
        if (scTop >= 300 && !mobsts) tbtn.classList.add("on");
        else tbtn.classList.remove("on");

        // 값확인하기
        // cg("박스1:" + retVal(scAct[0]));

        // 스크롤등장 요소 개수만큼 for문으로 돌리기
        for (let x of scAct) showIt(x);
    }); ////////// scroll ////////////////


    // 상단이동버튼(.tbtn) 클릭시 상단이동하기
    // 부드러운 스크롤 pos 스크롤 위치값 업데이트필요!
    tbtn.onclick = (e) => {
        // 기본이동막기
        e.preventDefault();
        // 부드러운 스크롤 전역 스크롤값을
        // 0으로 변경하여 위치값 일치시킴!
        pos = 0;

        // 위치이동하기
        window.scrollTo(0,0);
    }; /////////////// click ///////////////


}); /////////////// 로딩구역 ////////////////////
