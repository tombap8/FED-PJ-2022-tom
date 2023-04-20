// 프로그레스 페이지 JS - progress.js

$(() => {
    ///////////// jQB //////////////////////////

    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1. 버튼 : .act button
    const abtn = $(".act button");
    // 1-2. 퍼센트원 : .btns
    const btns = $(".btns");
    // 1-3. 진행바 : .lbar
    const bar = $(".lbar");

    // 2. 이벤트 설정
    // 2-1. 첫번째버튼(팽수1) - 퍼센트원
    // one(이벤트명,함수) -> 이벤트를 한번만 적용함!
    abtn.first().one("click",() => {
        progFn(0, 80);
        progFn(1, 75);
        progFn(2, 96);
        progFn(3, 54);
    }); /////// click /////////

    // 2-2. 두번째버튼(팽수2) - 진행바
    abtn.last().one("click",()=>{
        
        // 바텍스트
        const btxt = bar.prev().find("b");

        // 숫자변수
        let num = 0;

        const progBar = () => {
            num++;
            // 퍼센트 수치증가
            btxt.text(num);
            // 바width증가
            bar.css({width:num+"%"});


            // 재귀호출 ////////
            setTimeout(()=>{
                if(num<100){
                    progBar();
                } //// if /////
                else{
                    console.log("음악틀어~~~!!");
                    // 이미 페이지에 삽입된 오디오요소를
                    // 재생시킨다!
                    // 비디오/오디오 재생메서드 : play()
                    // 비디오/오디오 멈춤메서드 : pause()
                    // 비디오/오디오 요소는 제이쿼리에 get()메서드
                    // 를 사용하여 선택함 -> get(0) 또는 [0]
                    $("#myaud").get(0).play();
                    // $("#myaud")[0].play(); -> 위와동일함!
                    // console.log($("#myaud").get());
                } //// else //////
            },40); ///// setTimeout ///
        }; //////// progBar //////

        progBar(); // 호출




    }); ////////// click /////////


    /****************************************** 
        함수명: progFn    
        기능: 퍼센트 증가에 따른 숫자,그래프변경
    ******************************************/
    function progFn(seq, pers) {
        //seq - 버튼순번 / pers - 설정%값

        // 해당순번의 숫자요소
        let ptxt = btns.eq(seq).find(".ptxt");
        // 퍼센트 증가
        // 개별숫자 텍스트 읽어오기
        let num = ptxt.text(); // 문자형숫자
        num++; // 문자형숫자는 숫자형으로 자동변환됨!
        // 개별숫자 반영하기
        ptxt.text(num);

        // 300% -> 0%
        // 300을 최대수로 볼때 100분율로 변경하면
        // 최대수 * 적용할%/100 = 적용결과%
        // 예) 100만원*0.2 = 20%

        // 계산하기
        let calc = (300 * (100 - num)) / 100;
        // 계산법: 전체옵션값 X (100%-현재%)/100
        // 100%-현재% 로 계산한 이유는 300에서부터
        // 숫자가 거꾸로 0까지 작아져야 하므로 반대로뺌

        // 첫번째 퍼센트원 진행하기
        btns.eq(seq)
            .find("circle")
            .css({
                strokeDashoffset: calc + "%",
            });

        // 재귀호출하기! : 기준수보다 작을때까지
        // 기준수의 숫자가 원하는 %가 된다!
        if (num < pers) {
            setTimeout(() => {
                progFn(seq, pers);
            }, 40);
        } ///////// if ///////////
    } ///////////// progFn 함수 ////////////////
}); ///////////////// jQB //////////////////////////
