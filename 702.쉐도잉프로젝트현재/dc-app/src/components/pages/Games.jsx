// 게임페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Games(){
    return(
        <>            
            <Banner category="GAMES" />
            <VidIntro cat="GAMES" cls="on" />
        </>
    )

} ////////////  Games 컴포넌트 ///////////