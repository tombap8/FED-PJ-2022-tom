// VidIntro 컴포넌트 JS - VidIntro.js

import $ from 'jquery';
import "../css/vidintro.css";
import vidintro_data from '../data/vidintro';


// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function VidIntro(props){ 
    // props.pg - 해당페이지 데이터속성명

    // 데이터 선택하기
    const sdt = vidintro_data[props.pg];


    return(
        <>
        {/* 모듈코드 */}
        <section className='vidbox'>
            {/* 비디오파트 */}
            <div className='vb1'>
            <iframe src={sdt.vsrc} title={sdt.btit}></iframe>
            </div>
            {/* 타이틀파트 */}
            <div className='vb2'>
                <h3>{sdt.stit}</h3>
                <h2>{sdt.btit}</h2>
                <p>{sdt.sum}</p>
                <p>{sdt.desc}</p>
                {/* 링크있을경우 표시 */}
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default VidIntro;