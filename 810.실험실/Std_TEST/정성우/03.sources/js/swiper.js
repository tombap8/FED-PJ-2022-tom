function swiper() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const control = $(".playcontrol");
    // 재생/멈춤변수
    let pause = 0;
    let swiper;
    swiper = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["0%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = ``;
            },
        },
    });
    control.on("click", function () {
        if (pause) {
            swiper.autoplay.resume();
            $(this).text("∥");
            pause = 0;
        } else {
            swiper.autoplay.pause();
            pause = 1;
            $(this).text("≫");
        }
    });
}

export default swiper;
