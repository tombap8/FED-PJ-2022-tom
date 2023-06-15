// 로그인 페이지 컴포넌트 - LogIn.js

// 회원가입과 디자인동일
import { useState } from "react";
import "./css/member.css";
import { clearData, initData } from "./fns/fnMem"; 
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    // 라우트이동메서드
    let goRoute = useNavigate();

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
    const msgTxt = [
        "This is a required entry",//필수입력
        "ID does not exist",//아이디가 존재하지 않습니다
        "Password doesn't match",//비밀번호가 일치하지 않습니다
    ];
    // 후크변수 메시지
    // 아이디메시지
    const [idMsg, setIdMsg] = useState(msgTxt[0]);
    // 비번메시지
    const [pwdMsg, setPwdMsg] = useState(msgTxt[0]);

    // [ 3. 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사 
    const changeUserId = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setUserIdError(false);
        else {
            setIdMsg(msgTxt[0]);
            setUserIdError(true);
        }

        // 2. 입력값 반영하기
        setUserId(e.target.value);
    }; /////////////// changeUserId ////////////////

    // 2. 비밀번호 유효성 검사
    const changePwd = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setPwdError(false);
        else {
            setPwdMsg(msgTxt[0]);
            setPwdError(true);
        }

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
            console.log("성공!");
            // 데이터 체크 초기화
            initData();

            // 로컬쓰 "mem-data" 데이터 확인하기
            let memData = localStorage.getItem("mem-data");
            console.log(memData); 
            
            // 로컬쓰 데이터 객체화하기
            memData = JSON.parse(memData);
            console.log(memData); 

            // 같은 아이디 검사 상태변수
            let isOK = true;

            // 입력데이터중 아이디 비교하기
            memData.forEach(v=>{
                // 같은 아이디가 있는가?
                if(v["uid"]===userId){
                    console.log("아이디 같아요~~!");
                    // 아이디에러 상태 업데이트
                    setUserIdError(false);

                    // 같은 아이디 검사 상태변수 변경
                    isOK = false;

                    // 비밀번호가 일치하는가?
                    if(v["pwd"]===pwd){
                        console.log("비번 같아요~~!^^")
                        // 비번에러 상태 업데이트
                        setPwdError(false);
                        $(".sbtn").text("로그인된거야~!");
                        // [ 로그인후 셋팅작업 ]
                        // 1. 로그인한 회원정보를 로컬쓰에 셋팅(세션대신사용!)
                        // -> 실제로그인을 하면 서버의 세션변수가 셋팅됨!
                        localStorage.setItem("minfo",JSON.stringify(v));
                        console.log(localStorage.getItem("minfo"));
                        // 2. 라우팅 페이지 이동하기(useNavigate)
                        goRoute('/'); // 첫페이지로 이동!
                    }
                    else{
                        console.log("비번달라요!ㅜ.ㅜ");
                        // 비번가 다를때 메시지 변경
                        setPwdMsg(msgTxt[2]);
                        // 비번에러 상태 업데이트
                        setPwdError(true);
                    }
                } ////////// if ///////
            }); //////////// forEach //////////

            // 아이디가 불일치할 경우
            if(isOK){
                console.log("아이디가 달라요!ㅜ.ㅜ");
                // 아이디가 다를때 메시지 변경
                setIdMsg(msgTxt[1]);
                // 아이디에러 상태 업데이트
                setUserIdError(true);
            }

        } /// if ////
        // 불통과시 ////////////////
        else {
            console.log("실패!");
            setIdMsg(msgTxt[0]);
            setPwdMsg(msgTxt[0]);
        } /// else /////
    }; ///////////// onSubmit ////////////////

    return (
        <div className="outbx">
            {/* 모듈코드 */}
            <section className="membx" style={{minHeight:"300px"}}>
                <h2 onClick={clearData}>LOG IN</h2>
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
                                            {pwdMsg}
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
                    </ul>
                </form>
            </section>
        </div>
    );
} ///////////// LogIn 컴포넌트 /////////////////
