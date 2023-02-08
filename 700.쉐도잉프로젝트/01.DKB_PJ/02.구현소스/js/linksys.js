// 도깨비 PJ 링크 시스템 JS - linksys.js

// 로딩구역 //////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    ////////////////////////////////////////////////
    // 링크 시스템 : 메뉴의 a요소 링크를 셋업한다! ////
    ////////////////////////////////////////////////

    // 대상: .top a -> 상단영역의 모든 a요소
    const link = document.querySelectorAll(".top a");
    // console.log(link);

    // 클릭 이벤트 함수 셋팅하기 ///
    for(let x of link){ // x는 각a요소

        x.onclick = () => {
            // 1. a요소의 글자데이터
            let atxt = x.innerText;
            console.log(atxt);

            // 주소할당변수
            let url;

            // 2. 링크 분기하기
            switch(atxt){
                case "인물관계도": url = "cat"; break;
                case "로그인": url = "login"; break;
                case "회원가입": url = "member"; break;
                default: url = "esc";
            } ///////// switch case문 /////

            // 3. 내용에 따른 처리
            if(url==="esc"){
                alert(`
                    공사중입니다~!^^
                `);
            } ///// if /////
            else{
                location.href = url+".html";
                /* 
                [ 페이지 이동하기 ]

                ((현재창열기))
                window.location.href = 이동할주소
                -> window는 주로 생략함
                location.href = 이동할주소

                ((새창열기))
                window.open()
                .location.href = 이동할주소

                -> window.open()은 원래 팝업창 띄우기임!
                */

            } ///// else //////



        }; //////// click 이벤트함수 ////

    } //////// for of문 //////////////







}); ///////////// 로드구역 ////////////////////