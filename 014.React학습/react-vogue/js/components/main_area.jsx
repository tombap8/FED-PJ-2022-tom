////// 카테고리 페이지 메인 컴포넌트 ///////

// 카테고리 데이터 가져오기 /////
import catData from "./data/category_data.js";

// console.log(catData);

/******************************************* 
  컴포넌트명 : MainCategory
  기능 : 아이템 페이지 타이틀 + 리스트 요소구성
*******************************************/
export default function MainCategory(props) {
  
  // 카테고리 해당 데이터 선택하기
  // 카테고리 전체 객체 데이터 중 해당항목 선택
  const selData = catData[props.category];

  console.log(selData);

  const chgMenu = () => {};

  return (
    <div id="main-area">
      <main class="main-area ibx">
        <SubTitle tit={selData["제목"]} menu={selData["메뉴"]} />
        <ItemList cname={selData["경로"]} tit={selData["타이틀"]} />
      </main>
    </div>
  );
} ///////// MainCategory 컴포넌트 /////////////

// 메인영역 출력하기 ////////////////////
// ReactDOM.render(<MainCategory />, document.querySelector(".main-area"));
///////////////////////////////////////

////// 메인 컴포넌트 하위 서브타이틀 컴포넌트 /////
/******************************************* 
    컴포넌트명 : SubTitle
    기능 : 서브 타이틀 요소구성
  *******************************************/
function SubTitle(props) {
  // tit - 서브타이틀 / menu - 서브메뉴

  // 서브메뉴 있을경우 li데이터 생성하기
  // 전달변수 data에 들어오는 값은 메뉴 배열임!
  // 배열.map(v=>코드) -> html코드 생성후 리턴됨!
  const makeList = (data) =>
    data.map((v) => (
      <li>
        <a href="#">{v}</a>
      </li>
    )); ///////// makeList 함수 ////////

  // -> 오리지널 JS map()문법은 배열을 다시 리턴함
  // JS에서는 배열.map().join('') 로 사용했음
  // -> 리액트에서는 리액트용 map()을 다시 구성하여
  // 바로 html코드를 리턴함! join() 불필요!!!

  return (
    // 2-1. 카테고리 페이지 상단영역
    <header className="cat-top-area">
      {/* 2-1-1. 서브타이틀 */}
      <h2 className="cat-tit">{props.tit}</h2>
      {/* 2-1-2. 서브메뉴(LNB:Local Navigation Bar)
            -> 메뉴 데이터 값이 '없음'이 아닐때만 생성됨! */}
      {props.menu != "없음" && (
        <nav className="lnb">
          <ul>{makeList(props.menu)}</ul>
        </nav>
      )}
    </header>
  );
} /////////////// SubTitle 컴포넌트 //////////////

////// 메인 컴포넌트 하위 리스트 컴포넌트 /////
/******************************************* 
    컴포넌트명 : ItemList
    기능 : 카테고리 아이템별 리스트요소구성
  *******************************************/
function ItemList(props) {
  // cname - 카테고리명(클래스명넣기)
  // tit - 리스트 타이틀

  // 태그처리 구분 코드생성 함수
  const makeCode = (data) => {
    console.log("배열인가?", Array.isArray(data));
    // 배열데이터인 경우 ////
    if (Array.isArray(data)) {
      return (
        <h2>
          <small>{data[0]}</small>
          <br />
          {data[1]}
        </h2>
      );
    } /////// if ////////
    else {
      // 배열이 아닌경우 ////
      return <h2>{data}</h2>;
    } /////// else ///////
  }; ////////// makeCode함수 ////////////

  return (
    // 2-2. 카테고리 페이지 컨텐츠영역
    // html출력일 경우 dangerouslySetInnerHTML을 사용함!
    // <요소 dangerouslySetInnerHTML={{__html:값}}>
    // <h2 dangerouslySetInnerHTML={{__html:props.tit[0]}}>
    // -> script태그와 같은 위험요소가 실행될 수 있으므로
    // 데이터에서 직접적으로 태그를 넣는 방법을 비추천함!
    // -> 개선: 태그 데이터를 제거하고 데이터화 함!
    // -> runway 데이터를 배열형으로 만들고 첫번째 데이터를
    // small태그로 싸고 뒤에 br태그로 줄바꿈한 구성을
    // 컴포넌트에서 구성하도록 변경함!

    <div className={"cat-cont-area " + props.cname}>
      <section className="pt2">
        <div className="cbx bgi bg1-1">{makeCode(props.tit[0])}</div>
        <div className="cbx bgi bg1-2">{makeCode(props.tit[1])}</div>
        <div className="cbx bgi bg1-3">{makeCode(props.tit[2])}</div>
      </section>
      <section className="pt2">
        <div className="cbx bgi bg2-1">{makeCode(props.tit[3])}</div>
        <div className="cbx bgi bg2-2">{makeCode(props.tit[4])}</div>
        <div className="cbx bgi bg2-3">{makeCode(props.tit[5])}</div>
      </section>
    </div>
  );
} /////////////// ItemList 컴포넌트 //////////////
