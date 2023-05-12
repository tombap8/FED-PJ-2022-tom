// 뷰JS 데이터처리 뷰엑스 스토어 JS - vuedata-store.js

// 제이슨 데이터 처리위해 제이슨 불러오기!
/* 
    import jsnData from "./goods.json";
    일반 JS호출과 같은 방식으로 제이슨 파일을 호출하면
    아래와 같은 MIME 전송형식 type에러가 발생함!
    ____________________________________________________
    "Failed to load module script: Expected a JavaScript
     module script but the server responded with a MIME type
      of "application/json". Strict MIME type checking is 
      enforced for module scripts per HTML spec."
      ____________________________________________

      ((해결방법!))
      import 변수 from 제이슨파일경로 assert{type:"json"}

      assert{type:"json"} -> import시 형식을 지정해주는 객체!
      이것으로 제이슨 형식을 맞춰서 전송타입 오류를 없앤다!!!
*/
import jsnData from "./goods.json" assert{type:"json"};



const store = new Vuex.Store({
    // (1) 데이터 셋팅구역 :
    state:{
        items: {}, // 제이슨 데이터 담을 변수

    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역 : 
    // 호출시 commit()사용!
    mutations:{

        // 제이슨 데이터 속성변수 업데이트 하기
        setData(st,pm){ // st - state변수, pm - 전달변수
            // state구역의 items변수에 제이슨 데이터 담기!
            st.items = pm;
            console.log("뮤테:",pm);
        }, ///////// setData /////////////////
        
    },
    // (3) 백엔관련 코딩 비동기처리 메서드 구역 : 
    // 호출시 dispatch()사용
    actions:{
        // 제이슨 데이터 로드하기 메서드
        initData(){ 
        // initData({commit}){ 
            // 액션스 메서드 전달값으로 {commit}을 쓰면
            //  뮤테이션 구역으로 바로 commit사용가능!
            // 제이슨 데이터 변수에 할당!
            const result = jsnData;
            console.log("액션:",result);

            // state의 items변수변경 메서드호출
            // 뮤테이션스의 메서드 호출은? 
            // -> commit('메서드',전달값)
            this.commit('setData',result);
            // commit('setData',result);


        }, ///////// initData /////////
        
    }
}); /////////// 뷰엑스 인스턴스 ////////


// 내보내기 
export default store;