// 05. 중간스크롤가로이동 JS - dance.js

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => 
    ele.addEventListener(evt, fn),

    // 바운딩top값 리턴함수
    getBCR: ele => ele.getBoundingClientRect().top,
  }; /////// domFn 객체 /////////////

  // 1. 요구사항 : 3번 스테이지에 ul>li 구조의 이미지넣기

  // 2. 대상선정: .slidePg
  const slidePg = domFn.qs('.slidePg');

//   console.log('대상:',slidePg);

  // 3. 코드만들기
  let hcode = '';

  for(let i=1;i<=7;i++){
    hcode += `
        <li>
            <img src="./images/dance/${i}.jpg" alt="dance">
        </li>
    `;
  } /////// for /////////////

  hcode = `<ul>${hcode}</ul>`;

//   console.log('코드:',hcode);

  // 4. 대상요소에 코드넣기
  slidePg.innerHTML = hcode;

  /////////////////////////////////////////

  // [ 3번째 영역에 도달한 경우 내용을 가로방향 이동하기 ]

  // 이벤트 대상: window
  // 이벤트 종류: scroll
  // 위치대상: .tpg -> 스티키박스를 싸고있는 부모박스
  const tpg = domFn.qs('.tpg');
  // 움직일대상: .slidePg>ul
  const target = domFn.qs('.slidePg>ul');

  // 윈도우 이벤트 걸기
  domFn.addEvt(window,'scroll',moveSlide);

  function moveSlide(){
    // 스크롤 위치값 -> 불필요!
    // let scTop = window.scrollY;

    // 1. 스티키 부모박스 바운딩top값
    let bTop =  domFn.getBCR(tpg);
    // console.log('나야나!',bTop);

    // 2. 바운딩값으로  대상 left위치 변경하기
    // 움직일대상: 스티키박스 -> .slidePg>ul

    // (1) 윗쪽(0초과)일때 처음위치 재설정하기
    if(bTop > 0){
        target.style.left = '0px';
    }
    // (2) 움직이기시작은 바운딩값이 0이하일때부터!!!
    // 한계는 -3000px
    else if(bTop<=0 && bTop >= -3000){
        target.style.left = bTop + 'px';
    }
    // (3) 마지막 한계 이후엔 한계값으로 셋팅!
    else{
        target.style.left = '-3000px';
    }


  } //////////// moveSlide 함수 //////////////


  ///////////////////////////////////////////////
  // 추가 기능 : 메뉴에 오버시 움직이는 배경 구현하기

  // 1.대상선정
  // 이벤트 대상: .gnb li
  // 변경 대상: .mbg
  const gnbList = domFn.qsa('.gnb li');
  const mbg = domFn.qs('.mbg');
//   console.log('대상:',gnbList,mbg);

// 2.이벤트 설정하기
// 이벤트종류: mouseover / mouseout
gnbList.forEach(ele=>{
    domFn.addEvt(ele,'mouseover',overFn);
    domFn.addEvt(ele,'mouseout',outFn);
}); ///////// forEach ///////////////

// 3. 함수만들기 /////////////////////
function overFn(){
    console.log('오버:',this);
    // 1. 오버된 li의 left위치값 읽기
    let posL = this.offsetLeft;
    console.log('위치:',posL);
    // 2. 메뉴배경 보이기 + 움직이기
    mbg.style.opacity = 1;
    mbg.style.left = posL+'px';
} ///////// overFn 함수 ///////////
function outFn(){
    console.log('아웃:',this);
    // 메뉴배경 사라지기
    mbg.style.opacity = 0;
} ///////// outFn 함수 ///////////

