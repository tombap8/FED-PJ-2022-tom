// 메인 페이지 JS

// 자동스크롤 불러오기
import AutoScroll from "./jquery-autoScroll-class.js";
// import AutoScroll from "./jquery-autoScroll.js";

// 자동스크롤 인스턴스 생성
const autoSc = new AutoScroll();

// 기존 셋팅 속도값
console.log("기존속도:",autoSc.sc_speed);

// 스크롤 속도변경
autoSc.sc_speed = 1200;

console.log("변경속도:",autoSc.sc_speed);


console.log("기존이징:",autoSc.easing);
// 이징변경
autoSc.easing = "easeOutBounce";

console.log("변경이징:",autoSc.easing);
