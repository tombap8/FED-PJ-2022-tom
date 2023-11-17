// DC.com 로고 컴포넌트
import React from "react";
import { isrc } from "../data/imgSrc";

export const Logo = () => {
    // 객체형 스타일 적용
    const myStyle = {
        width:"81px",
        height:"81px",
        backgroundImage:"linear-gradient(45deg, #88f62f, #fa8104)",
        borderRadius:"50%"
    };

    // 코드 리턴
    return (
        <h1 style={myStyle}>
            <img src={isrc.logo} alt="DC logo"
            style={{width:'81px'}} />
        </h1>
    )

}; ////////////// Logo ///////////////