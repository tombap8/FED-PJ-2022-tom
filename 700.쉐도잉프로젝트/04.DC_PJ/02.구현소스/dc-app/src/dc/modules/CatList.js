///  캐릭터리스트 모듈 - CatList.js
import $ from 'jquery';
import "./css/catlist.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function CatList(){
    return(
        <>
        {/* 모듈코드 */}
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default CatList;