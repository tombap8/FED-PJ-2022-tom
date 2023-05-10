// 서브 페이지 뷰엑스 스토어 셋팅 JS  - store.js
const store = new Vuex.Store({
    state:{
        // 서브데이터 셋업
        subData: {
            "남성":{
                // 배너개수
                cnt:3,
                // 카테고리명
                cat:"men",
            },
            "여성":{
                // 배너개수
                cnt:3,
                // 카테고리명
                cat:"women",
            },
            "스타일":{
                // 배너개수
                cnt:5,
                // 카테고리명
                cat:"style",
            },
        },
        // 공통처리 배너개수 변수
        cnt: 3,
        // 공통처리 카테고리명 변수
        cat:"men",

    },
    // state 데이터 변경 메서드구역!
    mutations:{

    }
})