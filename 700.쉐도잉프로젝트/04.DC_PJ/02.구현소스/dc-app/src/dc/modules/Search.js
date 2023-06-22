///  검색 모듈 - Search.js
import $ from 'jquery';
import "./css/search.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Search(){
    return(
        <>
        {/* 모듈코드 */}
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Search;