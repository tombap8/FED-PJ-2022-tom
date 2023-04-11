// 보그 PJ 링크시스템 JS - linksys.js

// 제이쿼리 로드구역 /////////
$(()=>{

    /****************************************** 
        로그인, 회원가입, 갤러리 아이콘 넣기
    ******************************************/
   // 대상: .sns a:last (마지막 카카오스토리 a요소)
   // 대상추가 : .mosns a:last (모바일 카카오스토리 a요소)
   // 변경내용: 대상요소 앞에 형제요소로 a요소 삽입
   // 제이쿼리 메서드 : 
   // before(요소) -> 선택요소 앞에 형제요소 추가!
   // after(요소) -> 선택요소 뒤에 형제요소 추가!
   // 모바일 sns도 추가! .mosns a:last
   $(".sns a:last,.mosns a:last").before(`
        <a href="#" class="fi fi-laptop">
            <span class="ir"> 로그인 </span>
        </a>
        <a href="#" class="fi fi-user-secret">
            <span class="ir"> 회원가입 </span>
        </a>
        <a href="#" class="fi fi-camera">
            <span class="ir"> 갤러리 </span>
        </a>
   `); ///////////// before //////////

   // 모바일 sns 4번째 a요소 뒤에(after()메서드)
   // <br> 요소 넣기
   $(".mosns a").eq(3).after("<br>");

   /// sns 파트 a 요소들에 툴팁넣기 /////
   // each((idx,ele)=>{코드})
   $(".sns a").each((idx,ele)=>{
        // attr(속성명,값)
        // -> 값으로 자식요소인 .ir의 텍스트를 읽어감!
        let irTxt = $(ele).find(".ir").text().trim();
        // 툴팁넣기
        $(ele).attr("title",irTxt);

   }); /////// each ////////////////////
   


}); ////////////// jQB /////////////////////////






//////// 로딩구역 ///////////////////
window.addEventListener("DOMContentLoaded",linkFn);

//// 링크시스템 로드함수 ////////////////////////
function linkFn(){

    console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 : 
    // (1) GNB : .gnb a
    const gnb = document.querySelectorAll(".gnb a,.mognb a");
    // console.log(gnb);
    // (2) 로고 : .logo a
    const logo = document.querySelector(".logo a");

    // 2. 클릭이벤트 설정하기
    // (1) GNB 클릭설정 //////////
    for(let x of gnb){
        x.onclick = (e) => {
            // 클릭이동기능막기
            e.preventDefault();

            // (1) 클릭된 a요소 텍스트 읽기
            let atxt = x.innerText.toLowerCase().trim();
            // toLowerCase() -> 소문자변환
            // 참고) toUpperCase() -> 대문자변환
            // trim() -> 앞뒤공백제거

            console.log(atxt);

            // (2) 서브 페이지 이동하기
            if(atxt !== "search") // 검색이 아니면 서브이동!
            location.href = "category.html?cat="
            +encodeURIComponent(atxt);

        }; ///////// click ///////

    } /////////// for  of ///////////////

    // (2) 로고 클릭설정 //////////////
    logo.onclick = (e) => {
        e.preventDefault();

        // 홈으로 이동하기
        location.href = "index.html";

    }; ////////// click ///////////


} ////////// linkFn함수 //////////////