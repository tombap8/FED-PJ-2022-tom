// 코믹스페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Comics(){
    return(
        <>
            <Banner category="COMICS" />
            <VidIntro cat="COMICS" cls="on" />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////