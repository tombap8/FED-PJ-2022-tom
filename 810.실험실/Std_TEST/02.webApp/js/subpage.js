import subdata from "./tempData/subData.js";
import store from "./store.js";

/************************************* 
    뷰 컴포넌트 데이터 셋업
*************************************/
// [1] 서브 카테고리 (신상, 베스트)
// [1-1] 뷰 컴포넌트 - 카테고리
Vue.component("stab-comp", {
    template: subdata.prodTab,
    methods:{
      test(category){
        store.commit('newChgData',category)
      },
    },
    mounted(){
      // 첫번째 li만 강제클릭 발생
      this.$nextTick(() => {
        const firstLi = this.$el.querySelector('ul > li:first-child');
        firstLi.click();
      });
    },
});

// [1-2] 뷰 컴포넌트 - 상품리스트
Vue.component("list-comp", {
  template: subdata.new_prodList,
  methods: {
    
  },
});

// [2] 서브 카테고리 (타겟)
// [2-1] 뷰 컴포넌트 - 사이드메뉴탭
Vue.component("sidetab-comp",{
  template: subdata.sideMenuTab,
})

Vue.component("tgprod-comp", {
  template: subdata.tg_ProdList,
})

/************************************* 
    뷰인스턴스 생성영역
*************************************/
// [1] 뷰인스턴스 - 메인
new Vue({
  el: "#cont_wrap",
  store, // 뷰엑스 스토어 등록
  data: {
    subTit: ["NEW","BEST"],
  }, 
})

// 뷰 전역등록 함수
Vue.prototype.numberWithCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Vue.prototype.calculateDiscount = function(oprice, dprice) {
  if (!oprice || !dprice) {
    return "";
  }
  const discount = ((oprice - dprice) / oprice) * 100;
  return Math.floor(discount) + '%';
};

// 메뉴 뷰 템플릿 클릭시 스타일 적용
const subTab = document.querySelectorAll(".new-prod-tab > ul > li");

subTab.forEach(ele =>
  ele.addEventListener("click", () => {
    for(let x of subTab) {
      x.classList.remove('clicked');
    }
    ele.classList.add('clicked');
}));


/************************************* 
    3. WOMEN - 서브페이지
*************************************/
// 카테고리메뉴 클릭시 토글
$('.ctg_depth1 > div').click(function(){
  const $target = $(this).parent('.ctg_depth1').find('.ctg_depth2');
  
  // 이미 열려있는 ctg_depth2 요소 닫음
  if ($target.is(':visible')) {
    $target.slideUp(300);
    $(this).removeClass('slide-down');

  } else {
    // 다른 ctg_depth2 요소를 모두 닫음
    $('.ctg_depth2').slideUp(300);
    $('.ctg_depth1 > div').removeClass('slide-down');
    
    // 현재 클릭한 요소를 토글
    $target.slideToggle(300);
    $(this).toggleClass('slide-down');
  }
});

$('.ctg_depth2 > ul > li').on('click', function(event) {
  event.stopPropagation();
});


// 가격 라디오버튼 중복 선택 막기
let lastChecked = null; 

$('.rdo > input').on('change', function() {
  if (lastChecked && lastChecked !== this) {
    $(lastChecked).prop('checked', false); // 마지막으로 체크된 요소 체크 해제
  }
  lastChecked = this; // 마지막으로 체크된 요소를 현재 체크된 요소로 업데이트
});

// 직접입력버튼 체크시 입력창 활성화!
// 초기에 버튼 미체크된 경우 입력창 비활성화
$('.custom-filter-price > input').prop('disabled', true); 
// 직접입력 버튼 클릭시에만 입력창 활성화
$('.rdo > input').on('change', function() {
  if ($('.direct-user-input input').is(':checked')) {
    $('.custom-filter-price > input').addClass('is_active').prop('disabled', false);
  }
  else {
    $('.custom-filter-price > input').removeClass('is_active').prop('disabled', true);
  }
});

// 상품정렬 버튼 클릭시 리스트 보이기
$('.item_sort').on('click',function(){
  $(this).toggleClass('style_black');
  $(this).find('.product-sort-list').toggleClass('style_black');
  $('.product-sort-list > li > a').toggleClass('style_black');
  $('.item_sort > strong > i').toggleClass('style_black');
  $('.item_sort > strong').toggleClass('style_black');
});

$('.product-sort-list').on('click', function(event) {
  event.stopPropagation();
});

// 색상, 가격, 사이즈 정보 클릭하면 클릭표시
// $('.color-record > button').click(function(){
//   $(this).toggleClass
// });