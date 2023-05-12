function hrScroll() {
    const tpg = document.querySelector(".vt_wrap");
    const spg = document.querySelector(".hr_wrap");

    const mvbx = spg.querySelector("ul");

    function retVal(x) {
        return x.getBoundingClientRect().top;
    }
    window.addEventListener("scroll", movePage);

    function movePage() {
        let tgpos = retVal(tpg);

        if (tgpos <= 0 && tgpos >= -2200) {
            mvbx.style.left = tgpos + "px";
        } else if (tgpos > 0) {
            mvbx.style.left = "0";
        }
    }
}

export default hrScroll;
