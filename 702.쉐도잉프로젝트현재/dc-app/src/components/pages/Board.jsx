// OPINION 의견 게시판 컴포넌트

// 게시판용 CSS
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "../../css/board.css";

// 컨텍스트 API 불러오기
import { dcCon } from "../modules/dcContext";

// 로컬스토리지 사용자정보 생성 JS
import { initData } from "../func/mem_fn";

// 제이쿼리
import $ from "jquery";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/board.json";

// 기본 데이터 역순정렬
baseData.sort((a, b) => {
  return Number(a.idx) === Number(b.idx)
    ? 0
    : Number(a.idx) > Number(b.idx)
    ? -1
    : 1;
});

// 초기데이터 셋업하기(원본데이터 담기)
let orgData;
// 로컬스가 있으면 그것 넣기
if (localStorage.getItem("bdata"))
  orgData = JSON.parse(localStorage.getItem("bdata"));
// 로컬스 없으면 제이슨 데이터 넣기 + 로컬스 생성하기!
else {
  // 기본 데이터 제이슨에서 가져온것 넣기
  orgData = baseData;
} /////// else /////////
// else orgData = [];

// // // console.log(org);

// ******* Borad 컴포넌트 ******* //
export function Board() {
  // 보드 데이터가 로컬스에 없으면 생성하기!
  if (!localStorage.getItem("bdata")) {
    // !연산자로 false일때 실행
    // 로컬스 'bdata'가 없으므로 여기서 최초 생성하기
    // -> 조회수증가시 로컬스 데이터로 확인하기 때문!
    localStorage.setItem("bdata", JSON.stringify(orgData));
  } //////////// if ///////////////

  // 기본사용자 정보 셋업 함수 호출
  initData();

  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);

  // console.log("로그인상태:", myCon.logSts);

  // [컴포넌트 전체 공통변수] /////////////
  // 1-1. 페이지 단위수 : 한 페이지 당 레코드수
  const pgBlock = 7;
  // 1-2. 페이징의 페이지 단위수 : 페이징 표시 개수
  const pgPgBlock = 4;

  // 2. 전체 레코드수 : 배열데이터 총개수
  const totNum = orgData.length;
  // // console.log("페이지단위수:", pgBlock, "\n전체 레코드수:", totNum);

  // [ 상태관리 변수 셋팅 ] ////////

  // 1-1. 현재 페이지 번호 : 가장중요한 리스트 바인딩의 핵심!
  const [pgNum, setPgNum] = useState(1);
  // 1-2. 페이징의 현재 페이지 번호 : 참조변수로 생성
  const pgPgNum = useRef(1);

  // 1. 데이터 변경변수 : 리스트에 표시되는 실제 데이터셋
  // const [currData, setCurrData] = useState(null);

  // 2. 게시판 모드관리변수
  const [bdMode, setBdMode] = useState("L");
  // 모드구분값 : CRUD (Create/Read/Update/Delete)
  // C - 글쓰기 / R - 글읽기 / U - 글수정 / D - 글삭제(U에포함!)
  // 상태추가 : L - 글목록
  // 전체 5가지 상태값 : CRUD+L

  // 3. 버튼공개 여부 관리변수 : 수정버튼
  const [btnSts, setBtnSts] = useState(false);

  // 4. 강제 리랜더링 관리변수 : 값을 랜덤값으로 변경하여사용
  const [force, setForce] = useState(null);

  // 5. 검색상태 관리변수 : 값유지만 하도록 참조변수로 생성
  const searchSts = useRef(false);

  // 6. 최초 랜더링시 상태관리변수 : 처음 한번만 내림차순적용하기
  const firstSts = useRef(true);
  // 주의: 참조변수는 최초 랜더링시에만 초기값 셋팅되고
  // 리랜더링시엔 다시 셋팅되지 않는다!!!

  // 리랜더링 루프에 빠지지 않도록 랜더링후 실행구역에
  // 변경코드를 써준다! 단, logSts에 의존성을 설정해준다!
  useEffect(() => {
    // 만약 로그아웃하면 버튼 상태값 false로 변경하기!
    if (myCon.logSts === null) setBtnSts(false);

    // 만약 글쓰기모드(C)에서 로그아웃을 한 경우 리스트페이지이동
    if (myCon.logSts === null && bdMode === "C") setBdMode("L");
  }, [myCon.logSts]);
  // [ 리랜더링의 원인 중 많은 경우 랜더링 전 즉,
  // 가상돔에 설정을 잡을 때 발생한다! ]
  // -> 해결책은 랜더링 후 처리구역에서 변경되는 상태변수를
  // 의존성에 등록하여 그 변경발생시 한번만 실행되도록 설정하는
  // 것이다!!!

  /**************************************** 
    함수명 : sortData
    기능 : 내림차순정렬
  ****************************************/
  function sortData(data, arr) {
    // arr은 배열값으로
    // 내림차순은 [-1,1]
    // 오름차순은 [1,-1] 을 보내준다!
    return data.sort((a, b) => {
      return Number(a.idx) === Number(b.idx)
        ? 0
        : Number(a.idx) > Number(b.idx)
        ? arr[0]
        : arr[1];
    });
  } ////////////// sortData 함수 ////////////

  /**************************************** 
    함수명 : rawData
    기능 : 데이터 초기화하기(전체데이터 업데이트)
  ****************************************/
  const rawData = () => {
    // orgData를 로컬스 데이터로 덮어쓰기
    // 단, 내림차순으로 정렬하여 넣어준다!
    // orgData = sortData(JSON.parse(localStorage.getItem('bdata'),[-1,1]));
    orgData = JSON.parse(localStorage.getItem("bdata"), [-1, 1]);
  }; ///////////// rawData /////////////

  ///////////////////////////////////////
  // 최초랜더링 시에만 한번 실행하기 ///////
  ////////////////////////////////////////
  // -> 경우에 따라 내림차순 필요한 경우 firstSts값을
  // true로만 변경하면 리랜더링시 bindList() 위에서
  // 먼저 적용된다! (글쓰기후 리스트오기/검색직후에 적용함!)
  if (firstSts.current) {
    // 내림차순 정렬적용하기
    sortData(orgData, [-1, 1]);
    // 정렬선택박스 내림차순으로 변경하기
    $("#sel").val("0");
  } /////// if ///////

  /************************************* 
    함수명 : bindList
    기능 : 페이지별 리스트를 생성하여 바인딩함
  *************************************/
  const bindList = () => {
    // 바인드시 최초상태 false로 업데이트!
    firstSts.current = false;

    // console.log("다시바인딩!", pgNum);
    // 데이터 선별하기
    const tempData = [];

    // 내림차순 정렬 함수호출
    // sortData(orgData,[-1,1]);

    // 시작값 : (페이지번호-1)*블록단위수
    let initNum = (pgNum - 1) * pgBlock;
    // 한계값 : 블록단위수*페이지번호
    let limitNum = pgBlock * pgNum;

    // 블록단위가 7일 경우 첫페이지는 0~7, 7~14,...
    // // console.log("시작값:", initNum, "\n한계값:", limitNum);

    // 데이터 선별용 for문 : 원본데이터(orgData)로부터 생성
    for (let i = initNum; i < limitNum; i++) {
      // 마지막 페이지 한계수체크
      if (i >= totNum) break;
      // 코드 푸시
      tempData.push(orgData[i]);
    } ///// for /////

    // // console.log("결과셋:", tempData);

    // 데이터가 없는 경우 출력 ///
    if (orgData.length === 0) {
      return (
        <tr>
          <td colSpan="5">There is no data.</td>
        </tr>
      );
    } ////// if /////////

    // if문에 들어가지 않으면 여기를 리턴함!
    return tempData.map((v, i) => (
      <tr key={i}>
        {/* 1. 일련번호 */}
        <td>{i + 1 + initNum}</td>
        {/* 2. 글제목 */}
        <td>
          <a href="#" data-idx={v.idx} onClick={chgMode}>
            {v.tit}
          </a>
        </td>
        {/* 3. 글쓴이 */}
        <td>{v.unm}</td>
        {/* 4. 쓴날짜 */}
        <td>{v.date}</td>
        {/* 5. 조회수 */}
        <td>{v.cnt}</td>
      </tr>
    ));
  }; /////////// bindList 함수 ////////////

  /************************************* 
    함수명 : pagingLink
    기능 : 리스트 페이징 링크를 생성한다!
  *************************************/
  const pagingLink = () => {
    // 페이징 블록만들기 ////
    // 1. 블록개수 계산하기
    const blockCnt = Math.floor(totNum / pgBlock);
    // 전체레코드수 / 페이지단위수 (나머지가 있으면 +1)
    // 전체레코드수 : pgBlock변수에 할당됨!
    // 2. 블록 나머지수
    const blockPad = totNum % pgBlock;

    // 최종 한계수 -> 여분레코드 존재에 따라 1더하기
    const limit = blockCnt + (blockPad === 0 ? 0 : 1);

    // 페이징의 페이징 한계수 구하기
    const pgBlockCnt = Math.floor(limit / pgPgBlock);
    const pgBlockPad = limit % pgPgBlock;
    const pgLimit = pgBlockCnt + (pgBlockPad === 0 ? 0 : 1);
    console.log("페이징의 페이징한계값:", pgLimit);
    // -> pgLimit가 마지막 페이징의 페이징번호이기도함!

    // // console.log(
    //   "블록개수:",
    //   blockCnt,
    //   "\n블록나머지:",
    //   blockPad,
    //   "\n최종한계수:",
    //   limit
    // );

    // [ 페이징의 페이징 하기 ]
    // [1] 페이징 블록 - 한 페이징블록수 : pgPgBlock 변수(4)
    // [2] 페이징 현재 페이지번호 : pgPgNum 변수(기본값1)

    // 리액트에서는 jsx문법 코드를 배열에 넣고
    // 출력하면 바로 코드로 변환된다!!!
    let pgCode = [];
    // 리턴 코드 //////////
    // 만약 빈태그 묶음에 key를 심어야할 경우
    // 불가하므로 Fragment 조각 가상태그를 사용한다!

    // 시작값 : (페페넘-1)*페페블럭
    let initNum = (pgPgNum.current - 1) * pgPgBlock;
    // 한계값 : 페페넘*페페블럭
    let limitNum = pgPgNum.current * pgPgBlock;

    for (let i = initNum; i < limitNum; i++) {
      // 맨끝 페이지 번호보다 크면 나가라
      if(i >= limit) break;

      // 1.페이징 링크 만들기
      pgCode[i] = (
        <Fragment key={i}>
          {pgNum - 1 === i ? (
            <b>{i + 1}</b>
          ) : (
            <a href="#" onClick={chgList}>
              {i + 1}
            </a>
          )}

            
          {// 바출력조건:
          // 페이징의 페이징에서 끝번호 전번호일때와
          // 동시에 전체 한계값이 전체페이지끝 이전번호 보다 작을때
          (i < limitNum - 1 && i < limit-1) ? 
          " | " : ""}
        </Fragment>
      );
    } ////// for /////

    // pgPgNum.current = 2;

    {
      // 2.페이징 이전블록이동 버튼 - 배열 맨앞에 추가!
      // 기준: 1페이지가 아니면 보임!
      pgCode.unshift(
        pgPgNum.current === 1 ? (
          ""
        ) : (
          <Fragment key={-1}>
            <a href="#" 
            title="맨앞으로" 
            style={{marginRight:'10px'}} 
            onClick={(e)=>{
              e.preventDefault();
              goPaging(1,false);
            }}>«</a>

            <a href="#" onClick={(e)=>{
              e.preventDefault();
              goPaging(-1,true);
            }}
            title="앞으로" 
            style={{marginRight:'10px'}}>◀</a>
          </Fragment>
        )
      );
    }
    {
      // 3.페이징 다음블록이동 버튼
      // 기준: 페이징의 페이징 블록 끝번호가 아니면 보임
      pgCode.push(
        pgPgNum.current === pgLimit ? (
          ""
        ) : (
          <Fragment key={-2}>
            &nbsp;&nbsp;<a href="#" onClick={(e)=>{
              e.preventDefault();
              goPaging(1,true);
            }} 
            title="뒤로"
            style={{marginLeft:'10px'}}>▶</a>
            <a href="#" 
            style={{marginLeft:'10px'}}
            title="맨뒤로" 
            onClick={(e)=>{
              e.preventDefault();
              goPaging(pgLimit,false);
            }}>»</a>
          </Fragment>
        )
      );
    }

    return pgCode;
  }; /////////// pagingLink 함수 ////////

  // 페이징의 페이징 이동함수 /////////
  // 전달변수 : dir은 페이지 더하기/빼기 기능
  // 전달변수 : opt는 true이면 일반이동
  //          false이면 맨앞,맨뒤이동
  const goPaging = (dir,opt) => {
    // dir이동방향(오른쪽:+1, 왼쪽:-1)
    let newPgPgNum;

    // opt가 true이면 일반이동
    if(opt) newPgPgNum = pgPgNum.current + dir;
    // opt가 false이면 맨끝이동
    else newPgPgNum = dir; // dir에 첫번호/끝번호옴!

    // 새 페이지번호 : (전페이지 끝번호) + 1
    const newPgNum = ((newPgPgNum-1) * pgPgBlock) + 1;
    
    // 페이징의 페이징번호 업데이트
    pgPgNum.current = newPgPgNum;
    // 이동할 페이지번호 : 다음 블록의 첫페이지로 이동
    setPgNum(newPgNum); // -> 리랜더링!
  };

  /************************************* 
    함수명 : chgList
    기능 : 페이지 링크 클릭시 리스트변경
  *************************************/
  const chgList = (e) => {
    let currNum = e.target.innerText;
    // // console.log("번호:", currNum);
    // 현재 페이지번호 업데이트! -> 리스트 업데이트됨!
    setPgNum(currNum);
    // 바인드 리스트 호출 불필요!!!
    // 왜? pgNum을 bindList()에서 사용하기때문에
    // 리랜더링이 자동으로 일어남!!!
  }; ///////// chgList 함수 //////////////

  // 선택된 데이터 셋팅을 위한 참조변수
  const cData = useRef(null);

  // 로그인 사용자 데이터 셋팅을 위한 참조변수
  const logData = useRef(null);

  /************************************* 
    함수명 : chgMode
    기능 : 게시판 옵션 모드를 변경함
  *************************************/
  const chgMode = (e) => {
    // 기본막기
    e.preventDefault();

    // 만약 검색상태였다면 searchSts값이 treu이므로
    // 이때 false로 업데이트와 함께 orgData도 초기화해준다!
    if (searchSts.current) {
      // searchSts값 true 업데이트
      searchSts.current = false;
      // orgData초기화
      rawData();
    } //////// if ///////////////

    // 1. 해당 버튼의 텍스트 읽어오기
    let btxt = $(e.target).text();
    // console.log(btxt);

    // 2. 텍스트별 모드 연결하기
    let modeTxt;

    switch (btxt) {
      case "List":
        modeTxt = "L";
        break;
      case "Write":
        modeTxt = "C";
        break;
      case "Modify":
        modeTxt = "U";
        break;
      case "Submit":
        modeTxt = "S";
        break;
      case "Delete":
        modeTxt = "D";
        break;
      default:
        modeTxt = "R";
    }

    // console.log("버튼명:", btxt, "모드명:", modeTxt);

    // 3. 모드별 분기하기 //////
    // 3-1. 읽기 모드
    if (modeTxt === "R") {
      // 1. a링크의 'data-idx'값 읽어오기
      let cidx = $(e.target).attr("data-idx");
      // console.log("읽기처리", cidx);

      // 2. 해당정보 가져오기 : orgData에서 조회함
      // 전역 참조변수에 저장하여 리랜더링시 리턴코드에
      // 이값이 적용되게 해준다!!!
      cData.current = orgData.find((v) => {
        if (Number(v.idx) === Number(cidx)) return true;
      });

      // console.log("현재Data:", cData.current);

      // 로그인 사용자와 글쓴이가 같으면 btnSts상태값 true
      // 상태업데이트 함수 호출!(uid를 보냄)
      compUsr(cData.current.uid);

      setBdMode("R");

      // 조회수 증가 함수 호출!
      plusCnt();

      // -> 아래의 방식은 스크립트로 DOM에 셋팅하는 방법
      // ->>> 리액트는 가상돔에 데이터를 셋팅하도록 해야함!
      // cData를 참조변수로 만들어서 미리 데이터를 셋팅했음!

      // 3. 읽기모드 입력창에 데이터 매칭하여 넣기
      // $(()=>{ // DOM그린후 실행함!
      //   // (1) 글쓴이
      //   $(".readone .name").val(cData.writer);
      //   // (2) 글제목
      //   $(".readone .subject").val(cData.tit);
      //   // (3) 글내용
      //   $(".readone .content").val(cData.cont);
      // });
    } ////// if ///////

    // 3-2. 리스트 이동하기 ///////
    else if (modeTxt === "L") {
      setBdMode("L");
    } ////// else if ///////

    // 3-3. 쓰기 모드 //////////////
    else if (modeTxt === "C") {
      // 로그인한 사용자 정보 셋팅하기 : 글쓰기버튼은
      // 로그인한 사람에게 노출되므로 아래코드는 괜찮다!
      logData.current = JSON.parse(myCon.logSts);
      // 이 데이터로 가상돔 구성시 리액트코드에 데이터매칭함!
      // 필요데이터: 로그인 사용자이름(unm), 이메일(eml)

      setBdMode("C");

      // 1. 글쓴이와 이메일은 로그인상태값에서 읽어와서
      // 본 읽기전용 입력창에 넣어준다!
      // 지금은 임시로 tomtom / tom@gmail.com
      // $(() => {
      //   // DOM 그려진 후 실행
      //   // (1) 글쓴이
      //   $(".writeone .name").val("tomtom");
      //   // (2) 이메일
      //   $(".writeone .email").val("tom@gmail.com");
      // });
    } ////// else if ///////

    // 3-4. 글쓰기 서브밋 /////////
    else if (modeTxt === "S" && bdMode === "C") {
      // console.log("글쓰기 서브밋");

      // 제목,내용 입력요소
      const subEle = $(".writeone .subject");
      const contEle = $(".writeone .content");

      // // console.log(subEle.val().trim(),contEle.val().trim());

      // 1. 제목, 내용 필수입력 체크
      // 리랜더링 없는 DOM상태 기능구현!!
      if (subEle.val().trim() === "" || contEle.val().trim() === "") {
        window.alert("제목과 내용은 필수입력입니다!");
      } /////// if /////////

      // 2. 통과시 실제 데이터 입력하기
      else {
        const addZero = (x) => (x < 10 ? "0" + x : x);
        // 1. 날짜 데이터 구성
        let today = new Date();
        let yy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();

        // 2. 원본 데이터 변수할당
        let orgTemp = orgData;

        // 3. 입력idx 기본키값을 숫자값 중 최대값에 1을 더함!
        // 3-1. idx값만 모아서 배열로 재구성함(숫자형변환!)
        let arrIdx = orgTemp.map((v) => parseInt(v.idx));
        // 최대값
        let maxNum = Math.max(...arrIdx);
        // console.log("idx배열:", arrIdx);
        // console.log("최대값:", maxNum);
        // console.log("다른방법최대값:", Math.max.apply(null, arrIdx));
        // 스프레드 연산자 나오기 전에는 항상 apply메서드 사용함
        // apply(this객체,배열값) -> this객체 전달없으므로 null씀
        // -> 배열값 내부의 값을 하나씩 전달함!

        // Math.max() 에서 값을 비교하기 위해 배열값을
        // 나열하여 입력하면 된다!
        // 배열값을 나열하는 연산자는? Spread Operator(스프레드연산자 : ...)
        // 다른배열을 합칠때도 사용함

        // let aa = [1,16];
        // let bb = [300,500];
        // let cc = [...aa,...bb];
        // // console.log('합친배열:',cc);

        // let test = Math.max(1,2,3,4,5);
        // // console.log('1~5사이최대값:',test);

        // 4. 임시변수에 입력할 객체 데이터 생성하기
        let temp = {
          idx: maxNum + 1,
          tit: subEle.val().trim(),
          cont: contEle.val().trim(),
          att: "",
          date: `${yy}-${addZero(mm)}-${addZero(dd)}`,
          uid: logData.current.uid,
          unm: logData.current.unm,
          cnt: "0",
        };

        // // console.log("입력전 준비데이터:", temp);

        // 5. 원본임시변수에 배열데이터 값 push하기
        orgTemp.push(temp);

        // // console.log("최종반영 전체데이터:",  orgTemp);

        // 6. 로컬스에 반영하기
        localStorage.setItem("bdata", JSON.stringify(orgTemp));

        // 내림차순 정렬하도록 firstSts값을 true로 변경하면
        // 리랜더링시 정렬 적용될까? bindList 전에 적용되야함!
        firstSts.current = true; //-> 효과있음!
        // bindList() 위의 내림차순코드가 실행됨!

        // 7. 리스트 페이지로 이동하기 : 리랜더링됨!
        setBdMode("L");
      } //////// else //////////
    } ////// else if ///////

    // 3-5. 수정모드 /////////
    else if (modeTxt === "U") {
      // console.log("수정모드");

      setBdMode("U");
    } ////// else if ///////

    // 3-6. 수정하기 서브밋 /////////
    else if (modeTxt === "S" && bdMode === "U") {
      // console.log("수정하기 서브밋");

      // 제목,내용 입력요소
      const subEle = $(".updateone .subject");
      const contEle = $(".updateone .content");

      // // console.log(subEle.val().trim(),contEle.val().trim());

      // 1. 제목, 내용 필수입력 체크
      // 리랜더링 없는 DOM상태 기능구현!!
      if (subEle.val().trim() === "" || contEle.val().trim() === "") {
        window.alert("제목과 내용은 필수입력입니다!");
      } /////// if /////////

      // 2. 통과시 실제 데이터 입력하기
      else {
        // 2. 원본 데이터 변수할당
        let orgTemp = orgData;

        // 3. 원본에 해당 데이터 찾아서 업데이트하기
        orgTemp.some((v) => {
          if (Number(cData.current.idx) === Number(v.idx)) {
            // 제목과 내용 업데이트하기
            v.tit = subEle.val().trim();
            v.cont = contEle.val().trim();

            // 이코드를 만나면 여기시 순회종료!
            return true;
          } ///// if ////
        }); /////// Array some /////

        // 4. 로컬스에 반영하기
        localStorage.setItem("bdata", JSON.stringify(orgTemp));

        // 5. 리스트 페이지로 이동하기
        setBdMode("L");
      } //////// else //////////
    } ////// else if ///////

    // 3-7. 삭제하기 /////////
    else if (modeTxt === "D" && bdMode === "U") {
      if (window.confirm("정말로 글을 삭제하시겠습니까?")) {
        // 1. 데이터 순회하다가 해당데이터 이면
        // 순번으로 splice(순번,1)사용 삭제
        orgData.some((v, i) => {
          if (Number(cData.current.idx) === Number(v.idx)) {
            // 해당 데이터의 순번으로 삭제
            orgData.splice(i, 1);

            // 이코드를 만나면 여기시 순회종료!
            return true;
          } ///// if ////
        }); /////// Array some /////

        // 2. 로컬스에 반영하기
        localStorage.setItem("bdata", JSON.stringify(orgData));

        // 3. 리스트 페이지로 이동하기
        setBdMode("L");
      } ///// if //////
    } ////// else if ///////
  }; //////// chgMode 함수 ///////////

  // 사용자 비교함수 //////////
  // 원본으로 부터 해당 사용자 정보 조회하여
  // 글쓴이와 로그인사용자가 같으면 btnSts값을 true로 업데이트
  const compUsr = (usr) => {
    // usr - 글쓴이 아이디(uid)
    // 사용자 정보조회 로컬스(mem-info)
    // 보드 상단에서 null일경우 생성함수 이미 호출!
    // null을 고려하지 말고 코드작성!

    // 로그인 상태일 경우 조회하여
    // 버튼 상태 업데이트 하기
    if (myCon.logSts !== null) {
      // 1. 로컬스 원본 데이터 조회
      const info = JSON.parse(localStorage.getItem("mem-data"));
      // console.log(info);

      // 2. 원본으로 부터 해당 사용자 정보 조회하여
      // 글쓴이와 로그인사용자가 같으면 btnSts값을 true로 업데이트
      const cUser = info.find((v) => {
        if (v.uid === usr) return true;
      });

      // console.log(cUser);

      // 3. 로그인사용자 정보와 조회하기
      // 아이디로 조회함!
      if (cUser) {
        // 할당안되면 undefined 이므로 할당되었을때만 if문처리
        const currUsr = JSON.parse(myCon.logSts);
        if (currUsr.uid === cUser.uid) setBtnSts(true);
        else setBtnSts(false);
      } //// if /////
      else {
        // 사용자비교값이 없는 경우
        setBtnSts(false);
      } //// else ////
    } /////// if ////////////
    else {
      // 로그인 안한 상태 ////
      setBtnSts(false);
    } //////// else ///////////
  }; ///////// compUsr 함수 ////////

  /************************************* 
    * 함수명 : plusCnt
    * 기능 : 게시판 조회수 증가 반영하기
    * 조건 : 
      (1) 자신의 글은 업데이트 안됨
      (2) 한 글에 대해 한번만 업데이트 됨
      -> 방법: 사용자가 방문한 글 고유번호를
      배열에 기록하고 조회하여 같은 글인 경우 
      업데이트를 막아준다!
      (이때 배열은 세션스에 기록함! 이유는
        브라우저 닫을 때 사라짐!)

    * 업데이트 시점 : 글 읽기 모드에 들어간후
  *************************************/
  const plusCnt = () => {
    // 0. 처음에 통과상태 설정하기
    let isOK = true;
    // 세션스에 등록된글 or 로그인사용자 글 일때 false처리!

    // 1. [ 현재읽은 글은 cData.current로 읽어옴! ]
    let cidx = cData.current.idx;
    // console.log("조회수 증가체크 idx:", cidx);

    // 2. [ 세션스에 등록된 글 idx가 있는지 여부 확인하기 ]
    // 세션스에 'cnt-idx' 없으면 만들기 ///////
    if (!sessionStorage.getItem("cnt-idx"))
      sessionStorage.setItem("cnt-idx", "[]");

    // 세션스 파싱!
    let cntIdx = JSON.parse(sessionStorage.getItem("cnt-idx"));

    // 배열여부확인
    // console.log(Array.isArray(cntIdx), cntIdx);

    // 3. [ 카운트 증가하기 조건검사 ] //////////

    // 3-1. 세션스에 등록된 글번호만큼 돌다가 같은 글이면
    // isOK값을 false로 처리함!
    // 주의: cntIdx는 숫자로만 된 배열이다! [1,2,5,6]
    cntIdx.some((v) => {
      if (Number(v) === Number(cidx)) {
        isOK = false;
        // 여기서 나감!(break역할!)
        return true;
      } /// if /////
    }); /////////// some //////

    // 3-2. 로그인한 사용자일 경우 로그인 사용자계정과 같은
    // 글이면 증가하지 않는다!
    if (localStorage.getItem("minfo")) {
      // 1.사용자 로그인정보 로컬스
      let minfo = JSON.parse(localStorage.getItem("minfo"));

      // 2.로그인 아이디
      let cUid = minfo.uid;

      // 3.로그인 아이디 === 현재글 아이디 검사통과시
      // isOK 값 false처리로 조회수 증가막기!
      if (cUid === cData.current.uid) isOK = false;

      // console.log("로그인사용자검사", cUid, isOK);
    } ////////////// if //////////////

    // console.log(localStorage.getItem("bdata"));

    // 4. [ 카운트 증가하기 ] ////////
    if (isOK) {
      // 로컬스 'bdata'에서 조회하여 업데이트함!
      let data = JSON.parse(localStorage.getItem("bdata"));
      data.some((v) => {
        if (Number(v.idx) === Number(cidx)) {
          // 기존 cnt항목의 숫자를 1증가하여 업데이트!
          v.cnt = Number(v.cnt) + 1;
          // 여기서 나감!(break역할!)
          return true;
        } ////////// if //////////
      });

      // 원본 데이터에 반영하기 : 꼭해야만 리스트가 업데이트됨!
      orgData = data;

      // 반영된 배열 데이터를 다시 'bdata' 로컬스에 넣기
      localStorage.setItem("bdata", JSON.stringify(data));
    } //////////// if /////////////

    // 5. [ 현재글 세션스에 처리하기 ] ////////
    if (isOK) {
      // 조회수 증가일 경우에만 글번호 세션스 등록!
      // 세션스 배열에 idx값 넣기
      cntIdx.push(Number(cidx));

      // console.log("넣은후:", cntIdx);

      // 세션스에 저장하기
      sessionStorage.setItem("cnt-idx", JSON.stringify(cntIdx));
    } /////////////// if //////////////
  }; //////////// plusCnt 함수 /////////////

  // 검색기능수행 함수 ////////////////////
  const searchList = () => {
    // 1. 검색기준값 읽어오기
    const cta = $("#cta").val();

    // 2. 검색어 읽어오기 : 소문자변환, 앞뒤공백제거
    const inpVal = $("#stxt").val().toLowerCase().trim();

    // 3. 검색어입력 안한경우 경고창과 return
    if (inpVal === "") {
      alert("Write down keyword!!!");
      return;
    } //////// if //////

    // 3번이후 검색실행시 검색상태값 업데이트 true
    searchSts.current = true; // List버튼 보이기!

    console.log("검색시작~!", cta, inpVal);

    // 원본데이터로 검색하지 않고 로컬스토리지 데이터사용!
    console.log("원본데이터:", orgData);

    // 로컬스 데이터 가져오기
    const storageData = JSON.parse(localStorage.getItem("bdata"));

    console.log("로컬스:", storageData);

    // 4. 전체 로컬스 데이터에서 검색기준값으로 검색하기
    const resData = storageData.filter((v) => {
      // 원본 문자데이터 소문자변환!
      let compTxt = v[cta].toLowerCase();

      // 검색기준이 동적으로 변수에 담기므로
      // 대괄호로 객체값을 읽어온다!
      // indexOf() 로 like검색함!
      if (compTxt.indexOf(inpVal) !== -1) return true;
    });

    console.log("검색데이터:", resData);

    // 5. 리스트 업데이트 하기
    orgData = resData;

    // 내림차순 정렬하도록 firstSts값을 true로 변경하면
    // 리랜더링시 정렬 적용될까? bindList 전에 적용되야함!
    firstSts.current = true; //-> 효과있음!
    // bindList() 위의 내림차순코드가 실행됨!

    // 6. 강제 리랜더링하기
    // 조건: 기존 1페이지 일때만 실행
    // 다른 페이지에서 검색하면 1페이지로 변경(이때 리랜더링됨!)
    if (pgNum === 1) setForce(Math.random());
    else setPgNum(1);
  }; ////////////// searchList 함수 //////////////

  // 검색을 실행하고 다른페이지로 이동할 경우
  // 데이터가 검색된 것으로 남아있으므로
  // 이때 소멸자로 원본 데이터 초기화 셋팅 함수를
  // 호출해준다!!
  useEffect(() => {
    // 처음 한번 들어왔을때 내림차순 정렬은 효과 있는가?
    // 화면 랜더링 전에 정렬을 해야 바로 반영되므로
    // 여기서 정렬은 효과 없음!
    // sortData(orgData,[-1,1]);

    // 소멸자
    return () => {
      rawData();
    }; ///// return 소멸자 /////
  }, []); /////// useEffect /////////

  // 리턴코드 ////////////////////
  return (
    <>
      {
        /* 1. 게시판 리스트 : 게시판 모드 'L'일때 출력 */
        bdMode === "L" && (
          <>
            {/* 전체 타이틀 */}
            <h1 className="tit">OPINION</h1>

            {/* 검색옵션박스 */}
            <div className="selbx">
              <select name="cta" id="cta" className="cta">
                <option value="tit">Title</option>
                <option value="cont">Contents</option>
                <option value="unm">Writer</option>
              </select>
              <select
                name="sel"
                id="sel"
                className="sel"
                onChange={(e) => {
                  // 선택값읽기
                  let opt = $(e.currentTarget).val();
                  console.log("선택값:", opt);
                  // 선택에 따른 정렬호출
                  if (Number(opt) === 0) sortData(orgData, [-1, 1]);
                  else sortData(orgData, [1, -1]);

                  console.log(orgData);
                  // 강제 리랜더링
                  setForce(Math.random());
                }}
              >
                <option value="0">Descending</option>
                <option value="1">Ascending</option>
              </select>
              <input
                id="stxt"
                type="text"
                maxLength="50"
                onKeyUp={(e) => {
                  // 엔터칠때 검색실행!
                  if (e.code === "Enter") searchList();
                  // console.log(e.code);
                }}
              />
              <button className="sbtn" onClick={searchList}>
                Search
              </button>
            </div>

            {/* 리스트 테이블 */}
            <table className="dtbl" id="board">
              {/* <caption></caption> */}
              {/* 상단 컬럼명 표시영역 */}
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Title</th>
                  <th>Writer</th>
                  <th>Date</th>
                  <th>Hits</th>
                </tr>
              </thead>

              {/* 중앙 레코드 표시부분 */}
              <tbody>{bindList()}</tbody>

              {/* 하단 페이징 표시부분 */}
              <tfoot>
                <tr>
                  <td colSpan="5" className="paging">
                    {/* 페이징번호 위치  */}
                    {pagingLink()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        )
      }
      {
        /* 2. 글쓰기 테이블 : 게시판 모드 'C'일때 출력 */
        bdMode === "C" && (
          <table className="dtblview writeone">
            <caption>OPINION : Write</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="name"
                    size="20"
                    readOnly
                    value={logData.current.unm}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    className="email"
                    size="40"
                    readOnly
                    value={logData.current.eml}
                  />
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" className="subject" size="60" />
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea className="content" cols="60" rows="10"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        )
      }
      {
        /* 3. 읽기 테이블 : 게시판 모드 'R'일때 출력 */
        bdMode === "R" && (
          <table className="dtblview readone">
            <caption>OPINION : Read</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="name"
                    size="20"
                    readOnly
                    value={cData.current.unm}
                  />
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    type="text"
                    className="subject"
                    size="60"
                    readOnly
                    value={cData.current.tit}
                  />
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea
                    className="content"
                    cols="60"
                    rows="10"
                    readOnly
                    value={cData.current.cont}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        )
      }
      {
        /* 4. 수정(삭제) 테이블 : 게시판 모드 'U'일때 출력 */
        bdMode === "U" && (
          <table className="dtblview updateone">
            <caption>OPINION : Modify</caption>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="name"
                    size="20"
                    readOnly
                    value={cData.current.unm}
                  />
                  {/* value는 수정불가! */}
                </td>
              </tr>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    type="text"
                    className="subject"
                    size="60"
                    defaultValue={cData.current.tit}
                  />
                  {/* defaultValue로 써야 수정가능! */}
                </td>
              </tr>
              <tr>
                <td>Content</td>
                <td>
                  <textarea
                    className="content"
                    cols="60"
                    rows="10"
                    defaultValue={cData.current.cont}
                  ></textarea>
                  {/* defaultValue로 써야 수정가능! */}
                </td>
              </tr>
            </tbody>
          </table>
        )
      }

      <br />
      {/* 5. 버튼 그룹박스 */}
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 리스트 모드(L)
                // 검색상태관리 참조변수 searchSts값이 true일때만 출력!
                bdMode === "L" && searchSts.current && (
                  <>
                    {/* List버튼은 검색실행시에만 나타남
                  클릭시 전체리스트로 돌아감. 이때 버튼사라짐 */}
                    <button
                      onClick={() => {
                        // 데이터 초기화(전체리스트)
                        rawData();
                        setForce(Math.random());
                        $("#stxt").val("");
                        $("#cta").val("tit");
                      }}
                    >
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
              {
                // 리스트 모드(L) : 로그인상태이면 쓰기버튼 보이기
                bdMode === "L" && myCon.logSts !== null && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">Write</a>
                    </button>
                  </>
                )
              }
              {
                // 글쓰기 모드(C)
                bdMode === "C" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">Submit</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
              {
                // 읽기 모드(R)
                bdMode === "R" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                    {
                      /* btnSts 상태변수가 true일때 보임
                      -> 글쓴이===로그인사용자 일때 true변경 */
                      btnSts && (
                        <button onClick={chgMode}>
                          <a href="#">Modify</a>
                        </button>
                      )
                    }
                  </>
                )
              }
              {
                // 수정 모드(U)
                bdMode === "U" && (
                  <>
                    <button onClick={chgMode}>
                      <a href="#">Submit</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">Delete</a>
                    </button>
                    <button onClick={chgMode}>
                      <a href="#">List</a>
                    </button>
                  </>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
} //////////// Board 컴포넌트 /////////////
