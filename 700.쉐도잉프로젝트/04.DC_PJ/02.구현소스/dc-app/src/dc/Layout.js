// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/

const Layout = () => {

    /* 
    sub:[{
        txt:"",
        link:"",
    }]
    
    */

    /* GNB메뉴 데이터구성하기 */
    const gnb_data = [
        {
            txt:"Home",
            link:"/">",
        },
        {
            txt:"CHARACTERS",
            link:"/ct",
        },
        {
            txt:"COMICS",
            link:"/co",
        },
        {
            txt:"MOVIES & TV",
            link:"/mv",
        },
        {
            txt:"GAMES",
            link:"/gm",
        },
        {
            txt:"NEWS",
            link:"/nw",
        },
        {
            txt:"VIDEO",
            link:"/vd",
        },
    ];

    return (
        <>
            {/* 1.상단영역 */}
            <header className="top">
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        {
                            gnb_data.map((v,i)=>
                                <li key={i}>
                                    <Link to={v.link}>{v.txt}</Link>
                                </li>
                            )
                        }

                    </ul>
                </nav>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
                All Site Content © &amp; TM DC, unless otherwise noted here.
                <br />
                All rights reserved.
            </footer>
        </>
    );
}; ////////// Layout 컴포넌트 ///////

// 내보내기
export default Layout;
