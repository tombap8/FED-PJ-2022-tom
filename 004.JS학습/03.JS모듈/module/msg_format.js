// 구체적인 데이터 구성처리를 위한 JS - msg_format.js

// 내용 메시지 구성 함수 ///
// 이름없이 바로 내보낼 수 도 있음!
// export default (name,age) => `
const message = (name,age) => `
    나의 이름은 ${name}입니다.
    나이는 ${age}살입니다. 반갑습니다!!!^^<br>
`;

// 내보내기
export default message;