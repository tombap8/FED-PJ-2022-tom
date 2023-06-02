// DC Video 페이지 컴포넌트
import React from "react";
import isrc from "./ImgSrc";

const Video = () => {
    return(
        <>
            <h2>Video 페이지</h2>
            <iframe src={isrc.video} />
        </>
    );
}; /////////// Video //////////////

export default Video;