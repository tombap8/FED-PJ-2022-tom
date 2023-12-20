// DC PJ 검색결과 페이지

import { useLocation } from "react-router-dom";
import { Searching } from "../modules/Searching";

export function SchPage() {
    // 라우터 전달값 받기
    const loc = useLocation();
    let keyword ;
    // 전달값이 있을 경우 키워드를 읽어오게 함!
    if(loc.state) keyword = loc.state.keyword;
    console.log('검색어: ',keyword);
    
    return(
        <>
            <h1 className="tit">Search Result</h1>
            <Searching kword={keyword} />
        </>
    )
} ///////////// SchPage 컴포넌트 /////////////////