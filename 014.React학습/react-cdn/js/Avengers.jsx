// 컴포넌트 파일 분할 구현하기 ////

function Avengers(){
    return(
        <React.Fragment>
            <h1>어벤져스여! 모두 모여라!</h1>
            <img src="./images/ab1.jpg" alt="어벤져스" />
            <img src="./images/ab2.jpg" alt="어벤져스" />
            <img src="./images/ab3.jpg" alt="어벤져스" />
            <img src="./images/ab4.jpg" alt="어벤져스" />
        </React.Fragment>
    );
} ///////////// Avengers 컴포넌트 //////////////////////

// 컴포넌트 내보내기
export default Avengers;