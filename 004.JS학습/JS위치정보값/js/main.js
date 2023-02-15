/************************************************************** 
                    
    ★[[ JavaScript에서 요소의 위치 구하기]]★

    [ offsetTop / offsetLeft] 
    -> 부모자격요소를 기준한 위치값
    -> 제이쿼리 position()과 같음

    [ getBoundingClientRect() > top / left ] 
    -> 스크롤위치를 뺀 화면 기준
    -> 제이쿼리의 offset() 과 같은 절대값을 구하려면
    스크롤위치값을 본 값에 더해야함!
    -> 주로 세로 스크롤을 사용하므로 top값에 스크롤값을 더함
    예) 요소.getBoundingClientRect().top + window.scrollY

    ※ 참고: 바운딩 값은 소수점 아래 많은 자릿수까지 표시하므로
        이것을 소수점자리 제한하여 사용할 수 있다!
        -> toFiexd(자릿수) : 자릿수에 0을 넣으면 소수점 아래버림
    ___________________________________________________________

    ★[[ JavaScript에서 요소의 크기 구하기 ]]★
    
    -> 한눈에 보기:
    http://jsfiddle.net/y8Y32/25/
    
    [ 가로크기 ]
    - clientWidth : 패딩점퍼를 입고 있는 클라이언트님!
        padding을 포함한 폭
    - scrollWidth :  가로스크롤내용이 들어가니까 scroll!
        padding을 포함한 화면 상에 표시되지 않은 콘텐츠를 포함한 폭
    - offsetWidth : 보더,패딩,세로스크롤바 트랙이 다 들어가니 옵셋!
        border, padding, 세로스크롤바 트랙을 포함한 폭
    
    [ 세로크기 ]
    - clientHeight : 패딩점퍼를 입고 있는 클라이언트님!
        padding을 포함한 높이
    - scrollHeight :  세로스크롤내용이 들어가니까 scroll!
        padding을 포함한 화면 상에 표시되지 않은 콘텐츠를 포함한 높이
    - offsetHeight : 보더,패딩,가로스크롤바 트랙이 다 들어가니 옵셋!
        border, padding, 가로스크롤바 트랙을 포함한 높이
    _____________________________________________________________

    ★[[ 윈도우 사이즈 가져오기 ]]★
    window.innerWidth :  스크롤 바를 포함하지 않는 창 너비
    window.innerHeight : 스크롤 바를 포함하지 않은 창 높이
    window.outerWidth : 스크롤 바를 포함, 창의 너비
    window.outerHeight :  스크롤 바를 포함한  창의 높이
    _____________________________________________________________

    ★[[ 현재 스크롤바 위치값 가져오기 ]]★
    1. window.scrollY (IE6~11지원안함)
    2. document.scrollingElement.scrollTop
    3. document.documentElement.scrollTop
    4. document.querySelector('html').scrollTop

    _____________________________________________________________

    ★[[ 이벤트발생시 위치값 ]]★
    1. clientX, clientY
        -> 현재 보이는 브라우저 화면이 기준

    2. offsetX, offsetY
        -> 이벤트 대상이 기준

    3. pageX, pageY
        -> 전체 문서를 기준(스크롤 화면을 포함)

    4. screenX, screenY
        -> 모니터 화면을 기준

**************************************************************/
////////// 로드구역 ////////////////////////////
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    // 1. 벌새
    const bird = qs("#bird");
    // 2. 내부박스
    const ibx = qs(".inbox");
    // 3. 내부박스 위치표시박스
    const ibxWrap = qs(".inbox .wrap");
    // 4. 전체 위치표시박스
    const bd = qs("body>.wrap");

    // 위치표시하기 for문 /////////

    // 1. 내부박스 가로기준선넣기
    for (let i = 0; i < 20; i++) {
        // console.log(i);
        ibxWrap.innerHTML += `<div class="ln" style="top:${100 * (i + 1)}px">${100 * (i + 1)}px</div>`;
    }
    
    // 2. 내부박스 세로기준선넣기
    for (let i = 0; i < 9; i++) {
        // console.log(i);
        ibxWrap.innerHTML += `<div class="ln2" style="left:${100 * (i + 1)}px">${100 * (i + 1)}px</div>`;
    }

    // 3. 전체 가로기준선넣기
    for (let i = 0; i < 25; i++) {
        // console.log(i);
        bd.innerHTML += `<div class="ln" style="top:${100 * (i + 1)}px">${100 * (i + 1)}px</div>`;
    }
    
    // 4. 전체 세로기준선넣기
    for (let i = 0; i < 25; i++) {
        // console.log(i);
        bd.innerHTML += `<div class="ln2" style="left:${100 * (i + 1)}px">${100 * (i + 1)}px</div>`;
    }

    // 5. 내부박스에 임의의 박스 넣기
    for (let i = 0; i < 5; i++) {
        // console.log(i);
        // 짝수일때
        if (i % 2)
            ibxWrap.innerHTML += `<div class="point" style="
                        top:${120 * (i + 1)}px;
                        left:${10 * (i + 1)}px">
                        ${i + 1}번째박스</div>`;
        // 홀수일때
        else
            ibxWrap.innerHTML += `<div class="point" style="
                        top:${130 * (i + 1)}px;
                        right:${10 * (i + 1)}px">
                        ${i + 1}번째박스</div>`;
    }

    // 6. 내부 생성박스에 일부 패딩, 내용 넣기
    const pnt = qsa(".inbox .point");

    pnt.forEach((ele, idx) => {
        if (idx === 2 || idx === 4) {
            ele.innerHTML += `<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                         laborum.`;
        }
        if (idx === 1 || idx === 4) {
            ele.style.padding = "2vw";
        }
    }); /////////// forEach ///////////


    // [ 1. 벌새 위치 찍기 ]
    setInterval(function () {
        /// 화면표시 ////
        qs(".i1").innerText = bird.offsetTop;
        qs(".i2").innerText = bird.offsetLeft;
        qs(".i3").innerText = bird.getBoundingClientRect().top.toFixed(0);
        qs(".i4").innerText = bird.getBoundingClientRect().left.toFixed(0);
        qs(".i31").innerText = (bird.getBoundingClientRect().top + window.scrollY).toFixed(0);
        qs(".i42").innerText = window.scrollY;
    }, 100); ///// setInterval //////


    // [ 2. 마우스 커서 이벤트 발생시 위치값 찍기 ]
    ibx.onmousemove = (e) => {
        /// 화면표시 ////
        qs(".i5").innerText = e.pageX;
        qs(".i6").innerText = e.pageY;

        qs(".i7").innerText = e.screenX;
        qs(".i8").innerText = e.screenY;

        qs(".i71").innerText = e.offsetX;
        qs(".i82").innerText = e.offsetY;

        qs(".i9").innerText = e.clientX;
        qs(".i10").innerText = e.clientY;
    };

    // .inbox하위 .bird(벌새)위에서 마우스움직일때
    // 이벤트 버블링으로 offsetX,offsetY는 이벤트 대상의
    // 위치를 리턴하므로 벌새값이 .inbox이벤트찍기에 나타남!
    // .bird의 같은 이벤트를 버블링막기를 하면
    // 벌새위에서는 이벤트가 발생하지 않는다!(버블링되지 않는다!)

    // 이벤트버블링 막기를 할 수 있다~!
    // bird.onmousemove = (e)=>{
    //     e.stopPropagation();
    // }; /////// mousemove ///////

    // [3. 클릭된 박스요소의 크기,위치 찍어보기]
    for (let x of pnt) {
        x.onclick = () => {
            console.log("여기요!");
            /// 화면표시 ////
            qs(".i11").innerText = x.clientWidth;
            qs(".i12").innerText = x.clientHeight;

            qs(".i13").innerText = x.scrollWidth;
            qs(".i14").innerText = x.scrollHeight;

            qs(".i15").innerText = x.offsetWidth;
            qs(".i16").innerText = x.offsetHeight;

            qs(".i17").innerText = x.offsetTop;
            qs(".i18").innerText = x.offsetLeft;
        };
    } ////////// for of //////////////


}); //////////// 로드구역  ///////////////////////
/////////////////////////////////////////////////
