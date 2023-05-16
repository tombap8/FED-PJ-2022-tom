// 등장액션 대상: .showBx
const showBox = document.querySelectorAll(".showBox");
// 화면높이값 2/3 구하기
const screenH = window.innerHeight / 3 * 2;

// 등장액션 대상 위치값 리턴함수
const retVal = ele => ele.getBoundingClientRect().top;

// 클래스 넣기 함수
const showTit = x => {
  let xval = retVal(x);
  if (xval < screenH && xval > 0) {
    // 요소가 화면에 나타날 때 opacity를 1로 변경
    x.classList.add("on");
  }
};

window.addEventListener("scroll", () => {
  // 스크롤 등장요소 개수만큼 for문 돌리기
  for (let x of showBox) showTit(x);
});
