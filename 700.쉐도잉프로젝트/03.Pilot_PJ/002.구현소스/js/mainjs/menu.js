// 메뉴관련 기능 JS - menu.js

function menuFn() {
    // 햄버거 버튼 클릭시 전체 메뉴 보이기
    $(".ham").click(function () {
        // 햄버거 버튼 클래스변경(토글)
        $(this).toggleClass("on");
        // 전체메뉴보이기
        $(".mbox").fadeToggle(400);

        // 햄버거 버튼에 클래스 on이 있으면 재생/ 없으면 정지
        let isOn = $(this).is(".on");
        // // console.log(isOn);

        // 배경동영상 재생/멈춤
        if (isOn) $(".bgm").get(0).play();
        else $(".bgm").get(0).pause();
        /// audio,video 요소 선택시 get(순번)
        // 을 사용하는 것은 같은 이름의 클래스를
        // 사용할 경우 순서대로 요소를 담는다!
    }); //////////// click ///////////////
} ///////// menuFn함수 ////////////////

/// 메뉴함수 내보내기 /////
export default menuFn;
