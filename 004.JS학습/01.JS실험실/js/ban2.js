// JS실험실: 03.배너스타일 JS -  ban.js

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:
        -> left 이동의 기준값이 -220% 인것이 포인트!
        (이유: 2장의 슬라이드가 앞에 나가있음. 잘라내는 것이
            숨겨져야하므로 셋팅한것임!)

        (1) 오른쪽 버튼 클릭시

            ※ 변경된부분!!!
            {   트랜지션 중앙 커지기를 적용한 경우이므로
                왼쪽버튼과 같이 잘라내기를 먼저하여
                슬라이드 주인공 순서를 일치 시킨다!!!! }

            -> 슬라이드 이동전!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 -110%으로 변경한다!
        
            다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -220%로 변경시킨다.
            

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -330%로 변경한다.
            그 후 left값을 -220%으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    console.log("로딩완료!");

    // 1. 대상선정 //////////////////////////
    // 1-1. 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");

    // 1-2. 변경 대상: #slide
    const slide = document.querySelector("#slide");

    // 1-3. 블릿 대상: .indic li
    const indic = document.querySelectorAll(".indic li");
    console.log(indic);

    // 1-4. 슬라이드 li리스트
    let slist = document.querySelectorAll("#slide>li");

    // [ 초기화1 - 순번붙이기 ] ///////////////////
    // 잘라내기로 li순번이 뒤섞이므로 블릿변경 매칭을 위한
    // 고유순번을 사용자정의 속성(data-)으로 만들어준다!
    slist.forEach((ele, idx) => {
        // data-seq 라는 사용자정의 속성 넣기
        ele.setAttribute("data-seq", idx);
    }); ////// forEach /////////////////

    // [ 초기화2 - 맨뒤요소 맨앞으로 이동 2번하기! ]
    // 맨뒤 맨앞이동 함수만들기
    const chgSeq = () => {
        // 현재 슬라이드 li 새로읽기(2번반복시 li의 순서가 달라지기때문)
        slist = document.querySelectorAll("#slide>li");
        // 맨뒤 맨앞이동하기 -> 변경대상: #slide -> slide변수
        slide.insertBefore(slist[slist.length - 1], slist[0]);
        // slide.insertBefore(넣을놈,넣을놈전놈)
        // slide.insertBefore(마지막요소,첫요소)
        // slide.insertBefore(slist[개수-1],slist[0]);
    }; ////////// chgSeq함수 ///////////

    // 2번 맨뒤 맨앞이동 함수 호출하기!!!
    for (let i = 0; i < 2; i++) chgSeq();

    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 2. 슬라이드 변경함수 만들기
    // 호출시 seq에 들어오는 값중 1은 오른쪽, 0은 왼쪽
    const goSlide = (seq) => {
        //  console.log("슬고우!", seq);

        //  console.log("못들어갔어!!!!");

        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        //  console.log("나,들어왔어!!!");

        // 0. 현재의 슬라이드 li수집하기
        let clist = slide.querySelectorAll("li");
        // clist -> current list 현재 리스트

        // 1. 방향에 따른 분기
        // 1-1. 오른쪽버튼 클릭시 ////////////////
        if (seq) {
            console.log("오른!");

            // 1. 슬라이드 이동전 먼저 잘라낸다!
            // 이유: 슬라이드 순서를 왼쪽이동과 동일하게 함!
            // 중앙확대 트랜지션 적용시 동작이 달라지므로!

            // (1-1) 바깥에 나가있는 첫번째 슬라이드
            //       li를 잘라서 맨뒤로 보낸다!
            slide.appendChild(clist[0]);
            // (1-2) 동시에 left값을 -110%으로 변경한다!
            slide.style.left = "-110%";
            // (1-3) 트랜지션 없애기!
            slide.style.transition = "none";

            // (2) 오른쪽 버튼 클릭시 다음 슬라이드가
            //     나타나도록 슬라이드 박스의 left값을
            //     -220%로 변경시킨다.

            // [코드분리하기!] //////////////////////////
            // -> 같은속성변경을 같은 메모리공간에서 수행하면
            // 변경효과가 없음!!!
            setTimeout(() => {
                slide.style.left = "-220%";
                slide.style.transition = "left .4s ease-in-out";
            }, 1); //// 타임아웃 //////
            // 시간에 0을쓰면 인터발호출시 트랜지션이 안먹히는 에러가 있음
            // 1만써도 괜찮음~

            // -> 타이밍함수는 기존 함수인 스택(Stack)메모리 공간이 아닌
            // 대기실행 공간인 큐(Queue)메모리공간에서 실행하므로
            // 코드가 동시에 바뀌는 것을 막아주고 의도한 대로
            // 시차실행을 가능하게 해준다!
        } //////////// if : 오른쪽클릭시 //////

        // 1-2. 왼쪽버튼 클릭시 //////////////
        else {
            console.log("왼쪽!");

            // (1) 왼쪽버튼 클릭시 이전 슬라이드가
            // 나타나도록 하기위해 우선 맨뒤 li를
            // 맨앞으로 이동한다.
            // slide.insertBefore(넣을놈,넣을놈전놈)
            // slide.insertBefore(맨끝li,맨앞li)
            slide.insertBefore(clist[clist.length - 1], clist[0]);

            // (2) 동시에 left값을 -330%로 변경한다.
            slide.style.left = "-330%";
            // 이때 트랜지션을 없앤다(한번실행후 부터 생기므로!)
            slide.style.transition = "none";

            // (3) 그 후 left값을 -220%으로 애니메이션하여
            // 슬라이드가 왼쪽에서 들어온다.
            // 동일 속성인 left가 같은 코딩처리 공간에 동시에
            // 있으므로 이것을 분리해야 효과가 있다!
            // setTimeout을 사용한다!
            setTimeout(() => {
                slide.style.left = "-220%";
                slide.style.transition = "left .4s ease-in-out";
            }, 0); ////// 타임아웃 /////////
        } //////////// else : 왼쪽클릭시 //////

        // 2. 현재 슬라이드 순번과 같은 블릿표시하기
        // 대상: .indic li -> indic변수
        // 2-1. 현재 배너리스트 업데이트하기
        clist = slide.querySelectorAll("li");
        // !!!!! 오른쪽이든 왼쪽이든 먼저 잘라내기 때문에
        // 순번은 3번째로 일치함!!!!!!
        // console.log("다시수집:",clist);

        // 2-2.방향별 읽어올 슬라이드 순번으로 "data-seq"값 읽어오기
        // 세번째 슬라이드가 주인공이니까 0,1,2 즉 2번을 쓰면됨!!!
        let cseq = clist[2].getAttribute("data-seq");
        //  console.log("현재순번:", cseq);

        // 2-3. 블릿초기화
        for (let x of indic) x.classList.remove("on");

        // 2-4. 읽어온 슬라이드 순번의 블릿에 클래스 "on"넣기
        indic[cseq].classList.add("on");
    }; ////////// goSlide함수 ///////////

    // 3. 이동버튼대상에 이벤트 설정하기
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            // 0. 기본이동막기
            event.preventDefault();
            // 1. 인터발지우기함수 호출!
            clearAuto();
            // 2. 슬라이드 함수 호출!
            goSlide(idx);
        }; ///// click함수 //////
    }); /////// forEach //////////

    ////////////////////////////
    // 자동넘김 설정하기 ////////

    // 일정시간간격 넘어가기
    // -> setInterval(함수,시간)

    // [인터발함수의 함수전달값 사용예
    // (타임아웃함수도 동일함)]
    // 1. 함수에 전달값이 없으면 함수명만 사용가능
    // setInterval(goSlide,3000);
    // 2. 전달값이 있다면 익명함수구역에 코딩
    // setInterval(function(){goSlide(1)},3000);
    // 3. 화살표함수사용가능
    // setInterval(()=>{goSlide(1)},3000);
    // 4. 화살표함수에서 중괄호 생략가능
    // setInterval(()=>goSlide(1),3000);

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
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
