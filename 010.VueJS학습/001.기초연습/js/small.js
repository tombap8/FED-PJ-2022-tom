// 쇼핑몰 갤러리 JS - small.js

// 뷰JS 인스턴스 생성용 함수!
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣을 전역컴포넌트 만들기

Vue.component("tit-comp", {
    template: `
                <strong>
                    <span>👩‍🦰다이아나 쇼핑몰💕</span><br>
                    👗Diana Shopping Mall🥻
                </strong>
            `,
}); ///// 전역 컴포넌트 1 ///////

// 뷰인스턴스 생성하기 : 반드시 컴포넌트 아래에서 함!
makeVue(".tit");

// new Vue({
//     el:".tit"
// })
// new Vue({
//     el:".tit2"
// })

// 숫자증감 변수
let num = 0;

// 2. 갤러리 리스트에 넣을 전역컴포넌트 만들기
// 여기가 자식입니다!!!
Vue.component("list-comp", {
    //  v-on:click="goPapa" 로 부모이벤트 접근시작!
    template: `
            <div>
                <img v-bind:src="gsrc" v-on:click="goPapa" v-on:mouseover="ovNow" alt="dress" />
                <aside>
                    <h2>{{gname}}</h2>
                    <h3>{{gprice}}</h3>
                </aside>
            </div>
            `,
    // 부모에서 v-bind:속성명=값 으로 전달한 속성변수를
    // props:[]/{} 로 받음!
    props: ["haha", "myseq", "endlet"],
    // props:{"haha":Number}, //-> 데이터형 일치함!
    // props:{"haha":String}, //-> 데이터형 오류메시지나옴!
    // 컴포넌트 내부 변수셋팅
    data: function () {
        return {
            gsrc: `img_gallery/${this.haha}.jpg`,
            gname: `Sofia23` + this.haha + this.endlet + (this.myseq % 2 ? "😘" : "👍"),
            gprice: this.insComma((123000 * this.haha) / 2) + `원`,
        };
    },
    // 컴포넌트 내부 메서드셋팅
    methods: {
        // 부모이벤트호출 전달하기 : $emit() 메서드사용
        goPapa() {
            // $emit(부모가만든이벤트명)
            this.$emit("hull");
        },
        ovNow() {
            this.$emit("gotkimchi");
            // 부모 요소에 v-on:gotkimchi=메서드명
            // 을 만들어서 사용함!
        },

        //정규식함수(숫자 세자리마다 콤마해주는 기능)
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}); ///////////// 뷰JS 컴포넌트 ////////

// 리스트 뷰 인스턴스 생성하기
// 여기가 부모입니다!!!
new Vue({
    el: ".grid",
    // 부모 뷰인스턴스 메서드구역
    methods: {
        // 자식이벤트 전달후 실행메서드!
        goMsg() {
            // alert("자식이 부모에게 이벤트전달 성공!");
        },
        ovMsg() {
            // console.log("오버!오케이!");
        },
    },
}); //////////// Vue 인스턴스 //////////


/////// 큰이미지 보기 배경박스 컴포넌트 /////////////
Vue.component("win-comp",{
    template:`
        <!-- 큰이미지 배경박스 -->
        <div id="bgbx">
            <!-- 오른쪽버튼 -->
            <a href="#" class="abtn rb">
                <span class="ir">오른쪽버튼</span>
            </a>
            <!-- 왼쪽버튼 -->
            <a href="#" class="abtn lb">
                <span class="ir">왼쪽버튼</span>
            </a>
            <!-- 닫기버튼 -->
            <a href="#" class="cbtn">
                <span class="ir">닫기버튼</span>
            </a>
            
            <!-- 큰이미지 박스 -->
            <div id="imbx">
                <!-- 큰 이미지 -->
                <img src="img_gallery/50.jpg" alt="큰 이미지">
                <!-- 이미지 설명 -->
                <h4></h4>
            </div>
        </div>
    `
}); ///////// win-comp 컴포넌트 ///////////////////

////////// win-comp 뷰JS 인스턴스 생성하기 //////
new Vue({
    el:"#pbg",
    // DOM이 모두 로딩된 후 실행구역!
    mounted:function(){
        // [ 제이쿼리 기능구현 ]

        // 공유번호변수
        let nowNum = 1;

        // 1. 갤러리 리스트 클릭시 큰이미지박스 보이기
        $(".grid>div").click(function(e){
            console.log(this);
            // 1. 클릭된 이미지 경로 읽어오기
            let isrc = $(this).find("img").attr("src");
            
            // 2. 클릭된 이미지 경로를 큰 이미지에 src로 넣기
            $("#imbx img").attr("src",isrc);
            
            // 3. 큰이미지박스 보이기
            $("#bgbx").show();
            
            // 4. 다음/이전 이미지 변경을 위한 data-num속성읽기
            nowNum = $(this).attr("data-num");
            console.log("현재이미지번호:",nowNum);
        });/////////// click ////////
        
        // 2. 닫기버튼 클릭시 큰이미지박스 숨기기
        $(".cbtn").click(function(e){
            e.preventDefault();
            // 큰이미지박스 숨기기
            $("#bgbx").hide();
        }); /////////// click /////////
        
        // 3. 이전/다음버튼 클릭시 이미지변경하기
        $(".abtn").click(function(e){
            // 1. 기본이동막기
            e.preventDefault();
            // 2. 오른쪽버튼 여부
            let isB = $(this).is(".rb");

            // 3. 분기하기
            if(isB){ // 오른쪽버튼
                nowNum++;
                if(nowNum===51) nowNum=1;
            }
            else{ // 왼쪽버튼
                nowNum--;
                if(nowNum===0) nowNum=50;
            }

            console.log("변경된nowNum:",nowNum);

            // 4. 큰 이미지 변경하기
            $("#imbx img")
            .attr("src",`img_gallery/${nowNum}.jpg`);

            console.log($(`.grid>div[]`));

        }); ////////// click ////////////

    } //////// mounted 함수구역 /////

}); ///////////// 뷰JS 인스턴스 //////////////////

