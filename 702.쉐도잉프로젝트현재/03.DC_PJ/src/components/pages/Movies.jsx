// 무비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Movies(){
    return(
        <>
            <VidIntro cat="MOVIES" cls="on" />
            <Banner category="MOVIES" />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////