// 뷰라우터 인스턴스 설정파일 - glist-router.js



// 라우터 템플릿 만들기
let Glist = {
    template: `
        <section>
            <!-- 필터옵션 체크박스구역 -->
            <div id="optbx">
                <label for="men">남성</label>
                <input type="checkbox" id="men"
                v-model="$store.state.chkarr[0]">

                <label for="women">여성</label>
                <input type="checkbox" id="women"
                v-model="$store.state.chkarr[1]">

                <label for="style">스타일</label>
                <input type="checkbox" id="style"
                v-model="$store.state.chkarr[2]">
            </div>

            <!-- 상품리스트박스 -->
            <div class="grid">
                <div 
                v-for="
                    (v,i) in $store.state.gdata
                "
                v-if="
                v.cat=='men'||
                v.cat=='women'||
                v.cat=='style'"
                >
                    <img 
                        v-bind:src="
                        './images/goods/'+
                        v.cat +
                        '/'+v.ginfo[0]+'.png'  
                        " alt="dress" />
                    <aside>
                        <h2>{{v.ginfo[1]}}</h2>
                        <h3>{{v.ginfo[3]}}</h3>
                    </aside>
                </div>
            </div>
        </section>
    `,
};


// v-model 디렉티브 속성은 요소 자신의 값이
// 타겟 값으로 반영되게해준다!
// 변경 데이터의 뷰JS의 동기화기능을 확인!

let Paging = {
    template: `<div class="trip router">페이징</div>`,
};
let More = {
    template: `<div class="trip router">모어</div>`,
};


// 뷰라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 1. 필터 리스트
        {
            path: "/glist",
            component: Glist,
        },
        // 2. 페이징 리스트
        {
            path: "/paging",
            component: Paging,
        },
        // 3. 모어 리스트
        {
            path: "/more",
            component: More,
        },
    ],
});

// 내보내기
export default router;
