// 상단영역 컴포넌트
// GNB 데이터
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../modules/Logo";
import { menu } from "../data/gnb";

// 컨텍스트 API
import { dcCon } from "../modules/dcContext";

// 제이쿼리
import $ from 'jquery';

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

/******************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
  -> 여기서는 MainArea 컴포넌트에 출력!
*******************************************************/
export function TopArea() {
  // 컨텍스트 API사용
  const myCon = useContext(dcCon);

  // 검색 관련 함수들 ////////////
  // 1. 검색창 보이기함수
  const showSearch = () => {
    // 1. 검색창 보이기
    $('.searchingGnb').show();
    // 2. 입력창에 포커스 보내기
    $('#schinGnb').focus();
  }; //////////// showSearch 함수 //////////

  // 2. 입력창에 엔터키를 누르면 검색함수 호출!
  const enterKey = e => {
    // console.log(e.target);
    // 엔터키는 'Enter'문자열을 리턴함!
    if(e.key === 'Enter'){ 
      // 입력창의 입력값 읽어오기 : val() 사용!
      let txt = $(e.target).val().trim();
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달!)
      if(txt!=''){         
        // 입력창 비우기 + 부모박스 닫기
        $(e.target).val('').parent().hide();
        // 검색 보내기
        goSearch(txt);
      } //// if ///////
    } ///////// if ///////
  }; ////////// enterKey 함수 ////////////

  // 3. 검색 페이지로 검색어와 함께 이동하기
  const goSearch = (txt) => { // txt - 검색어
    console.log('나는 검색하러 간다규~!!!');
    // 라우터 이동함수로 이동하기 : 컨텍스트 API 사용
    myCon.chgPage('/schpage',{state:{keyword:txt}})
  }; //////////// goSearch 함수 /////////////


  // 리턴코드 ///////////////////////////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <Logo logoStyle="top" />
            </li>
            {/* 2. GNB메뉴 데이터기반으로 li태그 생성하기 */}
            {menu.map((v, i) => (
              <li key={i}>
                {
                  // 하위메뉴가 있으면 일반a요소에 출력
                  // 없으면 Link 라우팅 출력
                  v.sub ? (
                    <a href="#">{v.txt}</a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )
                }
                {
                  // 서브메뉴 데이터가 있으면 하위 그리기
                  v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }
              </li>
            ))}
            {/* 3. 검색,회원가입,로그인 링크 */}
            <li style={{ marginLeft: "auto" }}>
              {/* 검색입력박스 */}
              <div className="searchingGnb">
                {/* 검색버튼 돋보기 아이콘 */}
                <FontAwesomeIcon
                  icon={faSearch}
                  className="schbtnGnb"
                  title="Open search"
                />
                {/* 입력창 */}
                <input
                  id="schinGnb"
                  type="text"
                  placeholder="Filter by Keyword"
                  onKeyUp={enterKey}
                />
              </div>

              {/* 검색기능링크 - 클릭시 검색창보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            {/* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */}
            <li>
              <Link to="/member">JOIN US</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
          {/* 모바일용 햄버거 버튼 */}
          <button className="hambtn"></button>
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
