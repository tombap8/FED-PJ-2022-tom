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
        }
    }
})

export default store;