function common() {
    $(document).on("mouseenter", ".category", function () {
        // console.log($(this).find(".smenu").height())
        $(this)
            .find("div")
            .stop()
            .animate(
                {
                    height: $(".smenu", this).height() + 30 + "px",
                    backgroundColor: "#ffffffdd",
                },
                200
            );
        $(this).find("h2 a").css({
            color: "#000",
        });
    });
    $(document).on("mouseleave", ".category", function () {
        $(this).find("div").stop().animate(
            {
                height: "0",
                backgroundColor: "transparent",
            },
            200
        );
    });

    const topInner = $(".top .inner");
    topInner.on("mouseenter", function () {
        $(this).stop().animate(
            {
                backgroundColor: "#ffffffdd",
            },
            200
        );
        $(this).find("h2 a").css({
            color: "#000",
        });
        $(this).find(".logo a").css({
            backgroundImage: "url('./img/index/gnb_logo_b.svg')",
        });
    });
    topInner.on("mouseleave", function () {
        $(this).stop().animate(
            {
                backgroundColor: "transparent",
            },
            200
        );
        $(this).find("h2 a").css({
            color: "#fff",
        });
        $(this).find(".logo a").css({
            backgroundImage: "url('./img/index/gnb_logo_w.svg')",
        });
    });

    let scTop = 0;
    $(window).on("scroll", function () {
        scTop = $(this).scrollTop();
        if (scTop > 80) {
            topInner.stop().animate(
                {
                    backgroundColor: "#ffffffdd",
                },
                200
            );
            $(".category").find("h2 a").css({
                color: "#000",
            });
            topInner.find(".logo a").css({
                backgroundImage: "url('./img/index/gnb_logo_b.svg')",
            });
        } else {
            topInner.stop().animate(
                {
                    backgroundColor: "transparent",
                },
                200
            );
            $(".category").find("h2 a").css({
                color: "#fff",
            });
            topInner.find(".logo a").css({
                backgroundImage: "url('./img/index/gnb_logo_w.svg')",
            });
        }
    });
}

export default common;
