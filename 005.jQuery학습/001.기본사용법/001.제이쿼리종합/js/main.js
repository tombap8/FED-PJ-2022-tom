// 미니언즈 좀비 탈출 애니 구현 JS - main.js
$(() => {
    /////////// jQB ///////////////////

    // 로딩확인
    console.log("로딩완료!");

    /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

    // 0. 주인공들 변수에 할당!
    // (1) 미니언즈
    const mi = $(".mi");

    // (2) 건물 li
    const bd = $(".building li");

    // (3) 버튼들
    const btns = $(".btns button");

    // (4) 메시지박스
    const msg = $(".msg");

    // (5) 좀비, 주사기 요소 변수처리
    let mz1 = `<img src="./images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="./images/mz2.png" alt="좀비2" class="mz">`;
    let zom = `<img src="./images/zom.png" alt="좀비들" class="mz">`;
    let inj = `<img src="./images/inj.png" alt="주사기" class="inj">`;

    // console.log(mi,bd,btns,msg);

    // 1. 건물 각 방에 번호넣기 + 좀비/주사기 넣기
    // 대상: .building li ->  bd변수
    // 사용제이쿼리 메서드:
    // (1) each((순서,요소)=>{}) : 요소의 개수만큼 순서대로 돌아줌!
    // (2) append(요소) : 요소내부에 자식요소 추가(이동)

    bd.each((idx, ele) => {
        // console.log(idx,ele);
        // 1. 각 방에 숫자로 순번넣기
        $(ele).text(idx);

        // 2. 좀비/주사기 넣기
        switch (idx) {
            case 9:
                $(ele).append(mz1);
                break;
            case 7:
                $(ele).append(mz2);
                break;
            case 1:
                $(ele).append(zom);
                break;
            case 2:
                $(ele).append(inj);
                break;
        } ////// switch case //////
    }); /////////// each ///////////
    // 좀비는 모두 숨기기
    $(".mz").hide();
    // 시간없는 hide()는 display:none처리함!

    // 2. 버튼셋팅하기 ////////////////
    // 대상: .btns buttons -> btns변수
    // btns.hide().first().show();
    btns.hide().eq(5).show();

    // 3. 공통함수 : actMini() /////////
    // 전달변수 3개
    // (1) ele - 클릭된 버튼요소
    // (2) seq - 이동할 li방순번
    // (3) fn - 이동후 실행할 코드(콜백함수)
    const actMini = (ele, seq, fn) => {
        // 1. 클릭된 버튼 사라지기
        $(ele).slideUp(300);

        // 2. 메시지 없애기 : .msg -> msg변수
        msg.fadeOut(300);

        // 3. 위치값 알아내기
        // 위치: li 몇번방 -> bd변수에 있는 모든 li 중 몇번
        let room = bd.eq(seq);
        // 위치값 배열변수
        let pos = [];

        // top위치값
        pos[0] = room.offset().top;
        // left위치값 : 방에서 중앙이동(+li가로크기절반-미니언즈가로크기절반)
        pos[1] = room.offset().left + room.width() / 2 - mi.width() / 2;

        // 제이쿼리 위치값 정보 메서드 : offset() -> 하위속성:top,left
        // 제이쿼리 가로,세로 크기정보 메서드 : width(), height()

        console.log(room, pos);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수
        mi.animate(
            {
                top: pos[0] + "px",
                left: pos[1] + "px",
            },
            800,
            "easeOutElastic",
            fn // -> 전달된 콜백함수
        ); ////// animate /////
    }; ////////// actMini함수 //////////

    // 4. "들어가기" 버튼 클릭시
    btns.first()
        .click(function () {
            // 이동후 콜백함수 //////
            let fn = () => {
                // 콜백함수
                // 메시지 넣고 나타나기
                msg.html("와~!아늑하다!<br>옆방으로 가보자!").fadeIn(300);

                // 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // this키워드 -> 화살표함수를 사용하여 싸고있는
                // 요소인 클릭된 버튼을 가리킴!
                console.log(this);
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : this는 클릭된 버튼
            actMini(this, 8, fn);
        }) ///// "들어가기" 버튼끝 ////

        /// 5. "옆방으로" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 좀비 나타나기(2초후)
                bd.eq(9)
                    .find(".mz")
                    .delay(2000)
                    .fadeIn(400, () => {
                        // 콜백함수

                        // 메시지 넣고 나타나기
                        msg.html("악!;;;좀비!<br>어서피하자!").css({ left: "-144%" }).fadeIn(300);

                        // 다음버튼 보이기
                        $(this).next().delay(500).slideDown(300);
                        // this키워드 -> 화살표함수를 사용하여 싸고있는
                        // 요소인 클릭된 버튼을 가리킴!
                    }); ///// fadeIn ////////////
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : this는 클릭된 버튼
            actMini(this, 9, fn);
        }) ///// "옆방으로" 버튼끝 ///////

        /// 6. "윗층으로 도망가!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 메시지 보이기
                msg.html(`여긴없겠지?`).fadeIn(300);

                // 좀비 보이기
                bd.eq(7).find(".mz")
                .delay(1000).fadeIn(400,
                    ()=>{ // 좀비등장 후 메시지와 버튼
                        // 메시지 변경하기
                        msg.html(`악, 여기도!!!`);
                        
                        // 다음버튼 보이기
                        $(this).next().delay(500).slideDown(300);

                }); ////// fadeIn //////

            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 7번방으로!
            actMini(this, 7, fn);
        }) ///// "윗층으로 도망가!" 버튼끝 ///////

        /// 7. "다시옆방으로!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 첫번째 메시지
                msg.html(`여긴없겠지?`)
                .fadeIn(200)
                .delay(1000) // 1초지연(애니앞에만 적용됨)
                .fadeIn(200,()=>{
                    // 두번째 메시지
                    msg.html(`그래도 무서우니<br>윗층으로 가자!`);
                    // 다음버튼 보이기
                    $(this).next().delay(500).slideDown(300);
                }); ///// fadeIn /////
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 6번방으로!
            actMini(this, 6, fn);
        }) ///// "다시옆방으로!" 버튼끝 ///////

        /// 8. "무서우니 윗층으로!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 무.서.워...  메시지
                msg.html(`무`)
                .fadeIn(200)
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서.`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서.워`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서.워.`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서.워..`))
                .delay(500)
                .fadeIn(200,()=>msg.html(`무.서.워...`))
                .delay(500)
                .fadeIn(200,()=>{
                    // 7번방 좀비가 올라와서
                    // 달겨든다!
                    bd.eq(7)
                    .find(".mz")
                    .animate({ // 윗층으로 올라옴
                        bottom: bd.eq(7).height()+"px"
                        // li높이값 만큼 bottom을 올려준다!
                    },500,"easeOutElastic")
                    .delay(500) // 기다림
                    .animate({
                        // 달겨들기
                        right: bd.eq(7).width()*1.2+"px"
                    },1000,"easeOutBounce",()=>{
                        // 물린후 대사
                        msg.css({left:"-106%"})
                        .html(`아~악! 물렸다!<br>어서 치료주사방으로!`)

                        // 미니언즈 좀비 이미지 변경(1초후)
                        setTimeout(() => {
                            mi.find("img")
                            .attr("src","images/mz1.png")
                            .css({filter:"grayscale(100%)"});
                            // 흑백변경: 필터(그레이스케일)

                            // 다음버튼 보이기
                            $(this).next().delay(500).slideDown(300);

                        }, 1000);

                    })
                })
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 4번방으로!
            actMini(this, 4, fn);
        }) ///// "무서우니 윗층으로!" 버튼끝 ///////

        /// 9. "치료주사방으로!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수
                
                // 주사기돌기(animate는 트랜스폼 적용안됨!)
                $(".inj").css({
                    transform:"rotate(-150deg)",//반시계방향회전
                    transition:".5s .5s", // 0.5초후 0.5초간 애니
                    zIndex:"9999", // 미니언즈 보다 위
                }); //////// css //////

                // 미니언즈 다시 태어나다!(1초후)
                setTimeout(() => {
                    // 이미지변경
                    mi.find("img")
                    .attr("src","images/m2.png")
                    .css({filter:"grayscale(0)"}); // 다시컬러!

                    // 대사
                    msg.html(`이제 조금만 더<br>가면 탈출이닷!`)
                    .fadeIn(200);

                    // 주사기 없애기
                    $(".inj").hide();
                    
                    // 다음버튼 보이기
                    $(this).next().delay(500).slideDown(300);
                }, 1000);

            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 2번방으로!
            actMini(this, 2, fn);
        }) ///// "치료주사방으로!" 버튼끝 ///////

        /// 10. "3번방으로!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 메시지 보이기
                msg.html(`어서 윗층으로 가자!`).fadeIn(300);

                // 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 3번방으로!
            actMini(this, 3, fn);
        }) ///// "3번방으로!" 버튼끝 ///////

        /// 11. "1번방으로!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수
                
                // 메시지 보이기
                msg.html(`이제 곧 탈출이닷!`).fadeIn(300);

                // 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 1번방으로!
            actMini(this, 1, fn);
        }) ///// "1번방으로!" 버튼끝 ///////

        /// 12. "헬기를 호출!" 버튼 클릭시 ///
        .next()
        .click(function () {
            let fn = () => {
                // 콜백함수

                // 메시지 보이기
                msg.html(`도와줘요!!!`).fadeIn(300);

                // 1번방 단체좀비들 달겨들기!
                bd.eq(1)
                .find(".mz")
                .fadeIn(300)
                .animate({
                    right: bd.eq(1).width() + "px"
                },3000,"easeInExpo");

                // 헬기등장
                $(".heli")
                .animate({
                    left: "20%" // 미니언즈 위치까지 이동
                },4000,"easeOutBack",
                function(){ // 헬기이동완료 후
                    // 헬기 이미지변경(this->.heli)
                    $(this).attr("src","images/heli2.png");
                    // 원본 미니언즈는 사라짐!
                    mi.hide();
                })
                .delay(500) // 0.5초 쉬었다가
                .animate({
                    left: "70%" // 다시 오른쪽 끝으로 이동
                },4000,"easeInOutCirc",
                function(){ // 애니후 실행함수
                    // 끝쪽에서 조정사 좀비로!
                    $(this).attr("src","images/heli3.png")
                })
                .delay(300) 
                .animate({
                    left: "100%" // 아주 천천히 바깥으로 나감!
                },10000,"linear",
                ()=>{ // 헬기나간후
                    // 간판떨어뜨리기

                    // 건물 무너뜨리기

                })

                
            }; ///////////// fn함수 /////////

            // 공통함수 호출! : 0번방으로!
            actMini(this, 0, fn);
        }) ///// "헬기를 호출!" 버튼끝 ///////
}); /////////////// jQB ////////////////////
