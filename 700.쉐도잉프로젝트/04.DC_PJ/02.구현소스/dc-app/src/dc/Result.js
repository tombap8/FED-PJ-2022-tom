///  검색결과페이지 모듈 - Result.js
import $ from 'jquery';
import "./css/result.css";
import Search from './modules/Search';
import { useLocation } from "react-router-dom"


// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Result(){
    
    const loc = useLocation();
    // 전달키워드
    const kw = loc.state.keyword;
    console.log("전달키워드:",kw);

    return(
        <>
        {/* 모듈코드 */}
        <h2 className='tit' style={{textAlign:'center'}}>
            Search Result
        </h2>
        <Search skw={kw} />
        
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Result;