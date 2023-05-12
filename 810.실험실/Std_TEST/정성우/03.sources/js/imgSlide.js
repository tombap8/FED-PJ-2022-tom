function imgSlide() {
    let slideImg = $(".img_slide li");
    slideImg.each(function (idx, ele) {
        $(ele).css({
            left: 30 * idx + "px",
            top: 30 * idx + "px",
            zIndex: -idx + 3,
        });
    });

    let slideImgBx = $(".img_slide");

    slideImgBx.find("li").on("click", function () {
        if ($(this).index() === 0) {
            $(this).animate(
                {
                    top: "-50px",
                    left: "-50px",
                    opacity: "0",
                },
                400,
                () => {
                    $(this).parent().append($(this));
                    slideImg = $(".img_slide li");
                    slideImg
                        .each(function (idx, ele) {
                            $(ele).animate(
                                {
                                    left: 30 * idx + "px",
                                    top: 30 * idx + "px",
                                    zIndex: -idx + 3,
                                },
                                200
                            );
                        })
                        .last()
                        .animate({
                            opacity: "1",
                        });
                }
            );
        } else return;
    });
}

export default imgSlide;
