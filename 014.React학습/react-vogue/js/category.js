// 보그 PJ 카테고리 페이지 JS - category.js
import data from "cat";

/************************************************ 
    [1] 메인 카테고리 렌더링 컴포넌트 : Render
************************************************/
function Render() {
    // 네비게이션 상태훅
    const [showNav, setShowNav] = React.useState(null);

    // 파리미터 전달값 받기
    const params = new URLSearchParams(location.search);
    // 파라미터 중 특정키값 받기 : get(키이름)
    let catname = params.get("cat");
    console.log("pm키값:", catname);

    const [catName, setCatName] = React.useState(catname);

    console.log("할당된카테고리:", catName);

    // 객체 데이터 중 카테고리에 해당하는 데이터만 저장하기
    let seldata;
    // data 변수 -> cat.js의 데이터를 담은 변수임!
    // 내용이 객체니까 for in문 사용!
    for (const key in data) {
        if (key == catName) {
            seldata = data[key];
            console.log(data[key]);
        }
    }

    // 메뉴 데이터인 배열을 이용하여 메뉴를 만들어준다!
    const makeMenu = () => {
        const menuList = seldata["메뉴"];
        // 메뉴가 있을경우 메뉴 코드를 생성해서 리턴!
        if (menuList != "없음") {
            // 배열데이터의 값이 있는 동안 map()으로 돌아줌! 
            const hcode = menuList.map((item) => (
                <li>
                    <a href="#">{item}</a>
                </li>
            ));
            return <ul>{hcode}</ul>;
        } else {
            return "";
        }
    };

    // 선택 타이틀 찍어봄!!
    console.log(seldata["타이틀"]);

    ////////////////////////////////////
    //// 카테고리 이름 업데이트 함수 ////
    ////////////////////////////////////
    const updatePage = (cat) => {
        // console.log("와우!", cat);
        // console.log(catName);

        // 카테고리 이름 업데이트하기!
        setCatName(cat);
        //-> useState 특성으로 전체갱신함!

        // a요소 기본이동막기
        window.event.preventDefault();
    }; //////////// updatePage ////////////

    // GNB메뉴를 #cont안에 만들었으므로 CSS 디자인변경함!
    const gnbStyle = {
        marginTop: "-46px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 2px rgb(0 0 0 / 15%)",
    };

    // 구조변경상 메인 영역을 위로 올리기!
    let contEle = document.querySelector("#cont");
    contEle.style.position = "relative";
    contEle.style.zIndex = "99999";
    contEle.style.boxShadow = "0 2px 2px rgb(0 0 0 / 15%)";

    // Render() 컴포넌트 리턴 코드 ////////////////
    return (
        <React.Fragment>
            {/* GNB메뉴를 같은 컴포넌트에 넣어야 useState적용됨! */}
            <nav className="gnb" style={gnbStyle}>
                <ul>
                    <li>
                        <a href="#" onClick={() => updatePage("fashion")}>
                            FASHION
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("beauty")}>
                            BEAUTY
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("living")}>
                            LIVING
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("people")}>
                            PEOPLE
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("video")}>
                            VIDEO
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("runway")}>
                            RUNWAY
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("time & gem")}>
                            TIME &amp; GEM
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => updatePage("shopping")}>
                            SHOPPING
                        </a>
                    </li>
                    <li>
                        {/* <!-- 돋보기 검색버튼 --> */}
                        <a href="#" class="fi fi-search">
                            <span class="ir">search</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <main className={"cont ibx " + seldata["경로"]}>
                {/* <!-- 2-1.카테고리 페이지 탑영역 --> */}
                <header className="ctop">
                    {/* <!-- 2-1-1.서브타이틀 --> */}
                    <h2 className="stit">{seldata["제목"]}</h2>
                    {/* <!-- 2-1-2.서브메뉴(LNB:Local Navigation Bar) --> */}
                    <nav className="lnb" style={showNav}>
                        {makeMenu()}
                    </nav>
                </header>
                {/* <!-- 2-2.카테고리 컨텐츠박스 --> */}
                {/* 하단 컨텐츠 타이틀 출력은 별도의 컴포넌트 구성해서 출력함! */}
                <MakeTitle tit={seldata["타이틀"]} />
            </main>
        </React.Fragment>
    ); /// return ///
} //////////////// Render 컴포넌트 ////////////////

/********************************************************************* 
    [2] MakeTitle 컴포넌트 : 하단 컨텐츠 타이틀 코드를 만드는 컴포넌트
*********************************************************************/
function MakeTitle(props) {
    return (
        <React.Fragment>
            {/* <!-- 유형2:컨텐츠박스1 --> */}
            <section className="pt2 rbx">
                <div className="rbxIn fbx">
                    <div className="cbx bgi bg1-1">
                        {/* HTML태그 출력이라면 dangerouslySetInnerHTML를 사용함!  */}
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[0] }}
                        ></h2>
                        {/* 태그없는 글자의 출력이라면 아래와 같은 속성을 출력함! */}
                        {/* <h2>{props.tit[1]}</h2> */}
                    </div>
                    <div className="cbx bgi bg1-2">
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[1] }}
                        ></h2>
                        {/* <h2>{props.tit[1]}</h2> */}
                    </div>
                    <div className="cbx bgi bg1-3">
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[2] }}
                        ></h2>
                        {/* <h2>{props.tit[2]}</h2> */}
                    </div>
                </div>
            </section>
            {/* <!-- 유형2:컨텐츠박스2 --> */}
            <section className="pt2 rbx">
                <div className="rbxIn fbx">
                    <div className="cbx bgi bg2-1">
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[3] }}
                        ></h2>
                        {/* <h2>{props.tit[3]}</h2> */}
                    </div>
                    <div className="cbx bgi bg2-2">
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[4] }}
                        ></h2>
                        {/* <h2>{props.tit[4]}</h2> */}
                    </div>
                    <div className="cbx bgi bg2-3">
                        <h2
                            dangerouslySetInnerHTML={{ __html: props.tit[5] }}
                        ></h2>
                        {/* <h2>{props.tit[5]}</h2> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
} ///////////// MakeTitle 컴포넌트 ////////////

/////////// Render 컴포넌트 화면출력 //////////////////////////////
const root = ReactDOM.createRoot(document.querySelector("#cont"));
root.render(<Render />);
//////////////////////////////////////////////////////////////////
const root2 = ReactDOM.createRoot(document.querySelector(".gnb"));
root2.render(<div></div>);

//===============================================================
