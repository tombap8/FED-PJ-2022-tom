// DC Video 페이지 컴포넌트
import React from "react";
import isrc from "./ImgSrc";
import VidIntro from "./modules/VidIntro";

const Video = () => {
    return(
        <>
            <h2>Video 페이지</h2>            
            <VidIntro pg="VIDEO" mm="on" />

        </>
    );
}; /////////// Video //////////////

export default Video;