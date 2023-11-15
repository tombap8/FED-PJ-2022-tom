// 비디오페이지 메인컨텐츠

import { isrc } from "../data/imgSrc";


export function Video(){
    return(
        <>
            <h1 style={{textAlign:'center'}}>
                비디오 페이지</h1>
            <iframe src={isrc.video} />
        </>
    )

} ////////////  Video 컴포넌트 ///////////