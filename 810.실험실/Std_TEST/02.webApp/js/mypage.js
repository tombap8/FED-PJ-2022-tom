const myBtn = document.querySelector(".mypage_btn");
const myPageBx = document.querySelector(".mypage_wrap");

myBtn.addEventListener("mouseover",() => {
    myPageBx.style.visibility = "visible";
});

myBtn.addEventListener("mouseleave",() => {
    myPageBx.style.visibility = "hidden";
});
