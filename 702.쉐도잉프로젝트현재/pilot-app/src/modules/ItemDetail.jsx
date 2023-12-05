// 상품상세보기 컴포넌트

// 신상품 데이터 가져오기
import { useEffect } from "react";
import { sinsangData } from "../data/sinsang";

import $ from 'jquery';
import { CartList } from "./CartList";


export function ItemDetail({cat,goods}) {
  // cat - 카테고리명(men/women/style)
  // goods - 상품 아이템정보(속성코드: m1,m2,...)

  // 선택데이터 : 전체데이터[분류명][상품코드].split('^')
  // -> 개별상품 배열이 된다!
  // [상품명,상품코드,가격]
  const selData = sinsangData[cat][goods].split('^');
  console.log('선택데이터:',selData);


  // 닫기 함수 ////
  const closeBox = (e) => {
    e.preventDefault();
    $('.bgbx').slideUp(400);}

  // 랜더링후 실행구역 ///////
  useEffect(()=>{
    // 숫자출력 input
    const sum = $('#sum');
    // 수량증감 이미지버튼
    const numBtn = $('.chg_num img');
    

    // 수량 증감 함수 /////////
    numBtn.click(e=>{
      // 이미지순번
      let seq = $(e.currentTarget).index();
      // 기존값 읽기
      let num = Number(sum.val());
      // 윗버튼은 ++, 아랫버튼은 --
      seq?num--:num++;
      // 한계값
      if(num<1) num=1;
      console.log('순번:',seq,num);
      // 증감 반영
      sum.val(num);
      // 총합계 반영
      // 기본값 : selData[2]
      // 출력박스 : #total
      $("#total").text(addComma(selData[2]*num)+'원');
    })

  },[]); ////  한번만 실행 /////

  // 리랜더링 실행구역 /////
  useEffect(()=>{
    // 수량초기화
    $("#sum").val('1');
    // 총합계초기화
    $("#total").text(addComma(selData[2])+'원');
  }); ////////// useEffect //////

  
//정규식함수(숫자 세자리마다 콤마해주는 기능)
function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



  // 리턴코드 ///////////////////////////
  return (
    <>
      <a href="#" className="cbtn" onClick={closeBox}>
        <span className="ir">닫기버튼</span>
      </a>
      <div id="imbx">
        <div className="inx">
          <section className="gimg">
            <img src={"./images/goods/"+cat+"/"+goods+".png"} alt="큰 이미지" />
            <div className="small">
              <a href="#">
                <img src="./images/goods/men/m1.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m2.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m3.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m4.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m5.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m6.png" alt="썸네일 이미지" />
              </a>
            </div>
          </section>
          <section className="gdesc scbar">
            <h1>HOME &gt; MEN</h1>
            <div>
              <ol>
                <li>
                  <img src="./images/dx_ico_new-28143800.gif" alt="new버튼" />
                </li>
                <li id="gtit">상품명: {selData[0]}</li>
                <li>
                  <img src="./images/icon_type02_social01.gif" alt="페이스북" />
                  <img src="./images/icon_type02_social02.gif" alt="트위터" />
                  <img src="./images/icon_mail02.gif" alt="이메일" />
                  <img src="./images/btn_source_copy.gif" alt="URL복사" />
                </li>
                <li>
                  <span>판매가</span>
                  <span id="gprice">
                    {addComma(selData[2])}원</span>
                </li>
                <li>
                  <span>적립금</span>
                  <span>
                    <img src="./images/icon_my_m02.gif" alt="적립금" />
                    4,950(5%적립)
                  </span>
                </li>
                <li>
                  <span>무이자할부</span>
                  <span>
                    부분 무이자 할부 혜택
                    <img
                      src="./images/view_btn_nointerest_card.gif"
                      alt="무이자카드보기"
                    />
                  </span>
                </li>
                <li>
                  <span>상품코드</span> <span id="gcode">{selData[1]}</span>
                </li>
                <li>
                  <span>사이즈</span> <span>95 100 105 110</span>
                </li>
                <li>
                  <span>구매수량</span>
                  <span>
                    <input type="text" id="sum" defaultValue="1" />
                    <b className="chg_num">
                      <img src="./images/cnt_up.png" alt="증가" />
                      <img src="./images/cnt_down.png" alt="감소" />
                    </b>
                  </span>
                </li>
                <li>
                  <span>컬러</span> <span></span>
                </li>
                <li>
                  <span>권장계절</span> <span>여름</span>
                </li>
                <li className="tot">
                  <span>총합계</span> 
                  <span id="total">
                    {addComma(selData[2])}원</span>
                </li>
              </ol>
            </div>
            <div>
              <button className="btn btn1">BUY NOW</button>
              <button className="btn">SHOPPING CART</button>
              <button className="btn">WISH LIST</button>
            </div>
          </section>
        </div>
      </div>

      {/* 카트리스트 */}
      <CartList />
    </>
  );
} /////////// ItemDetail 컴포넌트 ///////////
