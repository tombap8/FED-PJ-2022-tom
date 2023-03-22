// 모듈 연습 메인 JS - main.js

// 로딩구역 없이...=> script 태그에 defer 속성사용 하거나
// type="module" 사용할 경우 로딩구역 없어도 요소 등 가져올 수 있음!

/*************************************************** 
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

console.log(tpart,demo);

// 3. 제목넣기
tpart.innerHTML = `
    <h2>ㅎㅎㅎㅎ</h2>
    <h3>ㅋㅋㅋㅋ</h3>
`;

