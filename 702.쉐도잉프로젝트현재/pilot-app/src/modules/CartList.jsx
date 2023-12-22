// Pilot PJ 장바구니 리스트 컴포넌트

// 장바구니 리스트 CSS 불러오기
import { Fragment, memo, useEffect, useState } from "react";
import "../css/cartlist.css";

// 제이쿼리
import $ from "jquery";

// 전달값이 변경되면 리랜더링하기 위해 메모이제이션을 적용!
export const CartList = memo(({ selData, flag }) => {
  // selData - 현재 반영된 데이터
  // flag - 상태값 체크변수(true/false) -> 업데이트 여부결정!
  console.log("업뎃상태값:", flag.current);

  // [컴포넌트 전체 공통변수] /////////////
  // 1. 페이지 단위수 : 한 페이지 당 레코드수
  const pgBlock = 5;

  // console.log("페이지단위수:", pgBlock, "\n전체 레코드수:", totNum);

  // 상태관리변수 설정 ///////////////
  // 1. 현재 페이지 번호 : 가장중요한 리스트 바인딩의 핵심!
  const [pgNum, setPgNum] = useState(1);
  // 2. 변경 데이터 변수 : 전달된 데이터로 초기셋팅
  const [cartData, setCartData] = useState(selData);
  // 3. 리랜더링 강제적용 상태변수
  const [force, setForce] = useState(null);

  console.log("받은 데이터", selData, "\n기존 데이터", cartData);

  // 카트 컴포넌트의 데이터가 상태관리되고 있으므로
  // 외부에서 전달되는 데이터와 다를때 업데이트해야
  // 외부에서 들어오는 데이터가 반영되어 리랜더링 된다!
  // 삭제버튼도 작동하게 하려면??? -> 상태변수로 제어한다!!!
  // 외부데이터업데이트는 flag.current값이 true까지 돼야한다!
  if (cartData !== selData && flag.current) {
    setCartData(selData);
    console.log(3333);
  }

  // 선택 데이터 : 로컬스토리지 데이터를 객체변환! -> 주석처리
  // const selData = JSON.parse(localStorage.getItem("cart"));

  // 전체 데이터개수
  const cntData = cartData.length;

  console.log(cartData, cntData + "개");

  // 전체합계 구하기
  let totalCnt = 0;
  cartData.forEach((v) => {
    totalCnt += v.ginfo[3] * v.num;
  }); ////////// forEach ///////////

  console.log("토탈:", totalCnt);

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 랜더링후 실행구역 /////////////
  useEffect(() => {
    // 카트버튼 나타나기
    $("#mycart")
      .removeClass("on")
      .fadeIn(300, function () {
        // 페이드 애니후
        $(this).addClass("on");
      }); ////// fadeIn ////////

    console.log("나야나");
  }, []); /// useEffect ///////////////

  // 리스트 보이기 함수 //////////
  const showList = () => {
    console.log("열려라!!");
    $("#cartlist").animate({ right: "0" }, 600);
  }; //////////// showList ////////////

  // 리스트 숨기기 함수 //////////
  const hideList = (e) => {
    e.preventDefault();
    $("#cartlist").animate({ right: "-60%" }, 600);
  }; //////////// hideList ////////////

  // 리스트 삭제 함수 ////////////////
  const deleteItem = (e) => {
    // 삭제기능만 작동하기 하기 위해 부모의 useRef값인 flag값을
    // false로 변경하면 상단의 조건업데이트값이 작동하지 않는다!
    // 삭제기능만 작동한다!
    flag.current = false;

    let confMsg = "정말정말정말로 지우시겠습니까? 할인도하는데?";
    // 지울지 여부를 사용자에게 물어본다!
    // confirm() 대화창에
    // '확인'->true, '취소'->false 리턴함!
    // confirm은 alert과 유사하게 window객체에 있음!
    if (window.confirm(confMsg)) {
      const selIdx = $(e.target).attr("data-idx");
      console.log("지울아이:", selIdx);

      // 해당 데이터 순번 알아내기
      const newData = cartData.filter((v) => {
        if (v.idx !== selIdx) return true;
      });

      console.log("제거후리스트:", newData);

      // 로컬스 데이터 업데이트!!!
      localStorage.setItem("cart", JSON.stringify(newData));

      // 전체 데이터 업데이트 하면 모두 리랜더링되게 하자!
      setCartData(newData);
    } ////// if /////////
  }; ////////// deleteItem 함수 //////////

  // 증감 반영함수 ////////////
  const chgNum = (e) => {
    // 이벤트 타겟
    const tg = $(e.currentTarget);
    // 이벤트 타겟의 입력창
    const tgInput = tg.parent().siblings(".item-cnt");
    // 입력창 숫자 읽기 : 문자형숫자->숫자형
    let cNum = Number(tgInput.val());

    console.log("증감반영:");

    // CSS 포커스시 반영버튼 보이기 셋팅에 맞춰서
    // 강제로 입력창에 포커스 주기!
    tgInput.focus();

    // 증감하기
    if (tg.attr("alt") === "증가") cNum++;
    else cNum--;

    // 한계수체크
    if (cNum < 1) cNum = 1;

    // 화면반영하기
    tgInput.val(cNum);
  }; ///////// chgNum 함수 ///////////

  // 반영버튼 클릭시 데이터 업데이트하기 ////
  const goResult = (e) => {
    // 업데이트할 배열 고유값 idx
    let tg = $(e.currentTarget);
    let cidx = tg.attr("data-idx");
    console.log("결과야 나와라~!", cidx);

    // 데이터 리랜더링 중복실행막기
    flag.current = false;

    // 해당 데이터 업데이트 하기
    // forEach로 돌리면 중간에 맞을 경우 return할 수 없음!
    // 일반 for문으로 해야 return 또는 continue를 사용 가능

    // ->>> some() 이라는 메서드가 있다!!!
    // return true로 조건에 처리시
    // for문을 빠져나옴(return과 유사)
    // return false로 조건 처리시 for문을 해당순번
    // 제외하고 계속 순회함(continue와 유사!)
    // 참고: https://www.w3schools.com/jsref/jsref_some.asp

    // [Array some() 메서드 테스트] //////
    // cartData.some((v) => {
    //   console.log('some테스트상단:',v.idx);
    //   // if(v.idx==17){return true;} // -> for문 break 유사
    //   if(v.idx==17){return false;} // -> for문 continue 유사
    //   console.log('some테스트하단:',v.idx);
    // });

    // 클릭시 'data-idx'값에 업데이트할 요소 idx번호 있음!->cidx
    cartData.some((v, i) => {
      // 해당순번 업데이트하기
      if (v.idx == cidx) {
        // 업데이트 하기 ///
        cartData[i].num = tg.prev().val();

        // some 메서드 이므로 true 리턴시 순회종료!
        return true;
      } ///// if ///////
    });

    // 로컬스 데이터 업데이트!!!
    localStorage.setItem("cart", JSON.stringify(cartData));

    // 전체 데이터 업데이트 하면 모두 리랜더링되게 하자!
    setCartData(cartData);
    // 그.러.나... 기존 배열자체가 추가/삭제 되지 않는한
    // 배열데이터가 업데이트 된것으로 인식되지 않는다!
    // 따라서 강제 리랜더링 상태값을 설정하여 이 값을
    // 변경하여 리랜더링 하자!
    setForce(Math.random());
    // 매번 랜덤수를 넣으면 반드시 리랜더링된다!!!^^
  }; ////////// goResult 함수 //////////

  /************************************* 
    함수명 : bindList
    기능 : 페이지별 리스트를 생성하여 바인딩함
  *************************************/
  const bindList = () => {
    // 데이터 선별하기
    const tempData = [];

    // 시작값 : (페이지번호-1)*블록단위수
    let initNum = (pgNum - 1) * pgBlock;
    // 한계값 : 블록단위수*페이지번호
    let limitNum = pgBlock * pgNum;

    // 데이터 선별용 for문 : 원본데이터(orgData)로부터 생성
    for (let i = initNum; i < limitNum; i++) {
      // 마지막 페이지 한계수체크(cntData전체개수체크)
      if (i >= cntData) break;
      // 코드 푸시
      tempData.push(cartData[i]);
    } ///// for /////

    // 데이터가 없는 경우 출력 ///
    if (cartData.length === 0) {
      return (
        <tr>
          <td colSpan="8">There is no data.</td>
        </tr>
      );
    } ////// if /////////

    // console.log('찍기직전Data:',tempData);

    return tempData.map((v, i) => (
      <tr key={i} data-v={v}>
        {/* 상품이미지 */}
        <td>
          <img
            src={"images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"}
            alt="item"
          />
        </td>
        {/* 리스트순번 : 페이지별 시작번호반영 */}
        <td>{i + 1 + initNum}</td>
        {/* 상품명 */}
        <td>{v.ginfo[1]}</td>
        {/* 상품코드 */}
        <td>{v.ginfo[2]}</td>
        {/* 상품가격 */}
        <td>{addComma(v.ginfo[3])}원</td>
        {/* 상품수량 */}
        <td className="cnt-part">
          <div>
            <span>
              <input type="text" 
              className="item-cnt" 
              readOnly
              value={v.num} />
              {/* 실제개수 반영값을 위해 value속성사용할것!
              defaultValue를 쓰면 값변경 반영안됨! */}
              <button
                className="btn-insert"
                onClick={goResult}
                data-idx={v.idx}
              >
                반영
              </button>
              <b className="btn-cnt">
                <img src="./images/cnt_up.png" alt="증가" onClick={chgNum} />
                <img src="./images/cnt_down.png" alt="감소" onClick={chgNum} />
              </b>
            </span>
          </div>
        </td>
        {/* 상품가격 총합계 */}
        <td>{addComma(v.ginfo[3] * v.num)}원</td>
        {/* 삭제버튼 */}
        <td>
          <button className="cfn" data-idx={v.idx} onClick={deleteItem}>
            ×
          </button>
        </td>
      </tr>
    ));
  }; /////////// bindList 함수 ////////////

  /************************************* 
    함수명 : pagingLink
    기능 : 리스트 페이징 링크를 생성한다!
  *************************************/
  const pagingLink = () => {
    // 페이징 블록만들기 ////
    // 1. 블록개수 계산하기
    const blockCnt = Math.floor(cntData / pgBlock);
    // 전체레코드수 / 페이지단위수 (나머지가 있으면 +1)
    // 전체레코드수 : pgBlock변수에 할당됨!
    // 2. 블록 나머지수
    const blockPad = cntData % pgBlock;

    // 최종 한계수 -> 여분레코드 존재에 따라 1더하기
    const limit = blockCnt + (blockPad === 0 ? 0 : 1);

    // console.log(
    //   "블록개수:",
    //   blockCnt,
    //   "\n블록나머지:",
    //   blockPad,
    //   "\n최종한계수:",
    //   limit
    // );

    // 리액트에서는 jsx문법 코드를 배열에 넣고
    // 출력하면 바로 코드로 변환된다!!!
    let pgCode = [];
    // 리턴 코드 //////////
    // 만약 빈태그 묶음에 key를 심어야할 경우
    // 불가하므로 Fragment 조각 가상태그를 사용한다!
    for (let i = 0; i < limit; i++) {
      pgCode[i] = (
        <Fragment key={i}>
          {pgNum - 1 === i ? (
            <b>{i + 1}</b>
          ) : (
            <a href="#" onClick={chgList}>
              {i + 1}
            </a>
          )}

          {i < limit - 1 ? " | " : ""}
        </Fragment>
      );
    } ////// for /////

    return pgCode;
  }; /////////// pagingLink 함수 ////////

  /************************************* 
    함수명 : chgList
    기능 : 페이지 링크 클릭시 리스트변경
  *************************************/
  const chgList = (e) => {
    let currNum = e.target.innerText;
    // console.log("번호:", currNum);
    // 현재 페이지번호 업데이트! -> 리스트 업데이트됨!
    setPgNum(currNum);
    // 바인드 리스트 호출 불필요!!!
    // 왜? pgNum을 bindList()에서 사용하기때문에
    // 리랜더링이 자동으로 일어남!!!
  }; ///////// chgList 함수 //////////////

  /// 리턴 코드 ///////////////////////
  return (
    <>
      <section id="cartlist">
        <a href="#" className="cbtn cbtn2" onClick={hideList}>
          <span>닫기버튼</span>
        </a>
        <table>
          <caption>
            <h1> 카트 리스트</h1>
          </caption>
          <tbody>
            <tr>
              <th>상품</th>
              <th>번호</th>
              <th>상품명</th>
              <th>상품코드</th>
              <th>단가</th>
              <th>수량</th>
              <th>합계</th>
              <th>삭제</th>
            </tr>

            {bindList()}

            <tr>
              <td colSpan="6">총합계 :</td>
              <td>{addComma(totalCnt)}원</td>
              <td></td>
            </tr>
          </tbody>
          {/* 하단 페이징 표시부분 */}
          <tfoot>
            <tr>
              <td colSpan="8" className="paging">
                {/* 페이징번호 위치  */}
                {pagingLink()}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
      {/* 카트버튼이미지 박스 */}
      <div id="mycart" onClick={showList}>
        {/* 카트이미지 */}
        <img src="./images/mycart.gif" 
        title={cntData+"개의 상품이 있습니다"} />
        {/* 카트상품개수 출력박스 */}
        <div className="cntBx">{cntData}</div>
      </div>
    </>
  );
}); ////////////// CartList 컴포넌트 /////////
