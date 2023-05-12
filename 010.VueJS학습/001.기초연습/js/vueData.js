// 뷰JS 데이터 처리 JS - vueData.js

// 뷰엑스 스토어 불러오기
import store from "./vuedata-store.js";


// 컴포넌트 생성하기
Vue.component("my-comp",{
    template:`
        <div class="grid">
            <div v-for="(v,i) in $store.state.items.data">
                <img 
                v-bind:src="
                    './img_gallery/' +
                    v.idx +
                    '.jpg'
                " 
                alt="dress" />
                <aside>
                    <h2>{{v.gname}}</h2>
                    <h3>{{v.gprice}}</h3>
                </aside>
            </div>
        </div>
    `,
    data(){
        return{
            myt:"나야나야나!",
        }
    }

}); ////////// component //////////////

// 뷰인스턴스 생성하기
new Vue({
    el:"#app",
    store, // 뷰엑스 스토어 등록필수!
    data:{
        items: {}, // json데이터 담을 변수
        myt: "나야나!"
    },
    // 뷰인스턴스 생성직후(가상돔/돔 생성전)
    created(){
        // 엑시오스 사용하여 제이슨 데이터 가져오기
        // axios.get(제이슨파일).then(데이터=>담을변수=데이터)
        axios.get("./js/data.json")
        .then(x=>store.state.items = x);
        // 스토어의 items 전역변수에 셋팅함!
        console.log(store.state.items);

    }, //////// created /////////////
})