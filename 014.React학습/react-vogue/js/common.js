// 보그 PJ - 공통 모듈 JS : common.js

// DOM 메서드
import dFn from './dom.js';

// 상단,하단 공통 데이터 불러오기
import tData from './data/com_module.js';

// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";


// [1] 상단/하단 공통 모듈 넣기 ////////

// 대상선정: .common-area
const comArea = dFn.qsa('.common-area');

// console.log(tData,comArea);

// 상단영역 html 넣기
comArea[0].innerHTML = tData.topArea;
// 하단영역 html 넣기
comArea[1].innerHTML = tData.footerArea;

// 모바일 메뉴버튼 요소 추가로 넣기 : .top-area 맨끝추가
comArea[0].innerHTML += tData.mobtn;
// 모바일 메뉴 박스 추가로 넣기 : #top-area 맨끝추가
comArea[0].parentElement.innerHTML += tData.mobx;



// [2] 부드러운 스크롤 적용 //////////
startSS();

// [3] 탑메뉴, 탑버튼 스크롤시 변경 적용하기 /////

// 스크롤 메뉴 적용대상: #top-area
const topArea = $('#top-area');

// 탑버튼 : .tbtn
const tbtn = $('.tbtn');

$(window).scroll(()=>{
    // 세로방향 스크롤 위치값
    let scTop = $(window).scrollTop();
    // console.log('스크롤~~~~!',scTop);

    // 1.스크롤 위치값이 100을 초과하면 
    //  슬림 상단 클래스넣기
    if(scTop>100) topArea.addClass('on');
    else topArea.removeClass('on');

    // 2. 맨위로 이동버튼 300초과시 보이고
    //     300미만일때 숨기기
    // 대상: .tbtn
    if(scTop>300) tbtn.addClass('on');
    else tbtn.removeClass('on');  
}); ///////// scroll /////////////

// 맨위로 버튼 클릭시 맨위로 가기 //
// 부드러운 스크롤 사용하므로 그쪽함수를 이용함!
tbtn.click((e)=>{
    // 1.a요소 기본이동막기
    e.preventDefault();
    // 2.부드러운 스크롤 위치값 변경(0으로)
    setPos(0);
    console.log('나클릭!');
}); /////////// click //////////

/////////////////////////////////////////////////////
//// 모바일 버튼 클릭시 메뉴박스/검색박스 보이기/숨기기//
/////////////////////////////////////////////////////
// 대상: .hbtn(햄버거버튼) / .sbtn(검색버튼)
// 요구사항: 햄버거 버튼은 #mobx 보이기/숨기기
//          검색버튼은 .mos 보이기/숨기기
// 제이쿼리 메서드 : click(), slideToggle()
$('.hbtn').click(()=>$('#mobx').slideToggle(300));
$('.sbtn').click(()=>$('.mos').slideToggle(300));

// 토글이라는 말은 두가지를 전환하는 버튼을 말함
// 제이쿼리에 있는 토글 메서드:
// toggle() -> show() / hide() 전환
// slideToggle() -> slideDown() / slideUp() 전환
// fadeToggle() -> fadeIn() / fadeOut() 전환
