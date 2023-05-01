// 메인 페이지 배너기능 JS - ban.js

function banFn() {
    // 공통전역변수 ///////////////////
    // [1] 애니시간/광클금지시간
    const ani_time = 700;
    // [2] 이징
    const ani_easing = "easeOutQuint";

    /*********************************************** 
    [ 터치 배너 기능구현하기 ]
    1. 원리: 제이쿼리 UI를 이용하여 X축으로만
    드래그가 되도록 설정후 위치값을 체크하여
    드래그가 끝난시점에 자동위치이동 애니메이션
    처리해 준다!

    2. 대상: .slide

    3. 기준
    (1) 왼쪽방향이동 : 
        기준값(-100%) 보다 -10% 작은경우(-110%)
    (2) 오른쪽방향이동 : 
        기준값(-100%) 보다 10% 큰경우(-90%)
    (3) 제자리이동
        양쪽기준값 사이일때(-110%~-90%)

    4. 구현시 주의사항
    -> %단위는 모두 px단위로 변환하여 구현한다!
    -> 배너크기가 윈도우가로크기와 같다! 이것을 활용함!


***********************************************/

    // 1.대상선정
    const slide = $(".slide");

    // 2. 드래그 설정
    slide.draggable({
        axis: "x", // x축고정
    }); ////// 드래그설정 ////

    // 윈도크기리턴함수
    const reWin = () => $(window).width();
    // 리사이즈 업데이트
    $(window).resize(() => {
        winW = reWin();
        // // console.log("winW:",winW);
    });

    // 3. 드래그가 끝난후 -> dragstop 이벤트 발생후!
    // 기준위치 체크후 이동애니메이션

    // 윈도우 가로크기 : left 기준위치 px변환!
    let winW = reWin();
    // // console.log("winW*0.9:",winW*0.9);
    // // console.log("winW:",winW);
    // // console.log("winW*1.1:",winW*1.1);

    // 광드래그 방지위해 커버셋팅(show()/hide())
    const cover = $(".cover");

    //////////////////////////////////
    // 드래그끝난후 이벤트 함수 만들기 //
    //////////////////////////////////

    slide.on("dragstop", function () {
        // 광드래그 방지위해 커버 보이기
        cover.show();

        // 슬라이드 left위치값
        let sleft = $(this).offset().left;
        // // console.log("허허",sleft);

        // 1. 왼쪽으로 이동 : -110% 미만일때
        if (sleft < -winW * 1.1) {
            // 배너이동함수 호출
            goSlide(0);
        } ///// if : 왼쪽이동 /////////

        // 2. 오른쪽으로 이동 : -90% 초과일때
        else if (sleft > -winW * 0.9) {
            // 배너이동함수 호출
            goSlide(1);
        } ///// else if : 오른쪽이동 /////////

        // 3. 제자리로 이동 : -110% ~ -90%
        else {
            slide.animate(
                {
                    left: -winW + "px",
                },
                200,
                ani_easing,
                () => {
                    // 커버제거하기
                    cover.hide();
                }
            );
        } ///// else if : 오른쪽이동 /////////
    }); //////////// slide ///////////

    /************************************************* 
    함수명: goSlide
    기능: 왼쪽, 오른쪽 배너 이동하기
    구분: 0-왼쪽, 1-오른쪽 (dir 파라미터변수)
*************************************************/
    function goSlide(dir) {
        // dir - 전달변수
        console.log("방향:", dir);

        // 분기하기
        // 오른쪽이동 //////////////
        if (dir) {
            slide.animate(
                {
                    left: "0px",
                },
                ani_time,
                ani_easing,
                () => {
                    // 이동후 맨뒤li 맨앞으로 이동하기
                    slide.prepend(slide.find("li").last()).css({ left: "-100%" });
                    // 커버제거하기
                    cover.hide();

                    // 배너타이틀함수
                    showTit();
                }
            ); ////////// animate ///////////

            // 블릿변경함수호출!
            addOn(0);
            // 오른쪽이동이므로 0번째 슬라이드
        } /////////// if ///////////
        // 왼쪽이동 //////////////////
        else {
            slide.animate(
                {
                    left: -winW * 2 + "px",
                },
                ani_time,
                ani_easing,
                () => {
                    // 이동후 맨앞li 맨뒤이동
                    slide.append(slide.find("li").first()).css({ left: "-100%" });

                    // 커버제거하기
                    cover.hide();

                    // 배너타이틀함수
                    showTit();
                }
            ); ////////// animate ///////////

            // 블릿변경함수호출!
            addOn(2);
            // 왼쪽이동이므로 2번째 슬라이드
        } /////////// else /////////////
    } //////////////// goSlide함수 ///////////////////

    /*************************************************** 
    [ 터치배너 이동시 블릿변경하기 ]
    - 방법: 잘라서 이동되는 li에 고유순번을 
    사용자정의 속성으로 처음에 설정후
    - 슬라이드 이동하면 그 속성값을 읽어서
    블릿순번에 반영한다!
***************************************************/
    // 사용자 정의 순번속성 대상: .slide li
    // 제이쿼리: for문 순회 메서드 each()
    // 배너 li
    const blist = slide.find("li");
    // 배너 li개수
    const bcnt = blist.length;

    blist.each((idx, ele) => {
        // // console.log(idx,bcnt);
        // 처음것을 마지막 순번으로 넣기
        if (idx === 0) $(ele).attr("data-seq", bcnt - 1);
        // 두번째 부터 끝까지 0부터(1작음!)
        else $(ele).attr("data-seq", idx - 1);
    }); ///////// each ///////////////

    /************************************ 
    [ 블릿 on 넣기 함수 ]
    1) 오른쪽으로 이동일경우
    -> 0번째 슬라이드의 data-seq값
    2) 왼쪽으로 이동일경우
    -> 2번째 슬라이드의 data-seq값
    3) 위의 선택값으로 블릿의
    li순번에 on넣고 나머지는 뺀다!
************************************/
    // 대상선정: .bindic li
    const bindic = $(".bindic li");

    function addOn(seq) {
        // seq - 읽을 슬라이드 순번
        // 방향을 어떻게 알지?
        // 0은 오르쪽이동, 2는 왼쪽이동임!

        // 1.해당슬라이드 data-seq읽어오기
        let dseq = slide.find("li").eq(seq).attr("data-seq");
        // // console.log(dseq);

        // 2. 해당슬라이드와 동일한 순번블릿에 on넣기
        bindic.eq(dseq).addClass("on").siblings().removeClass("on");
    } ///////// addOn 함수 /////////////

    ///////////////////////////////////////
    ////// 각 배너 등장 타이틀 셋팅 /////////
    ///////////////////////////////////////
    let bantxt = {
        ban1: "Men's Season<br>Collection",
        ban2: "2023 Special<br>Collection",
        ban3: "GongYoo<br>Collection",
        ban4: "T-Shirt<br>Collection",
        ban5: "Shoes<br>Collection",
        ban6: "Wind Jacket<br>Collection",
    }; ///////////// bantxt객체 //////////////

    /*************************************** 
    함수명: showTit
    기능: 각 배너 타이틀 보이기
    호출: 배너이동후 콜백함수에서 호출함!
***************************************/
    function showTit() {
        // 요구사항: 배너이동후 호출하여
        // 해당배너의 순번에 맞는 타이틀을
        // 동적으로 생성하여 애니메이션 한다!

        // 주인공배너
        const mainban = slide.find("li").eq(1);

        // 1. 항상 도착후엔 두번째 슬라이드가 주인공이다!
        // 슬라이드 순번은 1번!
        // 슬라이드 클래스명 읽어오기(타이틀이 클래스명과 연관됨!)
        let clsnm = mainban.attr("class");

        // 2. 클래스명에 해당하는 객체값 읽어오기
        let bantit = bantxt[clsnm];

        // 호출확인
        // console.log("배너타이틀!",clsnm,bantit);

        // 모든 추가 타이틀 지우기
        $(".btit").remove();

        // 3. 타이틀을 넣을 요소를 배너에 추가한다!
        mainban.append(`<h2 class="btit"></h2>`);

        // 타이틀 left위치 변수처리
        // ban2, ban3만 오른쪽위치
        let lval = "30%";
        if (clsnm === "ban2" || clsnm === "ban3") lval = "70%";

        // 4. 해당배너 h2태그에 배너 타이틀 넣기
        mainban
            .find(".btit")
            .html(bantit)
            .css({
                position: "absolute",
                top: "55%", // 약간아래
                left: lval,
                transform: "translate(-50%,-50%)",
                font: "bold 4.5vmax Verdana",
                color: "#fff",
                textShadow: "1px 1px 3px #777",
                whiteSpace: "nowrap",
                opacity: 0, // 처음에 투명
            }) //////////// css /////////////////
            .animate(
                {
                    // 등장애니메이션~!!!
                    top: "50%",
                    opacity: 1,
                },
                1000,
                "easeInOutQuart"
            );
    } /////////////// showTit 함수 /////////////////

    // 첫번째 배너를 위한 타이틀 함수 최초호출!
    setTimeout(showTit, 1000);

    // 타임아웃변수
    let banAgain;

    // 자동넘김 지우기 함수
    const clearAuto = () => {
        clearInterval(banAuto);
        clearTimeout(banAgain);
        banAgain = setTimeout(banAutoSlide, 5000);
        // console.log("클리어!!!")
    }; /////////// clearAuto 함수 //////////

    // 배너이동시 자동넘김 지우기 셋팅 /////
    slide.on("drag dragstart dragstop", clearAuto);

    // 자동넘김 인터발 셋팅하기 /////////
    // 변수에 담아 정지하기 ////
    let banAuto;

    const banAutoSlide = () => {
        banAuto = setInterval(() => {
            // 배너이동함수 호출
            goSlide(0);
        }, 3000);
    }; /////////// banAutoSlide 함수 ///////

    // 자동넘김 최초호출!
    banAutoSlide();

    ////////////////////////////////////
    // 마우스 팔로워 플러그인 적용하기 ///
    // 움직일 대상: .btna
    // 설정범위는 움직일 대상이 포함된 부모요소

    $(".btna").mousefollower();
    // 주의사항!
    // mousefollower() 메서드를 적용하는 것은
    // 마우스 따라다닐 범위 요소를 선택하는 것이다!
    // 그 안에 .badge 라는 것이 실제로 따라다닌다!
    // 클래스명 badge를 이 플러그인의 설정에 따라
    // 반드시 사용해야 한다!

    $(".btna").hover(
        function () {
            // over

            // 흰원 나타나기
            $(".inside", this).css({
                transform: "scale(1)",
            }); //// css ////////////

            // 글자 나타나기
            $(".btntit", this).css({
                transform: "translate(-50%, -50%) scale(1)",
            });
        },
        function () {
            // out

            // 흰원 사라지기
            $(".inside", this).css({
                transform: "scale(0)",
            }); //// css ////////////

            // 글자 사라지기
            $(".btntit", this).css({
                transform: "translate(-50%, -50%) scale(0)",
            });
        }
    ); ///// hover ///////////

    // 광클금지변수
    let prot = 0;
    /***************************************** 
    배너이동 버튼 클릭시 배너이동하기 
*****************************************/
    // 대상: .btntit
    $(".btntit").click(function () {
        // 0. 광클금지 ///////
        if (prot) return;
        prot = 1;
        setTimeout(() => (prot = 0), ani_time);

        // 1. 자동넘김 지우기 함수 호출!
        clearAuto();

        // 2. 버튼 구분하기
        let isB = $(this).parent().is(".ar1");
        console.log("왼쪽버튼?", isB);

        // 3. 분기하기
        // 왼쪽으로 이동 ///////
        if (isB) {
            // 배너이동함수 호출
            goSlide(1);
        } ///// if ///////////
        // 오른쪽으로 이동 /////
        else {
            // 배너이동함수 호출
            goSlide(0);
        } ///// else ///////////
    }); //////////////// click ///////////////
} /////////// banFn 함수 /////////////////

// 함수내보내기 //////
export default banFn;
