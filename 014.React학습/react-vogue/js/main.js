// 보그 PJ 메인 페이지 JS - main.js

import dFn from "./dom.js";


// [1] 메인 페이지 등장액션 클래스 넣기
// 대상: .main-area section
const hideBox = $('.main-area section');
// const hideBox = dFn.qsa('.main-area section');

// 첫번째 박스 빼고 모두 숨김클래스 넣기
// 제이쿼리 사용코드 : each((idx,ele)=>{코드})
hideBox.each((idx,ele)=>{
    if(idx!=0) $(ele).addClass('scAct');
}); /////////// each //////////////


// JS용 오리니널 코드 ///////
// hideBox.forEach((ele,idx)=>{
//     if(idx!=0) ele.classList.add('scAct');
// }); ////////// forEach ///////////

/////////////////////////////////////////
// 제이쿼리 라이브러리 사용하여 구현해보자! ///

// 1. 스크롤 등장액션 구현하기 /////
// 대상: window
// 이벤트: scroll
// 기준값 사용: getBoundingClientRect() -> dFn.getBCR()
// console.log(dFn);
// 등장액션 대상: .main-area section
// 기준값: 윈도우높이값의 3/2지점
let winH = $(window).height()/3*2;
console.log('윈도우 높이값:',winH);

$(window).scroll(()=>{    
    // 등장액션 클래스 적용하기 //////
    hideBox.each((idx,ele)=>{
        if(idx!=0){
            let val = dFn.getBCR(ele);
            // console.log(
            //     `대상요소 getBCR top값[${idx}]:`,
            //     dFn.getBCR(ele));
            if(val < winH) $(ele).addClass('on');

        } /////// if /////
    }); //////// each ///////

}); ///////// scroll /////////////

