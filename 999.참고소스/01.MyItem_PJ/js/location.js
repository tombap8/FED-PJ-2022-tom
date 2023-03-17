/// 찾아오는길 페이지 JS - location.js ////

$(function () { // jQB /////////////////

    /// 지도메뉴클릭시 지도변경하기 ///
    $(".menu a").click(function (e) {

        // 기본기능막기
        e.preventDefault();

        var idx = $(this).index();
        // 클릭된 a요소의 형제순번
        console.log("메뉴:" + idx);

        // 각 지도도 .maps라는 이름으로 줌
        // 따라서 메뉴의 순번과 같음
        // 보여라! show()
        // 숨겨라! hide()
        // 다른형제들 siblings()
        // 몇번째 선택 eq(순번)
        $(".maps").eq(idx).show()
            .siblings().hide();

        // 메뉴 class변경하기
        // 클래스 넣기 addClass(클래스명)
        // 클래스 지우기 removeClass(클래스명)
        $(this).addClass("on")
            .siblings().removeClass("on");


        // 다음맵일때 로딩함수 호출!(처음호출한번만실행)
        if (idx === 2 && cacaoSts === 0) {
            cacaoSts = 1; //상태변경
            cacao();
        } ///// if ////////////


    }); ////// click //////////////

}); /// jQB //////////////////////////
/////////////////////////////////////


/*//////////////////////////
    함수명: cacao
    기능: 다음맵로딩
*/ ///////////////////////////
var cacaoSts = 0; //실행여부
function cacao() {

    new daum.roughmap.Lander({
        "timestamp": "1602122288959",
        "key": "22d59",
        "mapWidth": "700",
        "mapHeight": "400"
    }).render();


} //// 다음맵로딩 함수 //////
