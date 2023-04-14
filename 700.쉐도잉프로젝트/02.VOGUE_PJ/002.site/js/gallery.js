// 보그 PJ : 갤러리 페이지 JS - gallery.js

$(()=>{ ///////////// jQB //////////////


    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 화면화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)
        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
            // 블릿설정
            el: ".swiper-pagination", // 블릿요소설정
            clickable: true, // 클릭가능여부
        },
        navigation: {
            // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼 요소설정
            prevEl: ".swiper-button-prev", // 이전버튼 요소설정
        },
        autoplay: {
            // 자동넘김설정
            delay: 2000, // 시간간격(1/1000초)
            disableOnInteraction: false,
            // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
        },
      });

}); ////////// jQB ///////////////////