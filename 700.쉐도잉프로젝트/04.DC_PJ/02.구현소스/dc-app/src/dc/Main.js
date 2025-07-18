// DC 페인 페이지 컴포넌트
import Ban from "./modules/Ban";
import CatSwipe from "./modules/CatSwipe";
import MenuBtn from "./modules/MenuBtn";
import VidIntro from "./modules/VidIntro";
import VidSwipe from "./modules/VidSwipe";

const Main = () => {

    return (
        <>
            {/* 1.배너모듈 : 랜덤수로 데이터선택변경 */}
            <Ban cat={"main"+Math.ceil(Math.random()*3)} />
            {/* 2. 메뉴버튼모듈 */}
            <MenuBtn />
            {/* 3. 비디오소개모듈 */}
            <VidIntro pg="main" mm="" />
            {/* 4. 비디오스와이프모듈 */}
            <VidSwipe 
            pg="main" 
            tit="LATEST TRAILERS, CLIPS & MORE" />
            {/* 5. 캐릭터메뉴스와이프모듈 */}
            <CatSwipe 
            tit="WHO'S WHO: THE JUSTICE LEAGUE" />
            {/* 6. 배너모듈(캐릭터) */}
            <Ban cat="CHARACTERS" />
            {/* 7. 메뉴스와이프모듈 */}
            {/* 8. 메인하단모듈 */}
        </>
    );
}; /////////// Main //////////////

export default Main;
