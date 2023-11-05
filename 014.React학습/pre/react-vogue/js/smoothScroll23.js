// Smooth Scroll JS Verson 2020.12
// 부드러운 스크롤 2023.09.19 버전 : 모듈화
// arranged by Tom Brace Parker

// startSS()함수를 호출하여 사용
function startSS() {
  new SmoothScroll(document, 30, 22);
}

// 전역변수 스크롤 위치값
let pos;
// 다른 코딩으로 스크롤 이동시 이 변수에 일치필요!!!

// 전역변수 pos를 셋팅하는 함수(외부에서 이것사용!)
function setPos(val) {
  // val - 위치값 전달변수
  pos = val;
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  var moving = false;
  pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("mousewheel", scrolled, {
    passive: false,
  });
  target.addEventListener("DOMMouseScroll", scrolled, {
    passive: false,
  });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      // Opera
      else return -e.detail / 3; // Firefox
    } else return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

// 내보내기 : 시작함수 + 위치값변경함수
export { startSS, setPos };
