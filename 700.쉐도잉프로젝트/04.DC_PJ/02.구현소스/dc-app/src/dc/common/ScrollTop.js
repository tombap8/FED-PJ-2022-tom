import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 스크롤 상단이동 컴포넌트 모듈은
// 라우터가 셋팅된 <BrowserRouter> 안에
// <ScrollTop /> 형태로 호출해야 한다!(import는 당연히함!)
// 현재 PJ에서는 index.js에 위치함!

export default function ScrollTop(props){ // props.sfn - 로그인셋팅함수
    // 현재 라우터의 매핑 페이지 위치 알아내기
    const { pathname } = useLocation();

    // 컴포넌트가 속해있는 컴포넌트에 변경이 있을 경우
    // 부가적으로 함께 작동되도록 액션을 주고자 할때
    // 사용하는 리액트 모듈은? useEffect!
    // useEffect(함수,[사용할라우터페이지]) -> 함수가 실행됨!
    useEffect(()=>{
        // 윈도우 객체 스크롤 최상위이동 코드
        window.scrollTo(0,0);
        // 로그인 상태를 확인! : "minfo"
        console.log("useEffect:",
        localStorage.getItem("minfo"));
        // 부모컴포넌트(Layout) 로그인 셋팅함수 호출하기!
        props.sfn();
        // 만약 로컬쓰 "minfo"가 null이 아닌 셋팅값이 있다면
        // 로그인 환영메시지를 보여준다(+로그아웃버튼 출력)
    }, [pathname]);

    // console.log(pathname);

    // 이 컴포넌트 실행은 다른 부가적인 코드는
    // 실행시키지 않는다는 의미의 null값을 리턴함
    return null;
} 