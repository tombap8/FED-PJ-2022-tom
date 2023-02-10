// 큐브트립 메인 JS ///////////////////////

/****************************************** 
    [ 구현 요구사항 ]
    - 도시별 메뉴버튼을 클릭시 해당도시의
    데이터를 큐브회전후 도시와 매칭하여
    정보를 화면에 출력한다!
******************************************/

// 로딩구역 /////////////////////////////
window.addEventListener("DOMContentLoaded",loadFn);

///// 로드함수 /////////////////////////////
function loadFn(){
    console.log("로딩완료!");

    // 1. 대상선정 
    // 1-1. 이벤트대상 : .city a
    const btns = document.querySelectorAll(".city a");

    // 1-2. 변경대상1 : .cube
    const cube = document.querySelector(".cube");

    // 1-3. 변경대상2 : .cbx
    const cbx = document.querySelector(".cbx");

    // console.log(cbx);

} ///////////// loadFn 함수 ///////////////////