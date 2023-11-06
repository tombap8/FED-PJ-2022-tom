// 보그 PJ 갤러리 페이지 JS - gallery.js

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        // 자동넘김 시간
        delay: 2500,
        // 상호작용(건들여놓기)에 대한 재가동 없애기 안씀(false)
        disableOnInteraction: false,
    },
    // 한번에 보일 슬라이드 수
    slidesPerView: 3,
    // 사이간격
    spaceBetween: 20,
    // 루프처리
    loop: true,
    // 하단블릿
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 양쪽이동버튼
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // 화면크기별 분기
    breakpoints: {
        // when window width is >= 200px
        200: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 700px
        700: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
  });