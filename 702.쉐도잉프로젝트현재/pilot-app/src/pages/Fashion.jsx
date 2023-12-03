// 공통패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useState } from "react"

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

// 컨텍스트 API
import { pCon } from "../modules/PilotContext";

// 제이쿼리
import $ from 'jquery';
import { SinSang } from "../modules/SinSang";
import { ItemDetail } from "../modules/ItemDetail";

export function Fashion(props){
    // 컨텍스트 API 사용!
    const myCon = useContext(pCon);

    // props.cat - 서브 카테고리명

    useEffect(()=>{
        // 스크롤바 생성하기(x축은 숨김)
        $('html,body').css({
            overflow:'visible',
            overflowX:'hidden',
        });

        // 로고클릭시 페이지이동 : pgName 변경 -> chgPgName()
        $("#logo a").click(()=>myCon.chgPgName('main'));


        // 상품상세보기 박스 처음에 숨기기
        // $(".bgbx").hide();

    },[]); ///////// useEffect ///////////

    // 후크 상태변수
    const [item,setItem] = useState('m1');

    // 신상컴포넌트에서 상세컴포넌트로 값을 전하기 위한
    // 상태변수를 셋팅하여 함수로 이것을 변경하게 해준다!
    // 프롭스 펑션다운~!!
    const chgItem = (v) => {
        console.log('상품정보:',v);
        // 상태변수 업데이트
        setItem(v);
        // 상세박스 슬라이드 애니로 보이기
        $(".bgbx").slideDown(400);
    }; /////////// chgItem 함수 //////

    // 리턴코드 //////////////////////////
    return(
        <>
            {/* 1. 배너영역 */}
            <section id="ban" className="page">
                <SwiperApp cat={myCon.pgName} />
            </section>
            {/* 2. 신상품영역 */}
            <section id="c1" 
            className={"cont c1 "+myCon.pgName}>
                <SinSang cat={myCon.pgName} 
                chgItemFn={chgItem} />
            </section>            
            {/* 2.5. 상세보기박스 */}
            <div className="bgbx">
                <ItemDetail goods={item} cat={props.cat} />
            </div>
            {/* 3. 패럴랙스 영역 */}
            <section id="c2" className="cont c2 men"></section>
            {/* 4. 단일상품영역 */}
            <section id="c3" className="cont c3"></section>
            {/* 5. 스타일상품영역 */}
            <section id="c4" className="cont c4"></section>
        </>
    )

} //////// Fashion 컴포넌트 ///////