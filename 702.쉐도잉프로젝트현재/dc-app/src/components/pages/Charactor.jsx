// 캐릭터페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { CatList } from "../modules/CatList";

export function Character(){
    return(
        <>
            {/* 1. 배너 컴포넌트 */}
            <Banner category="CHARACTERS" />
            {/* 2.  */}
            {/* 3. 캐릭터 리스트 컴포넌트 */}
            <CatList />
        </>
    )

} ////////////  Character 컴포넌트 ///////////