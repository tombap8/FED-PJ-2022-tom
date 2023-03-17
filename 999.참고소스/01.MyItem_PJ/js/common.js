// My Item 공통 JS ////

/// jQB ///////////////////////////////////
$(function () {
    // 로고 애니메이션 class 넣기
    // 이미 만들어진 애니메이션을 class넣기하여 작동시킨다
    // 5초간격으로 class 넣기, 지우기
    // 애니메이션 대상: #rball, #cam, #tt
    
    setInterval(function () {

        // 클래스지우기
        $("#rball,#cam,#tt").removeClass();

        // class 삭제 후 조금의 시간차가 필요!
        // setTimeout()

        setTimeout(function () {
            //1.빨간공애니
            $("#rball").addClass("rball");
            //2.카멜레온
            $("#cam").addClass("cam");
            //3.혀날름
            $("#tt").addClass("tt");
        }, 100); //// setTimeout ////////

    }, 5000);




}); ///////// jQB ///////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
