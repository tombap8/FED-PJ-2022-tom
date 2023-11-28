// 공통패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect } from "react"

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

// 컨텍스트 API
import { pCon } from "../modules/PilotContext";

// 제이쿼리
import $ from 'jquery';
import { SinSang } from "../modules/SinSang";

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

    },[])

    return(
        <>
            {/* 1. 배너영역 */}
            <section id="ban" className="page">
                <SwiperApp cat={myCon.pgName} />
            </section>
            {/* 2. 신상품영역 */}
            <section id="c1" 
            className={"cont c1 "+myCon.pgName}>
                <SinSang cat={myCon.pgName} />
            </section>
            {/* 2.5. 상세보기박스 */}
            <div className="bgbx"></div>
            {/* 3. 패럴랙스 영역 */}
            <section id="c2" className="cont c2 men"></section>
            {/* 4. 단일상품영역 */}
            <section id="c3" className="cont c3"></section>
            {/* 5. 스타일상품영역 */}
            <section id="c4" className="cont c4"></section>
        </>
    )

} //////// Fashion 컴포넌트 ///////