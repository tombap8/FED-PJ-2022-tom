/// JS함수 : 제이쿼리 코드를 실행하는 함수 ///
function initFn() {
  // 메인 이미지박스 투명하게
  $(".img-box").css({ opacity: 0 }).delay(1000).fadeTo(500, 1);
  // fadeTo(시간,오파,이징,함수) -> 투명도만 애니!
  // 상품리스트박스 숨기기
  $(".gwrap").hide().delay(1500).slideDown(1000);
} //////////// initFn 함수 ////////////////

// 처음에 한번만 실행하는 기능 JS함수 //////
function firstOneFn() {
  $(".tit").css({
    transform: "scale(2)",
    transition: "1s ease-out 1s",
  });
  setTimeout(() => {
    $(".tit").css({
      transform: "scale(1)",
      transition: "1s ease-out",
    });
  }, 2500);
} ////////////// firstOneFn 함수 ///////////


export {initFn,firstOneFn};
