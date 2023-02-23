// 보그 PJ 메인페이지 JS - main.js

/////// 로딩구역 //////////////////////
window.addEventListener("DOMContentLoaded",()=>{

    /************************ 
        리턴함수 셋팅구역
    *************************/
   // 1. 요소선택 함수 : querySelectorAll()함수
   const q = x => {
        // (1) 리턴할요소변수 : rv (return value)
        let rv = document.querySelectorAll(x);

        // (2) 요소개수체크
        let cnt = rv.length;
        cg(cnt+"개");

        // (3) 1개일 경우 첫번째만 선택해서 리턴함
        if(cnt===1) rv = rv[0];

        // (4) 결과리턴하기
        return rv;

   }; /////////// q함수 ///////////

   // 2. 콘솔출력 함수
   const cg = x => console.log(x);

   // ***********************************

   /********************************** 
        스크롤 등장액션 기능구현하기
   **********************************/
  // 대상: .scAct
  const scAct = q(".scAct");

    

}); /////////////// 로딩구역 ////////////////////