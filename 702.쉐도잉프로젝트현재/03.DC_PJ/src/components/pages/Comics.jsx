// 코믹스페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Comics(){
    return(
        <>
            <VidIntro cat="COMICS" cls="on" />
            <Banner category="COMICS" />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////