// 상단영역 컴포넌트
// GNB 데이터
import { Link } from "react-router-dom";
import { Logo } from "../contents/Logo";
import { menu } from "../data/gnb";


/******************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
  -> 여기서는 MainArea 컴포넌트에 출력!
*******************************************************/
export function TopArea() {
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            <li>
              <Logo />
            </li>
            {menu.map((v, i) => (
              <li key={i}>
                <Link to={v.link}>{v.txt}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

/* 
  map()을 사용하여 태그를 생성할때
  데이터의 유일키를 key속성으로 만들지 않으면
  아래와 같은 에러가 발생함!
  (이유:구별되는 항목으로 나중에 업데이트시
      이용할 수 있도록 리액트에서 강제하고 있음!)
  Warning: Each child in a list 
  should have a unique "key" prop.
  */
