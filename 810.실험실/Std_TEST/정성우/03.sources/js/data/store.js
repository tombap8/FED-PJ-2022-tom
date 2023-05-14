import poloShirts from "./men.js";
const store = new Vuex.Store({
    state:{
        men:{
            cat:"남성",
            polo: poloShirts
        },
        women:{
            cat:"여성"
        },
        kids:{
            cat:"키즈"
        },
        home:{
            cat:"홈"
        },
        // 이미지번호 전역화!
        imgnum:5,
    }
})

export default store;