// 신상품 컴포넌트 ////////

import { useEffect, useRef } from "react";

// 신상품 데이터 가져오기
import { sinsangData } from "../data/sinsang";

import $ from 'jquery';

export function SinSang({cat,chgItemFn}) {
  // cat - 카테고리 분류명
  // chgItemFn - 선택상품정보변경 부모함수

  // 선택데이터 : 해당카테고리 상품데이터만 가져온다!
  const selData = sinsangData[cat];
  // console.log(selData);

  const makeList = () => {
    // 코드 담을 배열
    let temp = [];
    // 원하는 반복수 만큼 for문실행하여 배열에 JSX태그 담기
    for (let x = 0; x < 9; x++) {
      temp[x] = (
        <li 
        className={"m" + (x + 1)} 
        key={x}
        onMouseEnter={showInfo}
        onMouseLeave={removeInfo}
        >
          <a href="#" 
          onClick={(e)=>{
            e.preventDefault();
            chgItemFn('m'+(x+1))
            }}>
            <img
              src={"./images/goods/" + cat + "/m" + (x + 1) + ".png"}
              alt="신상품"
            />
          </a>
        </li>
      );
    } ///// for /////
    // JSX태그를 담은 배열을 리턴->자동태그변환!
    return temp;
  }; ///////// makeList 함수 ///////////

  // 상품에 오버시 상품정보를 보여주는 함수 /////
  const showInfo = (e) => {
    e.preventDefault();
    // 대상
    const tg = $(e.currentTarget);
    // 1. 이벤트가 발생한 li의 class읽어오기(상품정보객체의 키)
    let gKey = tg.attr('class');
    // console.log('나야나!',selData[gKey]);

    // 2. 상품정보박스를 만들고 보이게하기
    // 마우스 오버된 li자신에 넣어줌
    tg.append(`<div class="ibox"></div>`);

    // console.log(
    //   selData[gKey].split('^')
    //   .map((v)=>`<div>${v}</div>`));

    // 3. 현재li에 만든 .ibox에 데이터 넣기+등장
    tg.find('.ibox').html(
      selData[gKey].split('^')
      .map((v,i)=>`<div>${i==2?addComma(v)+"원":v}</div>`)
    )
    // 등장애니
    .animate({
      top: '110%',
      opacity: 1,
      zIndex: 1,
    },300)

  }; /////////// showInfo함수 ///////////////

  
//정규식함수(숫자 세자리마다 콤마해주는 기능)
function addComma(x) {
  return x.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



  // 정보박스 지우기 함수 
  const removeInfo = (e) => {
    e.preventDefault();
    $(e.currentTarget).find('.ibox').remove();
  };

  // 신상품 리스트 이동함수 사용변수 ///
  // 위치값변수(left값) -> 리랜더링시 기존값을 유지하도록
  // ->  useRef를 사용한다!! -> 변수명.current로 사용!
  let lpos = useRef(0);
  // 재귀호출 상태값(1-호출,0-멈춤)
  let callSts = 1;
  

  // 신상품 리스트 이동함수 //////
  const flowList = (ele) => { // ele-움직일대상
    // console.log(ele);
    // 대상의 left값을 1씩 감소함
    lpos.current--;
    
    // 이미지박스 한개가 나가면 잘라서 맨뒤로 보냄
    if(lpos.current < -300){
      // 위치값 초기화!(-301일때 0으로 변경!)
      lpos.current = 0;
      // 첫번째 li 맨뒤로 이동
      ele.append(ele.find('li').first());
    } ///// if //////
    
    // 적용함
    ele.css({left:lpos.current+'px'})

    // 재귀호출
    if(callSts)
      setTimeout(()=>flowList(ele),40)

  }; ////////// flowList ////////////

  // 오버/아웃시 이동제어함수 ///
  const flowOut = () => {
    

  }; /////////


  // 랜더링 후  한번만 실행구역 //////
  useEffect(()=>{
    // 대상선정: .flist
    // 신상리스트이동함수 호출!
    flowList($('.flist'));


  },[]); ////////// useEffect ////////



  // 리턴 코드 /////////////////////
  return (
    <>
      <h2 className="c1tit">
        NEW MEN'S ARRIVAL
        <button>전체리스트</button>
      </h2>
      <div className="flowbx"
      onMouseEnter={()=>callSts=0} 
      onMouseLeave={()=>{
        callSts=1;flowList($('.flist'));}}>
        <ul className="flist">{makeList()}</ul>
      </div>
    </>
  );
} ////////////// SinSang 컴포넌트 //////////
