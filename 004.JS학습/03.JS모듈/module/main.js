// 모듈 연습 메인 JS - main.js

// DOM함수
import dFn from "./dom.js";
//-> from뒤의 파일명확장자 사용해야함!
//-> SPA 모듈 개발환경에서는 .js, .jsx 등 확장자 생략가능

// 텍스트 데이터
// import { mTitle, sTitle, personInfo, mvData } from './text_data.js';
// 별칭으로 받기 { 원래변수 as 별칭 }
// -> 별칭을 썼으면 별칭으롤 사용해야함!
import {
  mTitle as mTit,
  sTitle as sTit,
  personInfo as pInfo,
  mvData as mv,
} from "./text_data.js";

// 메시지 구성함수
import msgFn from './msg_format.js';
// import {message as msgFn} from './msg_format.js';
// default로 내보낸것은 {변수} 형식으로 받을 수 없다!

// import mTitle from "./text_data.js";
// import zzz from "./text_data.js";

// console.log(zzz("헐"));
// console.log(dFn);
// console.log(mTitle, sTitle, personInfo, mvData);
console.log(msgFn);

/*************************************************** 
    
    [ import 형식 ]
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭해야함!(없으면 안나옴!)
    (/,./,../ 표시필수)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

    ____________________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
***************************************************/

// 1. 대상선정 : 출력박스
// (1) 타이틀 출력박스
const titBox = dFn.qs('.tpart');
// (2) 내용출력박스
const contBox = dFn.qs('#demo');
// (3) 영화정보 출력박스
const mvBox = dFn.qs('.mvpart');

// 2. 변경 적용하기
// (1) 타이틀 출력하기 : 큰제목+작은제목
titBox.innerHTML = `
    <h2>${mTit}</h2>
    <h3>${sTit}</h3>
`;
// (2) 내용 넣기 : 이름과 나이를 소개하는 메시지 넣기
contBox.innerHTML = msgFn('공유',45);
contBox.innerHTML += msgFn('톰행크스',59);
contBox.innerHTML += msgFn('졸리',48);
// 이름과 나이가 셋팅된 배열데이터를 이용하여 출력하기
pInfo.forEach(val=>contBox.innerHTML+=msgFn(val[0],val[1]));

// (3) 영화정보 뿌리기
// ol>li 형식으로 .mvpart 박스에 영화정보를 구성함
// 데이터는 mv변수
mvBox.innerHTML = '<h2>♥ 영화위시리스트 ♥</h2>';
mv.forEach(val=>{
    mvBox.innerHTML += `
        <ol>
            <li>★제목 : ${val[0]}</li>
            <li>★장르 : ${val[1]}</li>
            <li>★감독 : ${val[2]}</li>
            <li>★주연 : ${val[3]}</li>
            <li>★한마디 : ${val[4]}</li>
        </ol>
    `;
});
