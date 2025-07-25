// 03. JSX 특성 알아보기

/***************************************************** 
    [ JSX란 무엇인가? ]
    - Javascript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기가 가능함!
*****************************************************/

// 1. JSX를 사용한 것과 JSX를 사용하지 않은 것을 비교
// (1) JSX를 사용한 예 ///////////////
// 넣을요소
const myele1 = <h1>나는 JSX를 사용하고 있어!</h1>;

// 리액트 루트생성하기 : createRoot() 메서드 사용!
const root1 = ReactDOM.createRoot(document.querySelectorAll("#root>div")[0]);
// 적용하기 :  생성된 루트에 render() 메서드를 붙여서 사용함!
root1.render(myele1);

// (2) JSX를 사용하지 않는 방법 /////////////
// 넣을 요소를 createElement() 메서드로 생성해야함!(JSX쓰지않고...)
const myele2 = React.createElement("h1", {}, "나는 JSX를 쓰지 않아!");
// createElement(요소명,{JS코드작성},요소내용)

// 두번째 div요소에 출력하기
ReactDOM.render(myele2, document.querySelectorAll("#root>div")[1]);

/***************************************************** 
    [ 출력방식 정리! ]
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,대상요소)

    2. 따로쓰기
        1) 생성변수 = ReactDOM.createRoot(대상요소)
        2) 생성변수.render(출력할요소)

    _____________________________________________

    [ JSX 를 사용하거나 사용하지 않는 경우 ]
    -> 개발자의 선택사항이다!
    -> JSX는 ES6 기반의 자바스크립트 언어의 확장ㅇ리며
    런타임시 일반 자바스크립트로 변환된다!

    ______________________________________________

    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있다
    {........ 표현식 ........}

    -> 표현식이란 React변수, 속성, JS문법 등의 내용임

*****************************************************/

let num1 = 1000;
let num2 = 7;

// 3. JSX 표현식 사용하기
const myele3 = <h1>리액트는 {num1 * num2}번 사용해도 좋다!</h1>;

// 세번째 div요소에 출력하기
ReactDOM.render(myele3, document.querySelectorAll("#root>div")[2]);

/***************************************************** 
    [ JSX 태그요소 작성시 여러줄일 경우 ]
    1. 최상위를 하나 만들고 여러요소를 작성한다!
    2. 소괄호로 전체를 싸준다!(소괄호생략가능!)

    - 지원되는 스타일:
    1) <>태그들</>
    2) <Fragment>태그들</Fragment>
    3) <기존태그>태그들</기존태그>

    -> 1),2)번은 CDN방식에서는 지원안함!(설치형SPA지원!)
    -> 2)번 CDN에서 사용하려면 아래와 같이 사용한다!
        <React.Fragment></React.Fragment>
    -> 1),2)번을 사용하는 이유는 쓸때 없는 태그삽입을 막는데있다!
    -> 기존태그는 <div>,<section> 등 원래있는 html태그를 말함
        (단점, 원하는 않는 태그가 삽입됨!!!)
*****************************************************/
// 4. 다중요소 html 블록 삽입하기 ///////////

const myele4 = (
    <React.Fragment>
        <h2>[ 다중요소 HTML 블록출력하기 ]</h2>
        <ul>
            <li>프론트엔드개발</li>
            <li>리액트적용개발</li>
            <li>뷰JS적용개발</li>
        </ul>
    </React.Fragment>
);


// 네번째 div요소에 출력하기
ReactDOM.render(myele4, 
    document.querySelectorAll("#root>div")[3]);


// 5번에는 내가 원하는 태그를 출력해본다!!!

const mydata = [
    {idx:1,name:"김수현",movie:"언제왔니"},
    {idx:2,name:"장우혁",movie:"형님,형~~~님"},
    {idx:3,name:"김혜수",movie:"내가쎈언니야"},
];

// map(value,index,array)을 사용한 태그생성하기
// map(배열값,순번,배열객체전체자신)
// 파라미터 구성은 forEach() 메서드와 유사함!
// const mylist = mydata.map((val,idx,obj)=>
const mylist = mydata.map(val=>
    <li>
       {val.name} : {val.movie} ★ {val.idx==3?"예뻐":"멋쪄!"}
    </li>
);

const myele5 = 
<React.Fragment>
    <h2>배우리스트</h2>
    <ul>
        {mylist}
    </ul>
</React.Fragment>;

// 다섯번째 div요소에 출력하기
ReactDOM.render(myele5, 
    document.querySelectorAll("#root>div")[4]);

/***************************************************** 
    [ JSX는 홀로태그라도 끝에 닫기를 해줘야한다! ]
    예) <br> -> <br />
        <input type="text"> -> <input type="text" />
*****************************************************/
const myele6 = <input type="text" value="홀로태그는 스스로 닫아라!" />;


// 여섯번째 div요소에 출력하기
ReactDOM.render(myele6, 
    document.querySelectorAll("#root>div")[5]);

/***************************************************** 
    [ JSX에서 속성 클래스는 className 으로 표기한다! ]
    <태그 class="클래스명">
    class는 JS에서 키워드이므로 사용못함! 대신...
    <태그 className="클래스명">
*****************************************************/
const myele7 = <h1 className="myclass">className 속성으로 클래스 셋팅!</h1>;

// 일곱번째 div요소에 출력하기
ReactDOM.render(myele7, 
    document.querySelectorAll("#root>div")[6]);

/***************************************************** 
    [ JSX에서 조건문 사용하기 - if문 ]
    리액트는 if명령문을 지원하지만
    JSX내부에서는 지원하지 않는다!!!

    JSX에서 조건문을 사용하려면?
    JSX 외부에서 if문을 사용하거나
    아니면 내부에서 삼항연산자를 사용할 수 있다!
*****************************************************/
// JSX 외부에서 if문 사용하기
const x = 100000;
let txt = "이 돈으로는 충분히 살 수 있어!";
if(x<10000){
    txt = "돈이 부족해서 살 수 없어!"
} //// if ///////

const myele8 = <div>
    <h1>현재 내가 가진 돈은 {x}원!</h1>
    <h1>{txt}</h1>
</div>;

// 여덟번째 div요소에 출력하기
ReactDOM.render(myele8, 
    document.querySelectorAll("#root>div")[7]);

// JSX 표현식에 삼항연산자 사용하기
let time = 10;

const myele9 = (
    <React.Fragment>
        <h1>지금 몇시지? {time}시야!</h1>
        <h1>{time > 9 ? "지금 집에 들어와!":"더 놀다와~!"}</h1>
    </React.Fragment>
);

// 아홉번째 div요소에 출력하기
ReactDOM.render(myele9, 
    document.querySelectorAll("#root>div")[8]);

/***************************************************** 

*****************************************************/
