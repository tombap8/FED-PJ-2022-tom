// 하단영역 컴포넌트

import { Logo } from "../modules/Logo";

// 하단링크정보 데이터 불러오기
import { bmData } from "../data/bmenu";
import { memo } from "react";
import Weather from "../modules/Weather";

// 아주 간단한 컴포넌트 메모이제이션 하기!
// 1. 일반 함수형 컴포넌트
// -> export function 컴포넌트명(){}
// 2. 변수 할당 함수형 컴포넌트
// -> export const 컴포넌트명 = ()=>{}
// 3. 위의 2번을 메모이제이션한다!
// -> export const 컴포넌트명 = React.memo(()=>{})

// export function FooterArea(){
// export const FooterArea = () => {
export const FooterArea = memo(() => {
    
  // 컴포넌트 호출확인
  console.log('하단영역이양~!');

    // 리턴 코드 ///////////////////
    return(
        <footer className="info">
            <ul>
                <li>
                    <Logo logoStyle="bottom" />
                </li>
                <li>
                    {/* 하단링크박스 */}
                    <ol className="bmenu">
                        {
                            bmData.map((v,i)=>
                                <li key={i}>
                                    <a href={v.link} target="_blank">
                                        {v.txt.toUpperCase()}
                                    </a>
                                </li>
                            )
                        }
                    </ol>
                </li>
                <li>
                © & ™ DC. ALL RIGHTS RESERVED
                </li>
            </ul>
            {/* 날씨정보 컴포넌트 */}
            <Weather />
        </footer>
    )

}); ///////// FooterArea 컴포넌트 /////////