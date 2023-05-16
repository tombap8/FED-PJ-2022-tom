/* *****************************
	* SNS 이미지 드래그 슬라이드
	* swiper.js 필요
***************************** */

  /* 메인 컨텐츠1 */
  // 중복클릭방지 변수 초기값
  let isClicked = 0;
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true, // 무한루프(기본값:false)
    effect: "fade", // 페이드 효과 설정
    fadeEffect: {
      crossFade: true, // 교차페이드 설정
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ("0" + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ("0" + number).slice(-2);
      },
    },
    navigation : { // 네비게이션 설정
      nextEl : '.swiper-button-next', // 다음 버튼 클래스명
      prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
    autoplay: {
      // 자동넘김설정
      delay: 4000, // 시간간격(1/1000초)
      disableOnInteraction: false,
      // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
    },
    slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)
  });

  const navigationButtons = document.querySelectorAll('.pgBtn');
  navigationButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      if(isClicked) return;
      isClicked = 1;
      setTimeout(()=>{
        isClicked = false;
      },1000);
    })
  })

  // 멈춤버튼 클릭시 슬라이드 멈춤
  const pauseBtn = $(".swiper-btn-toggle");

  pauseBtn.click(()=>{
    swiper.autoplay.stop();
    pauseBtn.toggleClass('paused');
    if(pauseBtn.attr('class') === 'swiper-btn-toggle') {
      swiper.autoplay.start();
    }
  });

  /* 메인 컨텐츠2 */
  new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, // 무한루프(기본값:false)
    navigation : { // 네비게이션 설정
      nextEl : '.main-navBtnN', // 다음 버튼 클래스명
      prevEl : '.main-navBtnL', // 이번 버튼 클래스명
    },
    slidesPerGroup: 3, // 슬라이드 그룹(개수단위로 넘어감!)
    breakpoints: {
      // 다음 윈도우 크기 이상일때 미디어쿼리 적용 
      150: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1222: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
  });

  /* 메인 컨텐츠3 */
  new Swiper(".swiper3", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true, // 무한루프(기본값:false)
    navigation : { // 네비게이션 설정
      nextEl : '.main3-navBtnN', // 다음 버튼 클래스명
      prevEl : '.main3-navBtnL', // 이번 버튼 클래스명
    },
    slidesPerGroup: 3, // 슬라이드 그룹(개수단위로 넘어감!)
  });

  /* 메인 컨텐츠3 */
  new Swiper(".swiper4", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true, // 무한루프(기본값:false)
    navigation : { // 네비게이션 설정
      nextEl : '.main4-navBtnN', // 다음 버튼 클래스명
      prevEl : '.main4-navBtnL', // 이번 버튼 클래스명
    },
    slidesPerGroup: 3, // 슬라이드 그룹(개수단위로 넘어감!)
  });

  /* 메인 컨텐츠5 */
  new Swiper(".swiper5", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true, // 무한루프(기본값:false)
  });

