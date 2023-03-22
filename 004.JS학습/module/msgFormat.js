// 구체적인 데이터 구성처리를 위한 JS - msgFormat.js

// 내용 메시지 구성 함수 ///
const message = (name,age) => `
    나의 이름은 ${name}입니다.
    나이는 ${age}살입니다. 반갑습니다!!!^^<br>
`;

// 단일한 함수 내보내기!
// export default message;

export {message};
// 만약 import에서 별칭을 쓰고 싶다면 default로 내보낼 수 없다!
// default를 빼고 중괄호{}로 묶어서 내보내면 별칭사용가능!
// 이 문법은 default를 사용해서 이름을 변경못하도록 이름을 특화시키는
// 문법으로 볼 수 있다!
