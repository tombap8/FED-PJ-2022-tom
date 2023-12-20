// 무비페이지 메인 컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";


export function Series() {
    return(
        <>
        {/* 1. 무비페이지 배너 */}
        <Banner category="SERIES" />  
        {/* 2. 무비페이지 비디오 소개 */}
        <VidIntro cat="MOVIES" cls="on" />     
        {/* 3. 무비페이지 비디오 스와이프 */}
        <VidSwipe cat="movies" />
        </>
    )
} /////////////// Series 컴포넌트 ////////// 