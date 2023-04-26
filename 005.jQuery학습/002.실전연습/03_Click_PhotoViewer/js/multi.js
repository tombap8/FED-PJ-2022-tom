// 무한이동 드래그&클릭형&멀티 배너 JS - multi.js

// 공통슬라이드 함수 import하기
import mySlider from "./mySlider.js";

// 함수호출!
// 현재슬라이드 3군데 모두 적용하기

// 제이쿼리 버전
$(".slider").each((idx,ele)=>{
    mySlider(ele);
}); ////////// each ////////////

// mySlider($(".slider").eq(0))
// mySlider($(".slider").eq(1))
// mySlider($(".slider").eq(2))

// JS버전
// document.querySelectorAll(".slider")
// .forEach((ele)=>{
//     mySlider(ele);
// });

// mySlider(document.querySelectorAll(".slider")[0])
// mySlider(document.querySelectorAll(".slider")[1])
// mySlider(document.querySelectorAll(".slider")[2])