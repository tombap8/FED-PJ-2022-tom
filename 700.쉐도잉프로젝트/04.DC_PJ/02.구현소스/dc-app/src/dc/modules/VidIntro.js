// VidIntro 컴포넌트 JS - VidIntro.js

import $ from 'jquery';
import "../css/vidintro.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function VidIntro(){
    return(
        <>
        {/* 모듈코드 */}
        <section>
            {/* 비디오파트 */}
            <div>
            <iframe src="{}" title="{}"></iframe>
            </div>
            {/* 타이틀파트 */}
            <div>
                <h3></h3>
                <h2></h2>
                <p></p>
                <p></p>
                {/* 링크있을경우 표시 */}
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default VidIntro;