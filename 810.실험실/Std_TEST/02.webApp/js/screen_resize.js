function handleResize() {
    const winW = window.innerWidth;
    const slides = document.querySelectorAll(".swiper li");
    
        if(winW <= 1100) {
            slides.forEach((slide,idx) => {
                const slimage = slide.querySelector("a > img");
                slimage.src = `./00.data/02.imgData/main_cont1_ban/mo_ban_${idx+1}.jpg`
            });
        }
        else {
            slides.forEach((slide,idx) => {
                const slimage = slide.querySelector("a > img");
                slimage.src = `./00.data/02.imgData/main_cont1_ban/ban_${idx+1}.jpg`
            });
        }
}

window.addEventListener("resize", handleResize);