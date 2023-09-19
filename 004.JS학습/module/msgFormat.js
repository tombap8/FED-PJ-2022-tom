// 구체적인 데이터 구성처리를 위한 JS - msgFormat.js

// 내용 메시지 구성 함수 ///
const message = (name,age) => `
    나의 이름은 ${name}입니다.
    나이는 ${age}살입니다. 반갑습니다!!!^^<br>
`;

// 단일한 함수 내보내기!
// export default message;
// default를 사용한 내보내기일 경우
// 받는 곳에서 변수명은 맘대로 사용가능함!!!

export {message};
// {} 중괄호 문법으로 내보내면 별칭은 as를 사용함
