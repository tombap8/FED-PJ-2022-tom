// 회전제어 JS - cube2.js //////////////

/************************************* 
    [구현내용]
    - 마우스휠 이벤트에 따라 기본기능은
    막고 큐브를 회전하는 속성인 transform의
    rotateY(각도)의 값변경을 이용한
    큐브 회전을 적용함!
    - 대상: window
    - 사용이벤트 : wheel
    - 단위각도 : 360도 / 9개 = 40도
    - CSS 이징적용 : ease-out

*************************************/

// DOM 함수 객체 //////////////
import domFn from './dom.js';

// 데이터 제이슨 /////
import mvData from './data_moving.json' assert{type:"json"};

console.log(mvData);

  // 0. 변수셋팅
  // 단위각도
  const DEG = 40;
  // 광휠상태변수(0-허용,1-금지)
  let stsWheel = 0;
  // 휠제어시간
  const TIME_WHEEL = 120;
  // 휠단위수(휠할때 증감하는수)
  let numWheel = 0;
  // 캐릭터 고유번호수
  let catNum = 0;
  // 캐릭터 한계수(9개니까 8)
  const LIMIT_CNT = 8;
  let autoT;
  const infoBox = domFn.qs('.cat-info');

  // 1. 대상선정 : .cube
  const cube = domFn.qs('.cube');
  console.log('대상:',cube);

  /// 2. 이벤트 설정하기 
  domFn.addEvt(window,'wheel',rotateMem);

  // 3. 함수만들기 ///////
  function rotateMem(){

    // 0. 휠이벤트 발생수 조절하기(광휠금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금!
    setTimeout(()=>stsWheel=0,TIME_WHEEL); //해제

    // 1. 휠방향 알아내기 : 휠델타
    let delta = event.wheelDelta;

    
    // 2. 방향에 따른 휠단위수 증감하기
    if(delta<0){
        // 휠단위수 감소
        numWheel--;
        // 캐릭터고유번호 증가
        catNum++;
        if(catNum>LIMIT_CNT)catNum=0;
    }
    else{
        // 휠단위수 증가
        numWheel++;
        // 캐릭터고유번호 감소
        catNum--;
        if(catNum<0)catNum=LIMIT_CNT;
    }

    // 호출확인
    console.log('휠!~~~~',delta,numWheel,catNum);

    // 3. 회전대상요소에 각도 적용하기
    // 적용각도 = 단위각도 * 휠단위수
    cube.style.transform = 
    `rotateY(${numWheel*DEG}deg)`;

    /////////////////
    infoBox.innerHTML = '';
    infoBox.classList.remove('on');

    clearTimeout(autoT);

    autoT = 
    setTimeout(showInfo,500);

  } //////////// rotateMem 함수 ///////////


function showInfo(){
    infoBox.innerHTML = `
        <h2>${mvData[catNum].name}</h2>
        <p>${mvData[catNum].desc}</p>
    `;
    infoBox.classList.add('on');
}