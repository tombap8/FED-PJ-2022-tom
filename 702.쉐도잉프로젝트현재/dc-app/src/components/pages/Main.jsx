// 메인페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { CatList } from "../modules/CatList";
import { SecIntro } from "../modules/SecIntro";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";

export function Main(){
    // cat 속성으로 메뉴분류 전달
    return(
        <> 
            {/* 1. 배너 컴포넌트 */}           
            <Banner 
                category={
                "main"+Math.ceil(Math.random()*3)
                } />
            {/* 1~3 중 임의의 난수를 발생함 
            Math.ceil(Math.random()*3)
            결과적으로 
            'main1'/'main2'/'main3'중 하나를 불러온다! */}

            {/* 2. 섹션소개 컴포넌트 */}
            <SecIntro />

            {/* 3. 비디오소개 컴포넌트:
            cat - 페이지분류명 / cls - 클래스명('on'/'off') */}
            <VidIntro cat="main" cls="off" />

            {/* 4. 비디오스와이프 컴포넌트 */}
            <VidSwipe cat="main" />

            {/* 5. 캐릭터 리스트 컴포넌트 */}
            <CatList />

            {/* 6. 캐릭터 배너 컴포넌트 */}
            <Banner category="CHARACTERS" />
        </>
    )

} ////////////  Main 컴포넌트 ///////////