// 05.Props JSX

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

// 자기차를 소개하는 컴포넌트 1 ////////////
function Car(props){
    // 일반함수에서는 전달변수를 여러개 썼으나
    // 컴포넌트에 전달하는 props는 하나로 여러개 사용 가능!
    // 사용법 : props.속성명
    return(
        <React.Fragment>
            <h2>나의 차는 {props.brand}입니다!</h2>
        </React.Fragment>
    );

} /////////// Car 컴포넌트 //////////////

// 속성을 객체로 여러개 셋팅한다!
const carInfo = {color:"라잇블루",model:"2023년형"};

// 자기차를 소개하는 컴포넌트 2 ////////
function Car2(props){
    return(
        <React.Fragment>
            <h2>
                모델명은 {props.brand.model}이고
                차색은 {props.brand.color}입니다!
            </h2>
        </React.Fragment>
    )

} ////////////// Car2 컴포넌트 ////////////

////// 위의 두가지 차소개 컴포넌트를 하위 컴포넌트로
// 구성하여 새로운 자동차 브랜드 소개 질문 답변형
// 컴포넌트를 새롭게 구성한다!!!!! 

/// 차종류를 물어보고 답하는 컴포넌트 -> Car컴포넌트 사용!
function Brand(){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차죠?</h1>
            <Car brand="기아레이" />
            {/* 다른컴포넌트를 삽입한다! */}
        </React.Fragment>
    )

} ///////////// Brand 컴포넌트 //////////////

///// 차정보를 자세히 물어보는 컴포넌트 - Car2 컴포넌트 사용
function Brand2(){
    
}



// 랜더링하기 ////////
ReactDOM.render(
    <div>
        <Brand />
        <Car2 brand={carInfo} />
    </div>
,
document.querySelector("#root1"));

// 컴포넌트를 호출시 속성값으로 객체를 사용하려면
// 중괄호{} 안에 객체명을 써준다!
// 중괄호는 리액트에서 표현식구역이다!!!