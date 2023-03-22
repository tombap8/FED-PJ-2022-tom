// 모듈 연습 메인 JS - main.js

// 로딩구역 없이...=> script 태그에 defer 속성사용 하거나
// type="module" 사용할 경우 로딩구역 없어도 요소 등 가져올 수 있음!

// 모듈화 JS파일 import 하기!
// import { mTitle, sTitle } from "./textData.js";

// 별칭사용하기
import { mTitle as mTit, sTitle as sTit } from "./textData.js";

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

_________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
***************************************************/

// 1. 타이틀 출력박스
const tpart = document.querySelector(".tpart");

// 2. 내용출력박스
const demo = document.querySelector("#demo");

console.log(tpart, demo);

// 3. 제목넣기
tpart.innerHTML = `
    <h2>${mTit}</h2>
    <h3>${sTit}</h3>
`;
