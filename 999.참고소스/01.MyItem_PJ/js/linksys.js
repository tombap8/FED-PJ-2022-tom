// My Item - 링크설정 JS
// 로드구역 ////
window.addEventListener("DOMContentLoaded",function(){
    // 메뉴링크 대상선정: #top a
    var link = document.querySelectorAll("#top a");
    //console.log("메뉴개수:"+link.length);
    /// 링크 개수만큼 for문을 돌림
    for(var i=0;i<link.length;i++){
        link[i].onclick = setLink();
    }//// for문 ///////////////
    
    
    //// 로고클릭시 홈으로 ///
    $("#logo").click(function(){
        location.href = "index.html";
    });///////// click ////////////////
    ///////////////////////////////////
    
    
});/////////// 로드구역 /////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/*///////////////////////////////////////////////////
    함수명: setLink
    기능: 메뉴 링크 설정하기
*///////////////////////////////////////////////////
function setLink(){
    // 1.함수호출, 전달값확인
    //console.log("링크셋팅:");
    // 2. 링크설정 리턴함수 셋팅
    return function(){
        var txt = this.innerHTML;/*a링크의 텍스트*/
        //console.log("a링크의 텍스트:"+txt);
        
        //// 링크텍스트에 따라 이동페이지 넣기 ///
        switch(txt){
            case "Home": txt="index.html"; break;
            case "디바이스": txt="item.html?pno=1"; break;
            case "스마트폰": txt="item.html?pno=1"; break;
            case "태블릿PC": txt="item.html?pno=2"; break;
            case "노트북": txt="item.html?pno=3"; break;
            case "패션": txt="item.html?pno=4"; break;
            case "가방": txt="item.html?pno=4"; break;
            case "시계": txt="item.html?pno=5"; break;
            case "구두": txt="item.html?pno=6"; break;
            case "프로필": txt="profile.html"; break;
            case "회원가입": txt="member.html"; break;
            case "로그인": txt="login.html"; break;
            case "게시판": txt="board.html"; break;
            case "오시는길": txt="location.html"; break;
        }////// switch case문 /////////
        
        /// 페이지 이동하기 ///
        location.href = txt;
        
        
    };//// 리턴함수 /////////////////
    
}////////////// setLink함수 //////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////









