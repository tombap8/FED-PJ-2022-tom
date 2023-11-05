// 보그 PJ 카테고리 페이지 JS - category.js

// 링크 시스템 JS 가져오기 //////
import { makeLink } from "./linksys2.js";

// 카테고리 데이터 가져오기 /////
import catData from "./data/category_data.js";

// console.log(catData);

/////////// 상단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : TopArea
  기능 : 상단영역 메뉴, 로그 등 요소 구성
*******************************************/
function TopArea() {

  // 컴포넌트 요소 랜더링 직전 호출구역
  // -> 컴포넌트는 모두 만들어진 후 화면뿌리기 직전(가랜더랭)
  React.useLayoutEffect(makeLink);

  return (
    <React.Fragment>
      {/* 1-1.상단메뉴 */}
      <div className="tmenu">
        {/* 1-1-1.sns박스 */}
        <div className="sns">
          <a href="#" className="fi fi-instagram">
            <span className="ir">인스타그램</span>
          </a>
          <a href="#" className="fi fi-facebook">
            <span className="ir">페이스북</span>
          </a>
          <a href="#" className="fi fi-twitter">
            <span className="ir">트위터</span>
          </a>
          <a href="#" className="fi fi-youtube-play">
            <span className="ir">유튜브</span>
          </a>
          <a href="#" className="fi cas">
            <span className="ir">카카오스토리</span>
          </a>
        </div>
        {/* 1-1-2.사이드메뉴 */}
        <div className="sideMenu">
          <ul className="smbx">
            <li>
              <a href="#">SIDE MENU</a>
              {/* 서브메뉴 */}
              <ol className="smsub">
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">광고 및 제휴</a>
                </li>
                <li>
                  <a href="#">개인정보 처리방침</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
      {/* 1-2.로고박스 */}
      <h1 className="logo">
        <a href="#">
          <img src="./images/mlogo.png" alt="메인로고" />
        </a>
      </h1>
      {/* 1-3.GNB박스 */}
      <nav className="gnb">
        <ul>
          <li>
            <a href="#">FASHION</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">LIVING</a>
          </li>
          <li>
            <a href="#">PEOPLE</a>
          </li>
          <li>
            <a href="#">VIDEO</a>
          </li>
          <li>
            <a href="#">RUNWAY</a>
          </li>
          <li>
            <a href="#">TIME &amp; GEM</a>
          </li>
          <li>
            <a href="#">SHOPPING</a>
          </li>
          <li>
            {/* 돋보기 검색버튼 */}
            <i href="#" className="fi fi-search">
              <span className="ir">search</span>
            </i>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
} //////////// TopArea 컴포넌트 /////////////

// 상단영역 출력하기 /////////////////
ReactDOM.render(<TopArea />, 
document.querySelector(".top-area"));
/////////////////////////////////////

//////////////////////////////////////////////////////

////// 카테고리 페이지 메인 컴포넌트 ///////
/******************************************* 
  컴포넌트명 : MainCategory
  기능 : 아이템 페이지 타이틀 + 리스트 요소구성
*******************************************/
function MainCategory() {

  // 우선 URL로 넘어온 키값을 가져옴!
  // 파라미터 전달값 받기 : 파라미터JS전담객체는?
  // -> URLSearchParams(전체URL)
  const params = new URLSearchParams(location.search);

  // 파라미터중 특정키 받기 : get(키이름) -> 키이름은 'cat'
  const catName = decodeURIComponent(params.get('cat'));
  // 'time & gem' decodeURIComponent로 변환!

  console.log(
    'URL',location.search,
    '\n파라미터:',params,
    '\n키값:',catName);

  // 카테고리 해당 데이터 선택하기
  // 카테고리 전체 객체 데이터 중 해당항목 선택
  const selData = catData[catName];

  console.log(selData);

  return(
    <React.Fragment>
      <SubTitle 
        tit={selData['제목']} 
        menu={selData['메뉴']} />
      <ItemList 
        cname={selData['경로']} 
        tit={selData['타이틀']} />
    </React.Fragment>
  );

} ///////// MainCategory 컴포넌트 /////////////

// 메인영역 출력하기 ////////////////////
ReactDOM.render(<MainCategory />, 
document.querySelector(".main-area"));
///////////////////////////////////////

////// 메인 컴포넌트 하위 서브타이틀 컴포넌트 /////
/******************************************* 
  컴포넌트명 : SubTitle
  기능 : 서브 타이틀 요소구성
*******************************************/
function SubTitle(props){ 
  // tit - 서브타이틀 / menu - 서브메뉴

  // 서브메뉴 있을경우 li데이터 생성하기
  // 전달변수 data에 들어오는 값은 메뉴 배열임!
  // 배열.map(v=>코드) -> html코드 생성후 리턴됨!
  const makeList = (data) => data.map(v=>
      <li>
        <a href="#">{v}</a>
      </li>
    ); ///////// makeList 함수 ////////

    // -> 오리지널 JS map()문법은 배열을 다시 리턴함
    // JS에서는 배열.map().join('') 로 사용했음
    // -> 리액트에서는 리액트용 map()을 다시 구성하여
    // 바로 html코드를 리턴함! join() 불필요!!!

  return(
        // 2-1. 카테고리 페이지 상단영역
        <header className="cat-top-area">
          {/* 2-1-1. 서브타이틀 */}
          <h2 className="cat-tit">{props.tit}</h2>
          {/* 2-1-2. 서브메뉴(LNB:Local Navigation Bar)
          -> 메뉴 데이터 값이 '없음'이 아닐때만 생성됨! */}
          {
            props.menu!='없음' &&
            <nav className="lnb">
              <ul>
                {makeList(props.menu)}
              </ul>
            </nav>

          }
        </header>
  );

} /////////////// SubTitle 컴포넌트 //////////////

////// 메인 컴포넌트 하위 리스트 컴포넌트 /////
/******************************************* 
  컴포넌트명 : ItemList
  기능 : 카테고리 아이템별 리스트요소구성
*******************************************/
function ItemList(props){
  // cname - 카테고리명(클래스명넣기)
  // tit - 리스트 타이틀

  const retCode = x => dangerouslySetInnerHTML()

  return(
    // 2-2. 카테고리 페이지 컨텐츠영역
    // html출력일 경우 dangerouslySetInnerHTML을 사용함!
    <div className={"cat-cont-area "+props.cname}>
      <section className="pt2">
        <div className="cbx bgi bg1-1">
          <h2 dangerouslySetInnerHTML={{__html:props.tit[0]}}></h2>
        </div>
        <div className="cbx bgi bg1-2">
          <h2>{props.tit[1]}</h2>
        </div>
        <div className="cbx bgi bg1-3">
          <h2>{props.tit[2]}</h2>
        </div>
      </section>
      <section className="pt2">
        <div className="cbx bgi bg2-1">
          <h2>{props.tit[3]}</h2>
        </div>
        <div className="cbx bgi bg2-2">
          <h2>{props.tit[4]}</h2>
        </div>
        <div className="cbx bgi bg2-3">
          <h2>{props.tit[5]}</h2>
        </div>
      </section>
    </div>
  );

} /////////////// ItemList 컴포넌트 //////////////


