// Pilot PJ 메인영역 공통 컴포넌트

import { MainCont } from "../pages/MainCont";
import { MenSub } from "../pages/MenSub";
import { StyleSub } from "../pages/StyleSub";
import { WomenSub } from "../pages/WomenSub";

// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea(props){
    // props.page 속성값으로 main/men/women/style
    return(
        <>
            {props.page=='main'&&<MainCont />}
            {props.page=='men'&&<MenSub />}
            {props.page=='women'&&<WomenSub />}
            {props.page=='style'&&<StyleSub />}
        </>
    );
} //////////////// MainArea 컴포넌트 //////////