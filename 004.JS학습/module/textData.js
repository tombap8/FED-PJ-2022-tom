// 데이터 처리하기 위한 JS - textData.js

// 1. 중제목 데이터
const mTitle = "모듈을 이용한 구현";

// 2. 소제목 데이터
const sTitle = "이것은 리액트의 기초입니다!";

// 3. 사람 데이터 : [이름,나이]
const personInfo = [
    ["준현",23],
    ["정희",33],
    ["성락",45],
    ["진경",22],
]; ///// 배열 /////////

// 4. 영화정보 데이터
const mvData = [
    [
        "조제",
        "멜로/로맨스, 드라마",
        "김종관",
        "한지민, 남주혁",
        "조제 보러 오세요",
    ],
    [
        "이웃사촌",
        "드라마, 코미디",
        "이환경",
        "정우, 김희원",
        "이웃을 사랑합시다",
    ],
    [
        "도굴",
        "범죄",
        "박정배",
        "이제훈, 조우진, 신혜선, 임원희",
        "도굴은 범죄예요",
    ],
    [
        "스파이더맨: 노 웨이 홈",
        "액션/어드벤처/SF",
        "존 왓츠",
        "톰 홀랜드, 젠데이아 콜먼",
        "닥스도 나오는 스파이더맨이양~!!!",
    ],
    [
        "브이 포 벤데타",
        "액션, 드라마, SF, 스릴러",
        "제임스 맥티그",
        "나탈리 포트만",
        "재개봉 흥해라!!!",
    ],
];


// 다중변수 전송 -> 중괄호사용, 콤마로 구분
export {mTitle,sTitle,personInfo,mvData};
/******************************************** 
    [ export 형식 ]

    1. export default 변수;
    -> 단일한 변수(함수)를 내보낼때 사용
    -> default 키워드 : 
        단 하나의 변수만 내보내는 형식을 제한!
        (특징)
        (1) 받는 곳(import)에서 받을때 변수명
        마음대로 사용가능함!
        (2) 보내는 곳에서도 변수없이 내보낼 수 있음

    2. export {변수,변수,변수};
    -> 여러개의 변수(함수)를 내보낼때 사용

********************************************/