// DC Comics 페이지 컴포넌트
import React from "react";
import VidIntro from "./modules/VidIntro";

const Comics = (props) => {
    {console.log(props.sub)}


    // 타이틀 데이터 선택하기
    const tit_data = [
        " LATEST COMICS & GRAPHIC NOVELS  ",
        "DC UNIVERSE INFINITE",
        "ALL COMICS SERIES",
    ];

    return(
        <>
            <h1>{tit_data[props.sub]}</h1>
            <VidIntro pg="COMICS" mm="on" />
        </>
    );
}; /////////// Comics //////////////

export default Comics;