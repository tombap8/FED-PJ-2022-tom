// 로그인 페이지 컴포넌트 - LogIn.js

// 회원가입과 디자인동일
import { useState } from "react";
import "./css/member.css";

export default function LogIn() {
    // [ 후크 useState 메서드 셋팅하기 ]
    // [ 1. 입력요소 후크변수 ]
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd, setPwd] = useState("");

    // [ 2. 에러상태값 후크변수 ]
    // -> 에러상태값변수 : 초기값은 에러 아님상태(false)
    // 1. 아이디에러변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호에러변수
    const [pwdError, setPwdError] = useState(false);
    // [ 아이디관련 메시지 프리셋 ]
    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];
    // 후크변수 메시지
    const [idMsg, setIdMsg] = useState(msgId[0]);

    // [ 3. 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사 
    const changeUserId = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setUserIdError(false);
        else setUserIdError(true);

        // 2. 입력값 반영하기
        setUserId(e.target.value);
    }; /////////////// changeUserId ////////////////

    // 2. 비밀번호 유효성 검사
    const changePwd = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setPwdError(false);
        else setPwdError(true);

        // 2. 입력값 반영하기
        setPwd(e.target.value);
    }; ///////////// changePwd ///////////////////

    // 3. 전체 유효성 검사 함수 /////////////
    const totalValid = () => {
        // 모든 입력창 검사(빈값일 경우 모두 에러를 후크변수에 전달!)
        if (!userId) setUserIdError(true);
        if (!pwd) setPwdError(true);

        // 통과조건:
        // 1. 빈값이 아님
        // 2. 에러 후크 변수가 모두 false
        // 위의 2가지 만족시 treu값 리턴
        if (
            userId &&
            pwd &&
            !userIdError &&
            !pwdError 
        )
            return true;
        else return false; // 하나라도 에러면  false값 리턴!
    }; ////////////// totalValid ////////////////

    // 7. 서브밋 기능함수 ///////////////
    const onSubmit = (e) => {
        // 기본 서브밋기능 막기!
        e.preventDefault();

        console.log("서브밋!");

        // 유효성검사 전체 통과시 ////
        if (totalValid()) {
            // alert("처리페이지로 이동!");

            // localStorage.clear();

            // 만약 로컬스 "mem-data"가 null이면 만들어준다!
            if (localStorage.getItem("mem-data") === null) {
                localStorage.setItem(
                    "mem-data",
                    `
                    [
                        {
                            "idx": "1",
                            "uid":"tomtom",
                            "pwd":"1111",
                            "unm":"Tom",
                            "eml":"tom@gmail.com"
                        }
                    ]
                `
                );
            }

            // 로컬스 변수할당
            let memData = localStorage.getItem("mem-data");

            console.log(memData);

            // 로컬스 객체로 변환하기
            memData = JSON.parse(memData);

            console.log(memData);

            // 새로운 데이터구성
            let newObj = {
                idx: memData.length + 1,
                uid: userId,
                pwd: pwd,
                unm: userName,
                eml: email,
            };

            // 데이터 추가하기 : 배열에 데이터 추가임 -> push()
            memData.push(newObj);

            // 추가후 확인
            console.log(memData);

            // 로컬쓰에 반영하기
            localStorage.setItem("mem-data", JSON.stringify(memData));

            // 로컬쓰 확인
            console.log(localStorage.getItem("mem-data"));
        } /// if ////
        // 불통과시 ////////////////
        else {
            // alert("입력을 수정하세요!");
        } /// else /////
    }; ///////////// onSubmit ////////////////

    return (
        <div className="outbx">
            {/* 모듈코드 */}
            <section className="membx">
                <h2>LOG IN</h2>
                <form method="post" action="process.php">
                    <ul>
                        <li>
                            {/* 1.아이디 */}
                            <label>ID : </label>
                            <input
                                type="text"
                                maxLength="20"
                                placeholder="Please enter your ID"
                                value={userId}
                                onChange={changeUserId}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                // 훅크 데이터 idMsg로 변경출력!
                                userIdError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            {idMsg}
                                        </small>
                                    </div>
                                )
                            }

                            
                        </li>
                        <li>
                            {/* 2.비밀번호 */}
                            <label>Password : </label>
                            <input
                                type="password"
                                maxLength="20"
                                placeholder="Please enter your Password"
                                value={pwd}
                                onChange={changePwd}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                pwdError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            Password must be at least 8 characters long and must
                                            contain at least one letter and one number each.
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li style={{ overflow: "hidden" }}>
                            {/* 6.버튼 */}
                            <button className="sbtn" onClick={onSubmit}>
                                Submit
                            </button>
                            {/* input submit버튼이 아니어도 form요소
                            내부의 button은 submit기능이 있다! */}
                        </li>
                        <li>
                            {/* 7.로그인페이지링크 */}
                            Are you already a member?
                            <Link to="/login"> Log In </Link>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
} ///////////// LogIn 컴포넌트 /////////////////
