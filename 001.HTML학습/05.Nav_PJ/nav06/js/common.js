// 네비게이션 유형6 : 공통 JS - common.js ///

/////// 로드구역 /////////////////////
window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩후 실행함수
******************************************/
function loadFn() {
    console.log("로딩완료!");

    /************************************ 
        GNB메뉴 객체 데이터를 이용한
        HTML태그 만들어 넣기!
    ************************************/
    // 1.대상선정: .gnb
    const gnb = document.querySelector(".gnb");
    //    console.log(gnb);

    // 2. 변수 셋팅: html코드 담을 변수
    let hcode = "";

    // 3. 코드의 구조화 생성하기
    hcode += `<ul>`;
    // 1. 상위메뉴 반복코드 생성
    // mdata객체를 가져와서 반복시킴 -> for in문!
    // console.log(mdata);

    for (let tm in mdata) {
        // tm은 mdata의 속성명

        hcode += `
            <li>
                <a href="#">${tm}</a>
                <div class="smenu">
                    <!-- 하위메뉴 구조랩핑박스 .smbx -->
                    <aside class="smbx">
                        <h2>
                            <div class="stit">${tm}</div>
                            <a href="#">전체보기 ＞</a>
                        </h2>
                        <div class="swrap">
               `;

        // 2. 하위메뉴 반복코드
        // -> 객체데이터 이므로 for in문 사용!
        // -> mdata[tm] -> mdata[속성명] -> 속성값!
        // -> 속성값은 서브메뉴이고 객체로 구성됨!
        for (let sm in mdata[tm]) {
            // sm - 속성명(하위메뉴)
            hcode += `<dl>
                        <dt>
                            <a href="#">${sm}</a>
                        </dt>`;

            // 3. 서브메뉴(최하위메뉴) 반복코드
            // -> 서브메뉴는 배열이므로 for of사용!
            for (let sub of mdata[tm][sm]) {
                hcode += `<dd>
                            <a href="#">${sub}</a>
                        </dd>`;
            } ////////// for of ///////////

            hcode += `</dl>`;
        } //////////// for in문 /////////

        hcode += `
                        </div>
                    </aside>
                </div>
            </li>
        `;
    } ///////// for in문 //////////////////////

    hcode += "</ul>";

    // 4. GNB 박스에 출력하기
    gnb.innerHTML = hcode;

    /****************************************** 
        GNB 메뉴 오버시 서브메뉴 보이기
        _____________________________

        [기능정의]
        상위메뉴 li에 오버서 하위메뉴 .smenu
        박스의 내부 데이터만큼 height값이 생기며
        opcity 투명도가 1로 변경되는 트랜지션수행
        아웃시 원상복귀함!
    ******************************************/

    // 1. 대상선정
    // 이벤트 대상: .gnb>ul>li
    const list = document.querySelectorAll(".gnb>ul>li");
    // 이벤트 종류: mouseenter / mouseleave
    // 변경 대상1: .smenu
    // 변경 내용1: height값, opacity값
    

    // console.log(bgbx);

    // 2 하위메뉴 + 메뉴배경 style변경함수 만들기
    // ele - 변경요소, hv - 높이값, opa - 투명도값
    const stFn = (ele,hv,opa) => {
        ele.style.height = hv + "px";
        ele.style.opacity = opa;
    }; ///// stFn ///////

    // 3. 상위메뉴 li에 이벤트 설정하기 //////////
    for (let x of list) {
        // (1) 마우스 오버시 /////////
        x.onmouseenter = () => {
            // (1) 하위메뉴 박스 .smenu 선택하기
            let tg = x.querySelector(".smenu");

            // (2) 하위메뉴 박스 내부박스 높이값 구하기
            let hv = tg.querySelector(".smbx").clientHeight;
            // console.log("내부높이:",hv);

            // (3) 스타일 변경요소 함수호출
            // stFn(요소,높이값,투명도)
            stFn(tg,hv,1);
        }; /////// mouseenter ///////////

        // (2) 마우스 아웃시 /////////
        x.onmouseleave = () => {
            // (1) 하위메뉴 박스 .smenu 선택하기
            let tg = x.querySelector(".smenu");

            // (2) 스타일 변경요소 함수호출
            // stFn(요소,높이값,투명도)
            stFn(tg,"0",0);
        }; /////// mouseleave ///////////
        
    } /////////// for of //////////////
} ///////////// loadFn 함수 ////////////////
