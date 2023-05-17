// 뷰라우터 인스턴스 설정파일 - glist-router.js



// 라우터 템플릿 만들기
let Glist = {
    template: `<div class="trip router">필터</div>`,
};
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
