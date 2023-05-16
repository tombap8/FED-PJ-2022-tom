// 검색/닫기버튼 클릭시 검색창 숨기기/보이기
const close_btn = document.querySelector(".search-close-btn > a");
const searchBx = document.querySelector(".search-input-wrap");
const search_btn = document.querySelector(".search-btn");

close_btn.addEventListener("click",()=>{
    searchBx.style.display = "none";
});

search_btn.addEventListener("click",()=>{
    searchBx.style.display = "block";
});