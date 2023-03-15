// 쇼핑몰 배너 JS - 03.페이드효과 //

// 로딩후 loadFn함수 호출 //////////
window.addEventListener("DOMContentLoaded", loadFn);

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩후 이벤트설정 및 슬라이드 기능
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 슬라이드번호 변수
    let snum = 0;

    // 1. 대상선정
    // 1-1. 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");
    // console.log(abtn);

    // 1-2. 변경 대상: #slide > li
    const slide = document.querySelectorAll("#slide>li");
    // 슬라이드 개수
    let scnt = slide.length;
    console.log("슬개수:",scnt);
    
    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");

    // 2. 슬라이드 변경함수 만들기
    const goSlide = (seq) => {
        console.log("슬고우!",seq);

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시: seq===1일때
        if(seq){
            // 슬라이드번호 증가!
            snum++;
            console.log("오른!",snum);

        }
        // 1-2. 왼쪽버튼 클릭시: seq===0일때
        else{
            // 슬라이드번호 감소!
            snum--;
            console.log("왼쪽!",snum);
        }

        // 2. 한계값 체크 : 
        // 처음이전->끝
        if(snum===-1) snum = scnt-1;
        //끝다음->처음
        else if(snum === scnt) snum = 0;

        // 3. 이동하기 : 해당순번 슬라이드 li에 클래스"on"넣기
        // 변경대상: slide변수(#slide li)
        // 전체초기화!
        slide.forEach(ele=>ele.classList.remove("on"));
        // 해당순번li에 클래스넣기
        slide[snum].classList.add("on");

        // 4. 블릿변경 : 해당순번 블릿 li에 클래스"on"넣기
        // 변경대상: indic변수(.indic li)
        // 전체초기화!
        indic.forEach(ele=>ele.classList.remove("on"));
        // 해당순번li에 클래스넣기
        indic[snum].classList.add("on");
    }; ////////// goSlide함수 ///////////

    // 3. 대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////
}
 /////////////// loadFn 함수 //////////////