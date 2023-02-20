// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
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

    // 1. 호출확인
    // console.log("로딩완료!");

    // 2. 변경 대상: 
    // (1) 슬라이드 박스(#slide)
    const slide = document.querySelector("#slide");
    // console.log("슬라이드:",slide);

    // (2) 블릿박스 li(.indic li)
    const indic = document.querySelectorAll(".indic li");
    // console.log("블릿:",indic);

    // 2.5. 변경 대상 li에 순번 속성넣기!
    // -> 넣는 이유: li가 이동하여 순서가 바뀌므로
    // 블릿버튼 순번을 표시할때 고유한 순서번호가 필요함!
    // 내가 만드는 속성은 반드시 "data-"로 시작하도록 W3C에서 정함!
    // 순번속성명은 "data-seq"로 정하기로함!
    let setSeq = slide.querySelectorAll("li");
    // for(시;한;증){코드}
    for (let i = 0; i < setSeq.length; i++) {
        setSeq[i].setAttribute("data-seq", i);
        // 각 li마다 새로운 속성인 "data-seq"에
        // 순서대로 0부터 값을 넣어준다!
    } /////////// for //////////////////

    // 3. 이동버튼에 클릭이벤트 설정
    // 이동버튼요소
    const abtn = document.querySelectorAll(".abtn");
    // console.log("이동버튼:",abtn);

    // 광클금지용 변수
    let prot = 0; // 0-허용, 1-금지

    // 버튼개수만큼 for of로 클릭이벤트설정
    for (let x of abtn) { // x는 a요소자신

        x.onclick = () => {

            // console.log("광클막기:",prot);

            ///////// 광클금지 /////////
            if (prot) return false; //돌아가! 
            prot = 1; //잠금!
            setTimeout(() => prot = 0, 410);
            // 타임아웃으로 슬라이드이동 후
            // 잠금설정을 prot=0으로 해제
            ////////////////////////////

            // 인터발지우기 함수호출!
            clearAuto();

            // 1. 오른쪽버튼 여부
            let isR = x.classList.contains("ab2");
            // console.log(".ab2인가?",isR);
            // classList.contains(클래스명)
            // -> 지정클래스가 있으면 true리턴

            // 2. 오른쪽/왼쪽버튼 분기하기
            if (isR) { // 오른쪽버튼 ///

                // 오른쪽 이동함수 호출!
                goRight();

            } //////////// if //////////
            else { // 왼쪽버튼 ///////

                // 1. 맨뒤 li 맨앞으로 이동
                // li들
                let lis = slide.querySelectorAll("li");
                // insertBefore(넣을놈,넣을놈전놈)
                // insertBefore(맨뒤li,맨앞li)
                slide.insertBefore(
                    lis[lis.length - 1], lis[0]);
                // lis[lis.length-1] 맨뒤li -> lis[개수-1]
                // lis[0] 맨앞li

                // 2. 동시에 left:-100% + 트랜지션없앰
                slide.style.left = "-100%";
                slide.style.transition = "none";

                // 위의 이동소스와 약간의 시차필요!
                // setTimeout(함수,시간) -> 0.01초 시차
                setTimeout(() => {
                    // 3. left:0 + 트랜지션
                    slide.style.left = "0";
                    slide.style.transition =
                        "left .4s ease-out";
                }, 10); ///// 타임아웃 ////

                // 4. 블릿작동함수 호출!
                goIndic(0);
                // 파라미터값으로 0 -> 왼쪽은 0

            } //////////// else /////////

            // a요소 기본이동막기
            return false;

        }; /////// click ///////

    } /////////// for of //////////////

    /***************************************** 
        함수명: goIndic
        기능: 블릿 표시자 작동하기
    *****************************************/
    const goIndic = isR => { // isR : 오른쪽 1, 왼쪽 0

        // [ 공통기능 : 블릿변경하기 ]

        // 블릿 class="on" 지우기 초기화
        for (let x of indic)
            x.classList.remove("on");

        // 첫번째 슬라이드 "data-seq"값을
        // 읽어와서 블릿순번에 적용하기!
        // 주의: 오른쪽버튼은 [1], 왼쪽버튼은 [0]
        // 즉, 오른쪽은 두번째li, 왼쪽은 첫번째li
        // 오른쪽 버튼이면 isR 변수값이 true
        // isR?1:0 -> 비?집:놀이동산 (조건연산자===삼항연산자)
        // isR값이 true이면 1, 아니면 0
        let fseq = slide
            .querySelectorAll("li")[isR ? 1 : 0]
            .getAttribute("data-seq");
        // getAttribute(속성명) -> 속성값을 읽어옴!

        // console.log("오른쪽/왼쪽다름:",isR?1:0);

        // console.log("fseq값:",fseq);
        // console.log("fseq값의 형:",typeof fseq);

        indic[fseq].classList.add("on");
        // 원래는 fseq는 숫자값인데 숫자형이어야함
        // 그래서 Number(fseq)로 형변환 해야했었음...
        // 그런데 요즘 브라우저에서는 이런부분을 
        // 형변환하지 않아도 숫자이면 숫자형으로 변환해줌~!

    }; /////////// goIndic 함수 ////////////////
    ////////////////////////////////////////////

    /***************************************** 
        함수명: goRight
        기능: 오른쪽 슬라이드 이동기능
    *****************************************/
    const goRight = () => {

        // 1. 슬라이드 left:-100% + 트랜지션
        slide.style.left = "-100%";
        slide.style.transition =
            "left .4s ease-out";

        // 이동후 실행 -> 이동시간은 0.4초
        // setTimeout(함수,시간) -> 일정시간후 한번실행!
        setTimeout(() => {

            // 2. 첫번째 li를 맨뒤로 이동
            // 첫번째 li
            let fli = slide
                .querySelectorAll("li")[0];
            // 맨뒤로 이동
            slide.appendChild(fli);

            // 3. 동시에 left값 0
            slide.style.left = "0";
            // 이때 트랜지션 해제!
            slide.style.transition = "none";

        }, 400); //// 타임아웃 ///////

        // 3. 블릿작동함수 호출!
        goIndic(1); // 오른쪽은 전달값 1

    }; //////////// goRight 함수 ///////////////
    ////////////////////////////////////////////

    // 인터발용변수
    let autoI;

    // 인터발 셋팅 함수 //////////////
    const autoCall = () =>
        autoI = setInterval(goRight, 2000);

    // 인터발 셋팅 함수 최초호출!
    autoCall();

    // 타임아웃용 변수
    let autoT;

    // 인터발 지우기 함수 /////////////
    const clearAuto = () => {
        console.log("인터발지움!");

        // 인터발지우기
        clearInterval(autoI);

        // 타임아웃지우기(실행쓰나미방지!)
        clearTimeout(autoT);

        // 일정시간후 인터발셋팅(4초후)
        autoT = setTimeout(autoCall, 4000);
        // 매번 타임아웃을 변수에 담고 먼저 지우기 때문에
        // 최종적으로 남는 타임아웃은 하나뿐이다!
        // 따라서 타임아웃 실행 쓰나미가 발생하지 않는다!

    }; ///////// clearAuto 함수 ///////



} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////