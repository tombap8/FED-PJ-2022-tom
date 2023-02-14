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
    
    [ 가로크기 ]
    - clientWidth : 패딩점퍼를 입고 있는 클라이언트님!
    padding을 포함한 폭
    - scrollWidth :  스크롤이 들어가니까 scroll!
    padding을 포함한 화면 상에 표시되지 않은 콘텐츠를 포함한 폭
    - offsetWidth : 보더,패딩,스크롤 다 들어가니 옵셋!
    border, padding, 스크롤 바를 포함한 폭
    
    [ 세로크기 ]
    - clientHeight : 
    padding을 포함한 높이
    - scrollHeight : 
    padding을 포함한 화면 상에 표시되지 않은 콘텐츠를 포함한 높이
    - offsetHeight : 
    border, padding, 스크롤 바를 포함한 높이
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
}); //////////// 로드구역  ///////////////////////
/////////////////////////////////////////////////
