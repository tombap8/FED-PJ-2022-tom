// 상품상세보기 컴포넌트

import { useContext, useEffect } from "react";
// 신상품 데이터 가져오기
import gdata from "../data/glist-items";
// 컨텍스트 API 불러오기
import { pCon } from "./PilotContext";

import $ from "jquery";

export function ItemDetail({ cat, goods }) {
  // cat - 카테고리명(men/women/style)
  // goods - 상품 아이템정보(속성코드: m1,m2,...)

  // 컨텍스트 API 사용하기
  const myCon = useContext(pCon);

  
  //////////////////////////////////////
  // 카트에 담기 버튼 클릭시 호출함수 ////
  /////////////////////////////////////
  const useCart = () => {
    // 카트 선택 아이템만 추가하기 위해
    // 카트 컴포넌트와 공유한 useRef 참조변수인 flag값을
    // true로 업데이트 한다!!!
    myCon.flag.current = true;


    // 1.선택된 상품을 로컬스토리지에 담기!
    /* 데이터 구성:
    {
      idx: 상품유일키,
      cat: 상품분류,
      ginfo: 상품정보,
      num: 선택상품수
    }
    -> 기존 선택객체는 selData에 담김
    -> 여기에 num항목을 추가한다!
    */
    // 1-1.num항목 추가하기 : 값은 #sum의 value값
    selData.num = $("#sum").val();

    console.log("카트쓸꼬얌~!", selData);

    // 로컬스 변환값 담을 변수
    let localD;

    // 1-2.로컬스에 문자형변환하여 담는다
    // (1) 기존 카트 로컬스가 없는 경우
    if (!localStorage.getItem("cart")) {
      // 아무것도 없으면 배열을 만들고 여기에 push함!
      localD = [];
      localD.push(selData);
      localStorage.setItem("cart", JSON.stringify(localD));

      // localD변수에 담긴 로컬스 변환값을 
        // transData에 담아
        // CartList 컴포넌트에 전달한다!
        myCon.setTransData(localD);

        console.log(myCon.transData);

        myCon.setCsts(1);

        // 쇼핑카트버튼 초기화
        $("#mycart")
          .removeClass("on")
          .delay(1000)
          .fadeIn(300, function () {
            // 페이드 애니후
            $(this).addClass("on");
          }); ////// fadeIn ////////

    } ///// if //////
    // (2) 기존 카트 로컬스가 있는 경우 기존값에 더하기
    else {
      localD = localStorage.getItem("cart");
      // 객체변환
      localD = JSON.parse(localD);
      // console.log('요요기:',localD,selData);

      // **** 읽어온 로컬스에 넣을 상품코드가 있으면
      // 메시지와 함께 넣지 않는다!
      let temp = localD.find((v) => {
        if (v.idx === selData.idx) return true;
      }); ////// find /////

      console.log("같은값있나?", temp);

      // 만약 이미 선택된 데이터이면 메시지만 띄움
      if (temp) {
        alert("이미 선택하신 아이템입니다!");
      } /////// if //////

      // **** 새로운 아이템만 등록! **** ///
      else {
        
        // 객체변환 데이터에 push로 추가!
        localD.push(selData);
        // // 다시 문자형변환하여 넣기
        localStorage.setItem("cart", JSON.stringify(localD));

        // localD변수에 담긴 로컬스 변환값을 
        // transData에 담아
        // CartList 컴포넌트에 전달한다!
        myCon.setTransData(localD);

        console.log(myCon.transData);

        myCon.setCsts(1);

        // 쇼핑카트버튼 초기화
        $("#mycart")
          .removeClass("on")
          .delay(1000)
          .fadeIn(300, function () {
            // 페이드 애니후
            $(this).addClass("on");
          }); ////// fadeIn ////////
      } ///////// else //////////
    } //////////// else /////////////
  }; /////////// useCart함수 ////////////

  // 선택데이터 : 전체데이터[분류명][상품코드].split('^')
  // -> 개별상품 배열이 된다!
  // [상품명,상품코드,가격]
  // const selData = sinsangData[cat][goods].split('^');
  // console.log('선택데이터:',selData);

  const selData = gdata.find((v) => {
    // 조건: 분류와 상품분류코드가 일치하는 하나
    if (v.cat === cat && v.ginfo[0] === goods) return true;
  });
  // filter는 결과를 배열에 담고
  // find는 배열의 결과값만 가져옴
  // 하나의 값을 가져올때는 find가 좋다!

  console.log("새로선택:", selData);

  // selData에 담긴 기존 객체데이터와 상품개수항목이 추가된
  // 객체를 만들고 이것을 로컬스에 저장한다!!!

  // 전체 데이터를 셋업하기위한 항목은 ginfo임!
  const ginfo = selData.ginfo;

  // 닫기 함수 ////
  const closeBox = (e) => {
    e.preventDefault();
    $(".bgbx").slideUp(400);
  };

  // 랜더링후 실행구역 ///////
  useEffect(() => {
    // 숫자출력 input
    const sum = $("#sum");
    // 수량증감 이미지버튼
    const numBtn = $(".chg_num img");

    // 수량 증감 함수 /////////
    numBtn.click((e) => {
      // 이미지순번
      let seq = $(e.currentTarget).index();
      // 기존값 읽기
      let num = Number(sum.val());
      // 윗버튼은 ++, 아랫버튼은 --
      seq ? num-- : num++;
      // 한계값
      if (num < 1) num = 1;
      console.log("순번:", seq, num);
      // 증감 반영
      sum.val(num);
      // 총합계 반영
      // 기본값 : selData[2]
      // 출력박스 : #total
      $("#total").text(addComma(ginfo[3] * num) + "원");
    });

    
  }, []); ////  한번만 실행 /////

  // 리랜더링 실행구역 /////
  useEffect(() => {
    // 수량초기화
    $("#sum").val("1");
    // 총합계초기화
    $("#total").text(addComma(ginfo[3]) + "원");
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
            <img
              src={"./images/goods/" + cat + "/" + goods + ".png"}
              alt="큰 이미지"
            />
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
                <li id="gtit">상품명: {ginfo[1]}</li>
                <li>
                  <img src="./images/icon_type02_social01.gif" alt="페이스북" />
                  <img src="./images/icon_type02_social02.gif" alt="트위터" />
                  <img src="./images/icon_mail02.gif" alt="이메일" />
                  <img src="./images/btn_source_copy.gif" alt="URL복사" />
                </li>
                <li>
                  <span>판매가</span>
                  <span id="gprice">{addComma(ginfo[3])}원</span>
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
                  <span>상품코드</span> <span id="gcode">{ginfo[2]}</span>
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
                  <span id="total">{addComma(ginfo[3])}원</span>
                </li>
              </ol>
            </div>
            <div>
              <button className="btn btn1">BUY NOW</button>
              <button className="btn" onClick={useCart}>
                SHOPPING CART
              </button>
              <button className="btn">WISH LIST</button>
            </div>
          </section>
        </div>
      </div>

     
    </>
  );
} /////////// ItemDetail 컴포넌트 ///////////
