// 버튼클릭시 상단이동
const mTopBtn = document.querySelector(".scrollTop");

    mTopBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });

// 상단이동시 숨기기/보이기
window.addEventListener("scroll", ()=>{
    let scVal = Math.ceil(window.scrollY);
    if(scVal === 0) {
        mTopBtn.style.opacity = 0;
    } else {
        mTopBtn.style.opacity = 1;
    }
});

// GNB 기본 기능 막기
$('.header_top_gnb > ul > li > a, .header_top_personal_menu > ul > li > a').click(function(e){
    e.preventDefault();
});