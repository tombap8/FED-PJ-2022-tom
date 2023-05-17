// 전체 리스트 페이지 JS - glist.js


// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 전체리스트 태그 데이터 가져오기
import comData from "./tempData/data-glist.js";
// 신상정보
import sinsang from "./gdsData/sinsang.js";

// 뷰엑스 스토어 JS 가져오기
// 중요! 반드시 메인JS파일 한군데서 불러와 써야 상태관리됨!
// -> 이 JS파일에 Vue 인스턴스 생성코드가 같이 있어야한다!
import store from "./store.js";