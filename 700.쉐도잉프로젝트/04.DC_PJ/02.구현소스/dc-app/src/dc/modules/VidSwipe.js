///  VidSwipe 모듈 - VidSwipe.js
import $ from 'jquery';
import "../css/vidswipe.css";
import SwiperVid from '../plugin/SwiperVid';

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function VidSwipe(props){
    // props.pg - 페이지별 데이터구분
    return(
        <>
        {/* 모듈코드 */}

        {/* 1. 스와이퍼 컴포넌트 */}
        <SwiperVid name="나는" />

        {/* 2. 비디오 재생창 */}
        <section className='playvid'>
            <iframe src=''></iframe>
            <button className='cbtn'>×</button>
        </section>

        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default VidSwipe;