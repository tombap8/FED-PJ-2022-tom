// 3D 태양계 JS - solar3d.js /////

window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    /**************************************** 
        [ 구현내용 ]
        - 축소확대 버튼 클릭시 표기된 배율만큼
        태양계전체를 축소/확대 적용한다!
        - 이때 클릭된 메뉴는 오버시 변경색을
        유지한다!
    ****************************************/

    // 1. 대상선정
   // 이벤트 대상: 축소확대 메뉴 a요소들 -> .tit a
    const menu = document.querySelectorAll(".tit a");
    // 변경 대상: 태양계 전체를 싸고 있는 부모요소 -> .scbx
    const scbx = document.querySelector(".scbx");

    //    console.log(menu,scbx);

    // 2. 이벤트함수 셋팅하기
    for(let x of menu){ // x는 각각의 a
        x.onclick = () => {
            // 1. 버튼 텍스트 읽기
            let btxt = x.innerText;

            // 2. 문자데이터 가공
            // 내용: "X 배율" -> "X "부분을 없앤다!
            // 문자대체 내장함수 -> replace(바꿀문자,바뀔문자)
            btxt = btxt.replace("X ","");

            console.log(btxt);

            // 3. 배율 적용하기
            // 변경대상: scbx변수
            scbx.style.transform = `scale(${btxt})`;

            // 4. 클릭된 메뉴에 클래스 "on"넣기
            // 4-1. 모두초기화
            menu.forEach(ele=>ele.classList.remove("on"));
            // 4-2. 해당메뉴 클래스넣기
            x.classList.add("on");

        }; //////// click ////////

    } ////////// for of //////////

}); //////////// 로드구역 //////////////////////
