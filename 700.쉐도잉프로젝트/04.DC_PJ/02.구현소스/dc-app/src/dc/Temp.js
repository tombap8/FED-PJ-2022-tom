///  어떤 모듈 - 어떤.js
import $ from 'jquery';
import "./css/어떤.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function MenuBtn(){
    return(
        <>
        {/* 모듈코드 */}
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Temp;