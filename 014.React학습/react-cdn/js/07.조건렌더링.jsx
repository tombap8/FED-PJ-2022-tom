///////////////////////////////////////
// 07. 조건 렌더링 + 리스트 렌더링 JSX //
///////////////////////////////////////

// 리액트에서는 조건부로 구성요소를 렌더링 할 수 있다!

////////////////////////////////////////
// 1. if문을 사용하여 조건부 렌더링하기 //
////////////////////////////////////////

// 선택적으로 로딩하도록 컴포넌트 2개만들기

// 1번 컴포넌트
function MakeDev(){
    return <h1>나는 개발자야!</h1>;
} ////////// MakeDev ///////////////

// 2번 컴포넌트
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
} ////////// LostDev ///////////////

// 3번 컴포넌트
function MakeImg(props){
    return <img 
        src={props.isrc} 
        alt={props.ialt} 
        title={props.ialt} 
    />;
}

// 출력 메인 컴포넌트 //////
// 위의 2가지 컴포넌트 중 선택적으로 출력한다!
function Developer(props){ // 호출시 전달되는 속성 props
    const isNow = props.isDev; // true/false
    // 조건문
    if(isNow){
        return( 
            <React.Fragment>
                {/* MakeDev 컴포넌트 선택출력 */}
                <MakeDev />
                <MakeImg 
                    isrc={props.isrc} 
                    ialt={props.ialt} />
            </React.Fragment>
        );
    }

    // else문 없이도 if문에 들어가면
    // return 때문에 컴포넌트를 나감!
    return( 
        <React.Fragment>
            {/* LostDev 컴포넌트 선택출력 */}
            <LostDev />
            <MakeImg 
                isrc={props.isrc} 
                ialt={props.ialt} />
        </React.Fragment>
    );

} //////////// Developer 컴포넌트 ///////////

// 이미지경로 배열
const wisrc = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

// 컴포넌트 호출하기1!
ReactDOM.render(
<Developer 
isDev={true} 
isrc={wisrc[0]}
ialt="프론트엔드 개발자 공유입니다!" />,
document.querySelector("#root1"));

// 컴포넌트 호출하기2!
ReactDOM.render(
<Developer 
isDev={false} 
isrc={wisrc[1]}
ialt="주먹왕 마동석입니다!" />,
document.querySelector("#root2"));

/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/

// 2-1. 제목을 찍기위한 타이틀 컴포넌트
function Title(props){ // 컴포넌트 호출시 속성으로 tit셋팅!
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>
} /////////// Title 컴포넌트 /////////////

// 음식리스트
const foods = ["스파게티","짜파게티","냉면","짜장면","마라탕"];
// const foods = [];

// 2-2. 반복리스트를 위한 컴포넌트 /////
function FoodList(props){// 음식명을 fname담아서 보내준다!
    return <li>개발자는 {props.fname} 좋아해!</li>
} //////////// FoodList 컴포넌트 ////////////////

// 2-3. 개발자 선호 음식 리스트 출력 컴포넌트 ////
function WishList(props){ // wlist속성에 담아 보내준다!
    // 위시리스트 담기
    const myfood = props.wlist;
    // 코드리턴
    return(
        <React.Fragment>
            <Title tit="음식" />
            {/* 음식 위시리스트의 길이가 0보다 클때만 출력 */}
            {
                myfood.length > 0 &&
                <div>
                    <h2>
                        개발자가 좋아하는 음식은 모두 
                        {myfood.length}가지 입니다!
                    </h2>
                    <ul>
                        {
                            // 배열변수.map() 메서드사용!
                            // map(변수=>{표현식})
                            // 변수는 화살표함수 안으로 배열값전달
                            myfood.map(x=> <FoodList fname={x} /> )
                        }
                    </ul>
                </div>
            }
            {/* 다른 경우출력은 별도의 JSX출력 중괄호구역에 코딩 */}
            {
                myfood.length == 0 &&
                <h2>아직 개발자음식 리스트가 업데이트 되지 않았습니다!</h2>
            }
        </React.Fragment>
    );
} /////////// WishList 컴포넌트 //////////////////


// 컴포넌트 출력하기
ReactDOM.render(<WishList wlist={foods} />,
document.querySelector("#root3"));


///////// 좀 더 복잡한 리스트를 출력하는 컴포넌트 /////////

// 전달할 배열변수 ///
const movs = [
    {year:"2021",mtit:"모가디슈"},
    {year:"2022",mtit:"범죄도시2"},
    {year:"2023",mtit:"가디언즈 오브 갤럭시3"},
];

// 개발자가 좋아하는 영화 - 찍기!
// 컴포넌트 구성하여 찍기

/* 
    [ 출력형태 ]
    👨‍🔧개발자👩‍🔧가 좋아하는 영화
    개발자가 좋아하는 영화는 최근 3년간 아래와 같습니다!
    2021년도 영화1
    2022년도 영화2
    2023년도 영화3
*/

// 2-2. 반복리스트를 위한 컴포넌트 /////
function MovieList(props){// year - 영화개봉년도 / mname - 영화명
    return <li>{props.year}년도 {props.mname}</li>
} //////////// MovieList 컴포넌트 ////////////////

// 2-3. 개발자 선호 영화 리스트 출력 컴포넌트 ////
function WishList2(props){ // wlist속성에 담아 보내준다!
    // 위시리스트 담기
    const mymv = props.wlist;
    // 코드리턴
    return(
        <React.Fragment>
            <Title tit="영화" />
            {/* 영화 위시리스트의 길이가 0보다 클때만 출력 */}
            {
                mymv.length > 0 &&
                <div>
                    <h2>
                        개발자가 좋아하는 영화는 
                        최근 {mymv.length}년간 아래와 같습니다!
                    </h2>
                    <ul>
                        {
                            // 배열변수.map() 메서드사용!
                            // map(변수=>{표현식})
                            // 변수는 화살표함수 안으로 배열값전달
                            // 배열값으로 객체가 들어가 있으므로
                            // 각 배열값은 객체의 속성으로 지정함!
                            // x.year / x.mtit
                            mymv.map(x=> 
                            <MovieList year={x.year} mname={x.mtit} /> )
                        }
                    </ul>
                </div>
            }
            {/* 다른 경우출력은 별도의 JSX출력 중괄호구역에 코딩 */}
            {
                mymv.length == 0 &&
                <h2>아직 개발자영화 리스트가 업데이트 되지 않았습니다!</h2>
            }
        </React.Fragment>
    );
} /////////// WishList2 컴포넌트 //////////////////

// 컴포넌트 출력하기
ReactDOM.render(<WishList2 wlist={movs} />,
document.querySelector("#root4"));

/********************************************************** 
    3. 조건 연산자(삼항연산자)를 사용하여 조건부 랜더링하기 
**********************************************************/

// 명화 데이터
const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg"
};

// 개발자가 좋아하는 그림(명화) 찍기

// 3-1. 타이틀과 그림찍기 컴포넌트
// 구성: 작가이름 + 작품이미지
// 데이터: 작가이름(painter), 이미지경로(작가이름의 객체worsrc이용)
//          작품명(wname)
function MakeWork(props){
    return(
        <div>
            <h2>{props.painter}</h2>
            <img 
                src={worksrc[props.painter]}
                alt={props.wname}
                style={{width:"400px"}}
                title={props.wname}
            />
        </div>
    );

} ///////////// MakeWork ///////////////////////