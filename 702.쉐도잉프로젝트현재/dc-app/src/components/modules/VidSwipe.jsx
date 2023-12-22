// DC PJ 비디오스와이프 컴포넌트

/* 
[ 구조정의 ]
Root>
section.vidswbox >
    ( h2.tit + <SwiperVid />) +
    ( section.vidbx > 
        div.playvid >
            h2.ifrtit + iframe + button.cbtn )
*/

// 비디오스와이프 CSS 불러오기
import "../../css/vid_swipe.css"
import { SwiperVid } from "../plugin/SwiperVid";

export function VidSwipe(props){
    // props.cat - 카테고리명

    // 비디오스와이프 카테고리별 타이틀
    const catTit = {
        main:"LATEST TRAILERS, CLIPS & MORE",
        movies:"TRAILERS, CLIPS AND MORE",
    }

    // 리턴코드 //////////////////
    return(
        <>
        {/* 모듈코드 */}
        <section className="vid-swbox">
            {/* 1. 모듈타이틀 */}
            <h2 className="tit">
                {catTit[props.cat]}
            </h2>
            {/* 2. 스와이퍼 컴포넌트 : SwiperVid
            -> 전달속성 cat은 데이터선택을 위한값 */}
            <SwiperVid cat={props.cat} />

            {/* 3. 비디오 재생창 */}
            <section className="vid-bx">
                {/* 비디오 중앙박스 */}
                <div className="play-vid">
                    {/* 비디오타이틀 */}
                    <h2 className="ifr-tit"></h2>
                    {/* 아이프레임 */}
                    <iframe src="" allow="autoplay"></iframe>
                    {/* 닫기버튼 */}
                    <button className="cbtn">×</button>
                </div>
            </section>
        </section>
        </>
    );

} /////////// VidSwipe 컴포넌트 ////////////