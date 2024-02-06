// Smooth Scroll JS Verson 2020.12
// 부드러운 스크롤 2020.12 버전
// arranged by Tom Brace Parker

// startSS()함수를 호출하여 사용
function startSS() {
    new SmoothScroll(document, 50, 20)
    // SmoothScroll(스크롤대상, 스피드, 부드러운정도)
    // 1. 스크롤대상 : 스크롤바를 부드럽게 만들 대상
    // 2. 스피드 : 스크롤 델타값에 곱해서 처리하는 빠르기정도
    // -> 수치가 클수록 빠르다!
    // 3. 부드러운정도 : 스크롤 이동시 이동거리를 나누어서 부드럽게
    // 이동하게 하는 수치
    // -> 수치가 클수록 더 부드럽다!(나머지 이동이 더 많아짐)
}

// 전역변수 스크롤 위치값
let pos;
// 다른 코딩으로 스크롤 이동시 이 변수에 일치필요!!!

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body) // cross browser support for document scrolling

    var moving = false
    pos = target.scrollTop
    var frame = target === document.body &&
        document.documentElement ?
        document.documentElement :
        target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, {
        passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
        passive: false
    })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
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
    }()
}
