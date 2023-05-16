const totNum = document.querySelector(".total-page-num");
const cNum = document.querySelector(".current-page-num");
const proItem = document.querySelectorAll(".recent-view-prod-list > ul > li");
const delItem = document.querySelectorAll(".delete-item");
const arr = [];

// 전체요소갯수 구하는 코드
proItem.forEach((ele)=>arr.push(proItem));
let arrLength = arr.length;
totNum.innerText = arrLength;

// 현재페이지번호 구하는 코드
let currentPage = 1;

document.querySelector(".next").addEventListener("click",()=>{
    if(currentPage < arrLength) // 배열값 이하일때만 증가 처리
    currentPage++;
    cNum.innerText = currentPage;
});

document.querySelector(".prev").addEventListener("click",()=>{
    if(currentPage > 1) // 페이지 번호가 1보다 크면 감소 처리
    currentPage--;
    cNum.innerText = currentPage;
});

// 삭제버튼에 이벤트핸들러 등록
delItem.forEach((ele)=>{
    ele.addEventListener("click",removeItem);
})

function removeItem(){
    const listItem = this.parentNode;
    listItem.parentNode.removeChild(listItem); 

    arrLength--; // 전체요소갯수 감소
    totNum.innerText = arrLength; // 감소된 값으로 갱신
}