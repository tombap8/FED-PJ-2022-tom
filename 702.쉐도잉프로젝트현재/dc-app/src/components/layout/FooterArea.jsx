// 하단영역 컴포넌트
import { Logo } from "../modules/Logo"

// 하단 링크 
import { bmData } from "../data/bmenu"

export function FooterArea() {
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
                            </li>)
                        }
                    </ol>
                </li>
            </ul>
        </footer>
    )
} //////// FooterArea 컴포넌트 //////////