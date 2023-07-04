// 브라우저 다운로드 사이트 메인 JS - main.js 

$(function () { /// jQB //////////////////

    /// 인트로 셋팅! ///////////////////

    // 1. 인트로용 가림막(마우스 오버방지)만들기
    $("body").append("<div id='icv'></div>");
    $("#icv").css({
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        zIndex: "999999999"
    }); /////// css ////////////

    // 2. 인트로 셋팅: 1초후 flex와 transition을 적용한다!
    // 효과: 1초후 5개의 등분할 영역으로 애니메이션 등장함!
    // 대상: .wrap>ul>li
    setTimeout(function () {
        $(".wrap>ul>li").css({
            flex: "1",
            transition: "all 1.2s ease-in-out"
        }); ////// css ///////////////////
    }, 1000); /// setTimeout /////////////
    
    // 3. 인트로 등장 총 시간 후 커버 없애기, 초기화하기
    // 총시간: 1000+1200=2200 (2.2초)
    setTimeout(function(){
        
        // 1.커버없애기
        $("#icv").remove();
        
        // 2. .wrap에 class "on"제거하기
        $(".wrap").removeClass("on");
        
        // 3. 인라인으로 li에 삽입한 style제거하기 
        $(".wrap>ul>li").attr("style","");
        
        
    },2200); /// setTimeout ///////////////




    // 햄버거 버튼 클릭시 메뉴 들어오기
    $("#ham").click(function () {

        // 햄버거버튼(자기자신) 숨기기
        $(this).hide();

        // 메뉴 들어오기
        $(".gnb").animate({
            left: "0"
        }, 500, "easeInOutCubic");

        // 컨텐츠박스+상단박스(.stg) 오른쪽이동하기!
        $(".stg").animate({
            left: "300px"
        }, 500, "easeInOutCubic");

        // 메뉴 리스트 순서대로 들어오기
        // 대상: .gnb li 
        // 구현: li가 왼쪽에 나가있고 순서대로
        //      애니메이션 하여 원위치함
        //      이때 delay시간을 순서대로 증가시킴
        // 사용메서드: each()
        $(".gnb li").each(function (idx, ele) {
            // idx-요소순번, ele-요소자신
            //console.log(idx);
            // 애니전 delay시간은 
            // 0,100,200,300...순으로 셋팅됨!
            $(ele).delay(100 * idx)
                .animate({
                    left: "0"
                }, 600, "easeOutQuint");
            ///////// animate /////////

        }); //////// each ///////////////////

        /// 전체 영역 덮는 커버 넣기
        $("body").append('<div class="cvbx"></div>');

        // 암전커버
        let cvbx = $(".cvbx");

        // 커버셋팅
        cvbx.css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            opacity: ".2",
            zIndex: "9999" // 상단영역보다 위
        }); //////// css //////////

        //// 닫기 버튼 이미지 넣기 ////
        $("body").append(
            '<img src="images/OB/close_.png" alt="닫기버튼" id="cbtn">');

        // 닫기버튼
        let cbtn = $("#cbtn");

        // 닫기버튼 css ///
        cbtn.css({
            position: "absolute",
            display: "none", //처음에 안보임!
            zIndex: "9999999" // 가장위!
        }); /////// css //////////

        /// 커버영역 위에 올라가면 닫기버튼 이미지 보이기 ///
        cvbx.hover(
                function () { /// over
                    cbtn.show(); //닫기버튼 보이기
                    $(this).css({ // 커버박스에서만 적용!
                        cursor: "none" //커서숨기기
                    }); //// css /////
                },
                function () { /// out
                    cbtn.hide(); //닫기버튼 숨기기
                })
            //////// hover /////////////////

            /// 위에서 이어짐(.cvbx)
            /// 커버영역 위에서 마우스가 움직일때 닫기버튼 따라다니기 //
            .mousemove(function (e) { // e-이벤트전달변수
                // e.pageX, e.pageY 화면에서의 커서위치값!

                let posx = e.pageX + 5;
                let posy = e.pageY + 5;
                // 5를 더한 이유는 닫기이미지가 
                // 커서아래에 오지 않게하여
                // .cvbx에 오버시 깜박거리는 현상을 없앤다!

                cbtn.css({
                    top: posy + "px",
                    left: posx + "px"
                }); ///// css ////////

            }) ///// mousemove ///////////////

            // 커버영역을 클릭하면 원상복귀!!!
            .click(function () {

                // 1.GNB메뉴 원상복귀(복귀후 하위 li들 복귀)
                $(".gnb").animate({
                    left: "-300px"
                }, 500, "easeInOutCubic", function () {

                    // 초기화방법 중 style시트 인라인코드 지우기!
                    $("li", this).attr("style", "");
                }); //////// animate //////////////


                // 2.컨텐츠영역+탑영역(.stg) 원상복귀
                $(".stg").animate({
                    left: "0px"
                }, 500, "easeInOutCubic");

                // 3.커버영역 서서히 사라지기(사라진후 제거!)
                $(this).fadeOut(500, function () {
                    $(this).remove();
                }); ///////// fadeOut ////////////

                // 4.닫기이미지 삭제하기
                cbtn.remove();

                // 5.햄버거버튼 복귀
                $("#ham").show();


            }); //////////// 커버영역 click ///////////


    }); /////// 햄버거 버튼 click /////////////////



}); ////////// jQB //////////////////////
