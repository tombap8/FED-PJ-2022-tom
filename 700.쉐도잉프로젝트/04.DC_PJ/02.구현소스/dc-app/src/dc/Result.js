///  검색결과페이지 모듈 - Result.js
import $ from 'jquery';
import "./css/result.css";
import Search from './modules/Search';

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Result(){
    return(
        <>
        {/* 모듈코드 */}
        <h2>Search Result</h2>
        <Search />
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Result;