// 로그인 페이지 컴포넌트 - Login.jsx

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { dcCon } from "../modules/dcContext";

// 디자인은 회원가입과 동일!
import { useState, useContext } from "react";
import "../../css/member.css";

// 로컬스 데이터 초기화 함수
import { initData } from "../func/mem_fn";

// 제이쿼리
import $ from "jquery";

export function Login() {

  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);  

  // [ 상태관리변수 ] /////////
  // [1] 입력요소 상태변수 /////////
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    "This is a required entry", //필수입력
    "ID does not exist", //아이디가 존재하지 않습니다
  ];
  // [ 비번 메시지 프리셋 ]
  const msgPwd = [
    // 비밀번호
    "This is a required entry", //필수입력
    "Password doesn't match", //비밀번호가 일치하지 않습니다
  ]; ///// msgPwd ///////
  // [3] 에러메시지 상태변수
  const [idMsg, setIdMsg] = useState(msgId[0]);
  const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ///////////
  const changeUserId = (e) => {
    // 1-1. 빈값 체크
    if (e.target.value !== "") setUserIdError(false);
    else {
      // 빈값일 경우
      // 메시지 띄우기 : "This is a required entry"
      setIdMsg(msgId[0]);
      // 에러상태값 변경하기
      setUserIdError(true);
    } ///// else ////
    // 1-2. 입력값 반영하기
    setUserId(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 2-1. 빈값 체크
    if (e.target.value !== "") setPwdError(false);
    else {
      // 빈값일 경우
      // 메시지 띄우기 : "This is a required entry"
      setIdMsg(msgId[0]);
      // 에러상태값 변경하기
      setPwdError(true);
    } ///// else ////
    // 2-2. 입력값 반영하기
    setPwd(e.target.value);
  }; ///////// changePwd 함수 //////////

  // 3. 전체 유효성검사 함수 ////////////
  const totalValid = () => {
    // 3-1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);

    // 3-2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (userId && pwd) return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ////////

  // 4. 서브밋 기능함수 ///////////////
  const onSubmit = (e) => {
    // 4-1.기본 서브밋 이동막기
    e.preventDefault();

    // 4-2. 유효성검사 전체 통과시 ////
    if (totalValid()) {
      // console.log("통과!");
      // DB역할의 로컬스에 데이터를 비교한다!

      // 만약 로컬스에 'mem-data'가 없으면
      // 초기화! -> 함수내에 이미 걸러내고 있음!
      initData();

      // 로컬스 'mem-data' 확인하기
      let memData = localStorage.getItem("mem-data");

      // 로컬스 데이터 객체화하기
      memData = JSON.parse(memData);
      // console.log(memData);

      // 같은 아이디 검사 상태변수
      // -> true면 아이디불일치할 경우
      // let isNot = true; -> find()사용시 불필요!

      // ************************************
      // 입력데이터 중 아이디값 비교하기 //////
      // 배열 데이터 순회하며 값비교하기!
      // 배열.find() 로 검색순회하면 해당 데이터 만나는 순간
      // 끝내고 나옴! -> 효율성을 높이자!
      let findD = memData.find(v=>{
        if(v['uid']===userId) return true;
      }); ///////// find ////////

      // console.log('find결과:',findD);

      // 만약 검색결과가 있으면 true처리됨!
      // 결과가 리턴이 없는 경우 undefined이므로 false!
      if(findD){ // 같은 아이디가 있는 경우 ///
        // console.log("아이디같아요~!");
        // 아이디에러 상태 업데이트
        setUserIdError(false);

        // 비밀번호가 일치하는가? -> 로그인 최종성공!!!
        if (findD["pwd"] === pwd) {
          // console.log("비번이 같아요~!");
          // 비번에러 상태값 업데이트
          setPwdError(false);

          // **** [ 로그인후 셋팅작업 ] **** //
          // 1. 로그인한 회원정보를 로컬스에 셋팅!
          // -> 서버의 세션을 대신하여 사용함!
          localStorage
          .setItem('minfo',JSON.stringify(findD));

          // 2. 컨텍스트 API에 공개된 로그인상태 업데이트하기!
          myCon.setLogSts(localStorage.getItem('minfo'));

          // 유저아이콘
          const usrIcon = ["🙍‍♂️","🧏‍♀️","🦸‍♂","👨‍🎤","🦸‍♀"];

          // 3. 컨텍스트 API에 공개된 로그인 메시지 업데이트하기!
          myCon.setLogMsg("Welcome "+
          findD.unm+usrIcon[Math.floor(Math.random()*5)]);

          // 버튼에 메시지(재미로...)
          $('.sbtn').text('넌 로그인된거야~!');

          // 3. 라우팅 페이지 이동하기(useNavigate)
          // 컨텍스트 API 함수호출!
          setTimeout(()=>
          myCon.chgPage('/',{}),1000);
          

        } /////////// if //////////
        else {
          /// 비번 불일치!
          // console.log("비번달라요~!");
          // 비번 다를때 메시지
          setPwdMsg(msgPwd[1]);
          // 비번에러 상태 업데이트
          setPwdError(true);
        } ////////// else /////////
      } //////////// if /////////////////
      else { // 같은 아이디가 없는 경우 /////
        // console.log("아이디 달라요~!");
        // 아이디가 다를때 메시지 보이기
        setIdMsg(msgId[1]);
        // 아이디 에러 상태 업데이트
        setUserIdError(true);
      } /////////// else ///////////

      // -> forEach를 사용하면 비효율적임(모두순회하므로!)
      // memData.forEach((v) => {
      //   // 같은 아이디가 있는가?
      //   if (v["uid"] === userId) {
      //     // console.log("아이디같아요~!");
      //     // 아이디에러 상태 업데이트
      //     setUserIdError(false);
      //     // 같은 아이디 상태 업데이트
      //     isNot = false;

      //     // 비밀번호가 일치하는가?
      //     if (v["pwd"] === pwd) {
      //       // console.log("비번이 같아요~!");
      //       // 비번에러 상태값 업데이트
      //       setPwdError(false);
      //     } ///// if ////
      //     else {
      //       /// 비번 불일치!
      //       // console.log("비번달라요~!");
      //       // 비번 다를때 메시지
      //       setPwdMsg(msgPwd[1]);
      //       // 비번에러 상태 업데이트
      //       setPwdError(true);
      //     } ///// else //////
      //   } ////// if //////
      // }); ////////// forEach /////////

      // 아이디가 불일치할 경우
      // if (isNot) {
      //   // console.log("아이디 달라요~!");
      //   // 아이디가 다를때 메시지 보이기
      //   setIdMsg(msgId[1]);
      //   // 아이디 에러 상태 업데이트
      //   setUserIdError(true);
      // } //////// if ///////////

    } ///// if ///////
    
    // 4-3. 유효성검사 불통과시 - 특별히 필요없음 /////
    // else {
    //   console.log("실패!");
    // } ////// else ///////
  }; //////////// onSubmit 함수 ///////////

  // 리턴코드 ///////////////////////////
  return (
    <div className="outbx">
      {/* 모듈코드 */}
      <section className="membx" style={{ minHeight: "300px" }}>
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
                // 에러일 경우 메시지출력
                // 조건문 && 요소
                userIdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
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
                // 에러시 메시지출력
                pwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {pwdMsg}
                    </small>
                  </div>
                )
              }
            </li>
            {/* 3.서브밋버튼 */}
            <li style={{overflow:'hidden'}}>
              <button className="sbtn" onClick={onSubmit}>
                Submit
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}
