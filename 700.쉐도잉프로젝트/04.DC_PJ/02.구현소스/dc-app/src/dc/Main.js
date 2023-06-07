// DC 페인 페이지 컴포넌트
import Ban from "./modules/Ban";
import MenuBtn from "./modules/MenuBtn";
import VidIntro from "./modules/VidIntro";

const Main = () => {
    return (
        <>
            {/* 1.배너모듈 */}
            <Ban cat="main" />
            {/* 2. 메뉴버튼모듈 */}
            <MenuBtn />
            {/* 3. 비디오소개모듈 */}
            <VidIntro />
        </>
    );
}; /////////// Main //////////////

export default Main;
