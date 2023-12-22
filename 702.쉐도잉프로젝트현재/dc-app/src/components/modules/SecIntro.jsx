// DC.com 섹션소개 컴포넌트 : SecIntro

// 섹션소개모듈 데이터 가져오기
import { secIntroData } from "../data/sec_intro";

// 섹션소개모듈용 CSS 불러오기
import "../../css/sec_intro.css"

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { dcCon } from "./dcContext";
import { useContext } from "react";

// 링크 이동을 위한 라우터 불러오기
// import { useNavigate } from "react-router-dom";

// 구조정의:
// Root > section > img Box + title Box + button Box

export function SecIntro(){

    // 컨텍스트 API 사용하기
    const myCon = useContext(dcCon);

    // 선택데이터
    const selData = secIntroData;

    // 라우터 이동객체설정 -> 컨텍스트 API사용!
    // const goNav = useNavigate(); -> 여기서 사용안함

    // 라우터 이동함수 -> 컨텍스트 API사용!
    // const chgPage = (txt) => goNav(txt);  -> 여기서 사용안함



    return(
        <>
            <section className="sec-intro">
            {
                selData.map((v,i)=>
                <div key={i}>
                    {/* 1. 이미지박스 */}
                    <div className="imbx">
                        <img 
                            src={process.env.PUBLIC_URL+v.isrc} 
                            alt={v.tit.split('^')[0]} />
                    </div>
                    {/* 2. 타이틀박스 */}
                    <div className="titbx">
                        <h3>{v.tit.split('^')[0]}</h3>
                        <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                    </div>
                    {/* 3. 버튼박스 */}
                    <div className="btnbx">
                        <button 
                        onClick={()=>
                        // 컨텍스트 API 함수호출!
                        myCon.chgPage(v.link,{})}>
                            {v.btn.toUpperCase()}
                        </button>
                    </div>

                </div>
                )
            }   
            </section>
        </>
    );

} ////////////// SecIntro 컴포넌트 ///////////