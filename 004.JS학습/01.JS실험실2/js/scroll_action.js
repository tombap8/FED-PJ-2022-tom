// 스크롤 액션 JS - scroll_action.js

// DOM 함수 객체 //////////////
const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

  // 바운딩위치값함수
  getBCR: (ele) => ele.getBoundingClientRect().top,

  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
}; /////// domFn 객체 /////////////

// 부드러운 스크롤 호출
startSS();

/**************************************************** 
    [ 스크롤 이벤트를 활용한 요소 등장액션 기능구현하기 ]

  1. 사용 이벤트 : scroll
  -> 스크롤 바가 있는 페이지에서 또는 부분박스에서
  스크롤 바가 이동할때 발생하는 이벤트
  -> 주의: wheel 이벤트와는 다르다! 무엇이?
  스크롤바가 이동하지 않아도 마우스 휠이 작동될때 발생한다!
  (휠이벤트는 모바일에서 사용불가!)

  2. 스크롤바 위치값 알아내기 : 세로방향(Y축)
    (1) window.scrollY (IE6~11지원안함)
    (2) document.scrollingElement.scrollTop
    (3) document.documentElement.scrollTop
    (4) document.querySelector('html').scrollTop
    -> 가로방향 스크롤바는 Y대신 X라는 문자를 사용함!

  3. 스크롤 등장 대상요소의 보이는 화면에서의 top값
    getBoundingClientRect().top
    -> 보이는 화면상단을 기준으로 이것보다 위로 갈경우
    마이너스값을 리턴한다!
    -> 기준: 보이는 화면크기를 기준하면 된다!
    -> 윈도우화면 전체: window.innerHeight
    예) 화면의 3/2는 window.innerHeight/3*2
    예) 화면의 4/3는 window.innerHeight/4*3

  ****************************************************/

// 1. 대상선정:
// 스크롤 등장 대상: .hide-el
const scAct = domFn.qsa(".hide-el");
console.log("대상:", scAct);

// 2. 전체 window 에 스크롤 이벤트 셋팅하기
// 2-1.스크롤 등장액션 이벤트설정
domFn.addEvt(window, "scroll", showIt);
// 2-2.스크롤시 떨어지는 여자 이벤트 설정
domFn.addEvt(window, "scroll", moveWoman);
// 2-3.스크롤시 타이틀 이동애니 이벤트 설정
domFn.addEvt(window, "scroll", moveTit);

// 요소 위치값
// let pos1 = scAct[0].offsetTop;
// let pos2 = scAct[1].offsetTop;
// let pos3 = scAct[2].offsetTop;

// 각요소 옵셋top값 구하기
const posTop = [];

scAct.forEach((ele,idx)=>{
    posTop[idx] = domFn.getOT(ele);
}); /////// forEach ///////////////

console.log('각위치배열:',posTop);

// 3. 스크롤 등장 기준설정 : 화면의 3/4
const CRITERIA = (window.innerHeight / 4) * 3;

// 4. 스크롤 등장액션 함수 만들기
function showIt() {
  // 스크롤바 위치값(Y축) 읽어오기
  // let scTop = window.scrollY;
  // let scTop = document.scrollingElement.scrollTop;
  // let scTop = document.documentElement.scrollTop;
  // let scTop = document.querySelector('html').scrollTop;
  // console.log(scTop);

  // 스크롤 등장요소 위치값 찍기
  // console.log(pos1,'/',scTop);

  // 정해진 위치의 요소를 스크롤위치값으로 등장시키기
  // if(scTop > pos1-500) scAct[0].classList.add('on');
  // if(scTop > pos2-500) scAct[1].classList.add('on');
  // if(scTop > pos3-500) scAct[2].classList.add('on');

  // 요소의 바운딩 위치값 찍기
  for (let x of scAct) addOn(x);
} //////////// showIt 함수 ////////////

