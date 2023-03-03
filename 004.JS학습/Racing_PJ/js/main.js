// Racing PJ 메인 JS - main.js

//////// 전역변수구역 /////////////////////
let rabbit, turtle, msg; //토끼,거북,메시지
let rbpos = 0; //토끼의 위치값(left)
let ttpos = 0; //거북의 위치값(left)
let autoI; //인터발함수용
let level; //게임레벨용
let ttsts = 0; //거북동작상태(0-허용,1-불허용)
//////////////////////////////////////////

//////////////// 로드구역 /////////////////////////
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩완료!");
}); /////////// 로드구역 ///////////////////////////
