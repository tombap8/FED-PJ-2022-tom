// DC PJ 회원가입 페이지 컴포넌트

// 컨텍스트 API 불러오기
import { dcCon } from "../modules/dcContext";

// 회원가입 CSS 불러오기
import { Link } from "react-router-dom";
import "../../css/member.css";
import { useContext, useState } from "react";

// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

export function Member() {

  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);

  // [ 회원가입 페이지 요구사항 ]
  // -> 각 입력항목별로 유효성검사를 실행함
  // -> 특이사항: 글자를 입력할때 마다 검사
  //             +submit버튼작동시 검사

  // [ 상태관리변수 ] /////////
  // [1] 입력요소 상태변수 /////////
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");

  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일변수
  const [emailError, setEmailError] = useState(false);

  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    "User ID must contain a minimum of 5 characters",
    "This ID is already in use!",
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
    // 비밀번호확인
    confPwd: "Password verification does not match",
    // 필수입력
    req: "This is a required entry",
    // 이메일
    email: "Please enter a valid email format",
  }; ///// msgEtc ///////

  // [3] 에러메시지 상태변수
  const [idMsg, setIdMsg] = useState(msgId[0]);

  /////////////////////////////////////////

  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ///////////
  const changeUserId = (e) => {
    // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^[A-Za-z0-9+]{5,}$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(e.target.value);

    // 3. 에러아님 상태 if문
    // 조건 : 유효성 검사 결과가 true인가? 에러상태아니면 false
    // 검사방법 : 정규식.test() -> 정규식 검사결과 리턴메서드
    // 결과 : true이면 에러상태값 false
    //       (false이면 에러상태값 true)
    if (valid.test(e.target.value)) {
      // 1.사용중 아이디인지 검사(로컬쓰 셋팅후 추가!)
      // 로컬스토리지 체크함수호출(없으면 생성함!)
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 기존 아이디가 있으면 상태값 false로 업데이트
      let isOK = true;

      // 4. 검사돌리기
      memData.forEach(v=>{
        // 기존아이디와 같은 경우
        if(v.uid===e.target.value){
            // 메시지변경
            setIdMsg(msgId[1]);
            // 아이디에러상태값 업데이트
            setUserIdError(true);
            // 존재여부 업데이트
            isOK = false;
        } ////// if ////////
      }); /////// forEach /////////

      // 5. 기존 아이디 없으면 들어감 : 최종통과시 결과
      if(isOK){
        // 메시지변경
        setIdMsg(msgId[0]);
        // 아이디에러상태값 업데이트
        setUserIdError(false);
      } ////// if /////////////

    } //////////////// if ////////////////
    // 에러일때 ////////////
    else {
      setUserIdError(true);
    } /////////////// else ///////////////

    // 4. 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력됨
    setUserId(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(e.target.value);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(e.target.value)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존입력값 반영하기
    setPwd(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 3. 비밀번호확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd === e.target.value) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존입력값 반영하기
    setChkPwd(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 4. 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 1. 빈값체크
    if (e.target.value !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // 5. 이메일 유효성 검사 ///////////
  const changeEmail = (e) => {
    // 1. 이메일 유효성 검사식(따옴표로 싸지 말것!)
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(e.target.value);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(e.target.value)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존입력값 반영하기
    setEmail(e.target.value);
  }; ///////// changeUserId 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] /////////////////
  const onSubmit = (e) => {
    // 1. 서브밋 기본이동 막기
    e.preventDefault();
    // 2. 유효성 검사 전체통과시
    if (totalValid()) {
      // alert('OK!');
      // 회원가입정보를 로컬스토리지에 저장하기!

      // 로컬스토리지 체크함수호출(없으면 생성함!)
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 새로운 데이터 구성하기
      let newData = {
        idx: memData.length + 1,
        uid: userId,
        pwd: pwd,
        unm: userName,
        eml: email,
      };

      // 4. 데이터 추가하기 : 배열에 데이터추가 push()
      memData.push(newData);

      // 5. 로컬스에 반영하기
      localStorage.setItem("mem-data", JSON.stringify(memData));

      // 6. 버튼 텍스트변경(재미로...)
      document.querySelector(".sbtn").innerText = 
      "넌 이제 회원인거야~!";

      // 7. 페이지 이동 : 로그인페이지로!
      setTimeout(()=>
        myCon.chgPage('login',{})
      ,1000);

    } ///////// if ////////
    // 3. 불통과시
    else {
      alert("Change your input!");
    }
  }; /////////// onSubmit 함수 //////////////

  // 리턴 코드 ///////////////////
  return (
    <div className="outbx">
      {/* 회원가입 모듈코드 */}
      <section className="membx">
        <h2>Join Us</h2>
        <form action="process.php" method="post">
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

              {
                // 통과시 메시지출력
                // 조건문 && 요소
                // 조건추가 : userId가 입력전일때 안보임처리
                // userId가 입력전엔 false로 리턴됨!
                !userIdError && userId && (
                  <div className="msg">
                    <small
                      style={{
                        color: "green",
                        fontSize: "10px",
                      }}
                    >
                      {msgId[2]}
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
                      {msgEtc.pwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 3.비밀번호확인 */}
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Confirm Password"
                value={chkPwd}
                onChange={changeChkPwd}
              />
              {
                // 에러시 메시지출력
                chkPwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.confPwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 4.이름 */}
              <label>User Name : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="Please enter your Name"
                value={userName}
                onChange={changeUserName}
              />

              {
                // 에러시 메시지출력
                userNameError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.req}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 5.이메일 */}
              <label>Email : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="Please enter your Email"
                value={email}
                onChange={changeEmail}
              />
              {
                // 에러시 메시지출력
                emailError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.email}
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
            </li>
            <li>
              {/* 7. 로그인 페이지링크 */}
              Are you already a Member?
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
} //////////// Member 컴포넌트 ////////////////