// 기준값을 검사후 클래스 넣는 함수 ///
function addOn(ele) {
  // ele-대상요소
  let bTop = domFn.getBCR(ele);
  // console.log('바운딩값:',bTop);

  // 기준값 보다 작을때 등장
  if (bTop < CRITERIA) ele.classList.add("on");
  // 기준값보다 크면 원상복귀(숨김)
  else ele.classList.remove("on");
} /////////// addOn 함수 ////////////

// 구현내용: 글자를 박스에 넣고 하나씩 날아오면서 등장
// 1.대상선정: .stage
const stage = domFn.qs(".stage");
// console.log(stage);

// 2.데이터 변수할당
const mytxt = "신카이 마코토";

// 3.데이터글자 한글자씩 태그싸기
// for of문사용!

let hcode = ""; // 코드저장변수
let idx = 0; // 순번변수

for (let x of mytxt) {
  // 띄어쓰기일 경우 특수문자처리!
  if (x === " ") hcode += "&nbsp";
  // 코드만들어 변수에 대입연산자로 넣기!
  else
    hcode += `<span style="transition-delay: ${idx * 0.1}s">
                    ${x}</span>`;

  // 순번변수증가
  idx++;
} //////////// for of ////////////

// console.log(hcode);

// 4. 스테이지 박스에 글자넣기
stage.innerHTML = hcode;

// 5. 일정시간후 스테이지박스에 클래스 "on"주고 애니작동!
setTimeout(() => {
  stage.classList.add("on");
}, 2000);

///// 스크롤 시 떨어지는 여자 함수 ///////////
// 원리: 전체 페이지 스크롤 이동한계값을 기준으로
// 비례식을 세워 보이는 화면에서의 떨녀의 위치를 정해줌

// 윈도우높이값
let winH = window.innerHeight;
// 문서전체 높이값
let docH = document.body.clientHeight;
// 스크롤 한계값 : 전체 document 높이 - 화면 높이
let scLimit = docH - winH;
console.log("스크롤한계값:", scLimit);
// 비례식 => 스크롤한계값 : 윈도우높이 = 스크롤이동값 : 이미지이동값
// 이미지이동값 = 윈도우높이 * 스크롤이동값 / 스크롤한계값

// 떨어지는 여자요소
const woman = domFn.qs("#woman");

function moveWoman() {
  // 1. 스크롤 위치값
  let scTop = window.scrollY;

  // 2. 떨녀 top값
  // 이미지이동값 = 윈도우높이 * 스크롤이동값 / 스크롤한계값
  let wTop = (winH * scTop) / scLimit;

//   console.log("난 떨녀!", wTop);

  // 3. 떨어지는 여자에 적용하기
  woman.style.top = wTop + "px";

  // 4. 맨위일때 윗쪽으로 숨기기
  if (scTop == 0) woman.style.top = "-20%";
} /////////// moveWoman ////////////


///////////////////////////////////////
/////// 타이틀 이동 애니 함수 ////////////
// 대상: .tit
const tit = domFn.qs('.tit');

function moveTit(){
    // 스크롤 위치값
    let scTop = window.scrollY;
    // console.log('타이틀이야!',scTop);

    // 1. 맨위 위치로 이동
    if(scTop < posTop[0]-winH/2){
        tit.style.top = '0';
        tit.style.left = '50%';
        tit.style.transition = '1s';
    }

    // 2. 첫번째 포스터 옆으로 이동
    if(scTop > posTop[0]-winH/2 && scTop < posTop[0]){
        tit.style.top = '50%';
        tit.style.left = '25%';
        tit.style.transition = '2s';
    }
    
    // 3. 두번째 포스터 옆으로 이동
    if(scTop > posTop[1]-winH/2 && scTop < posTop[1] ){
        tit.style.top = '70%';
        tit.style.left = '65%';
        tit.style.transition = '1s';
    }
    
    // 4. 세번째 포스터 옆으로 이동
    if(scTop > posTop[2]-winH/2 && scTop < posTop[2]){
        tit.style.top = '50%';
        tit.style.left = '25%';
        tit.style.transition = '.5s';
    }

} //////////// moveTit 함수 /////////////
