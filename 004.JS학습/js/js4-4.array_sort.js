// JS4-4. 배열의 정렬과 검색 JS

// DOM메서드
import dFn from "./dom.js";

// console.log(dFn);

/****************************************************** 
    [ JS 배열의 정렬 ]
    -> 용어의 정의: 정렬이란?
    : 배열의 값을 기준으로 순서를 다시 정하는것!
    배열의 정렬은 sort() 메서드 사용!
    sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
    정렬할 수 있음!

    [ sort() 메서드의 특징 ]
    1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
        -> 기본 내림차순 메서드 -> reverse()
    2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
            변환된 문자열을 비교하여 순서를 결정함
    (참고: undefined 값일 경우 배열 맨뒤에 배치함)
    -> 주의: 숫자를 비교해도 문자열로 비교하기 때문에
    "25"와 "100" 중 큰 숫자는 100이지만 25를 더 큰
    데이터로 인식한다! 
    -> sort() 메서드 비교함수로 처리!

    [ sort() 메서드 비교함수 ]
    -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
    sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!
    -> 숫자일 경우 빼기 연산을 함!

    숫자데이터배열.sort(function(a,b){return a-b;}) => 오름차순
    숫자데이터배열.sort((a,b)=>a-b) => 오름차순

    숫자데이터배열.sort(function(a,b){return b-a;}) => 내림차순
    숫자데이터배열.sort((a,b)=>b-a) => 내림차순

    -> a는 앞 데이터, b는 뒷 데이터

    [-> 기준정렬 : 오름차순]
    배열변수.sort() -> 기본정렬

    [-> 기준정렬 : 내림차순]
    배열변수.reverse() -> 기본정렬

    ++++++++++++++++++++++++++++++++++++++++++++++

    ->>> 숫자형, 문자형에 무관하게 하나로 처리하기!!!
     [ sort() 메서드만 사용하여 정렬잡기 ]

    ((비교함수사용))
    배열변수.sort(function(x,y){
        if(x>y) return 1;
        if(x<y) return -1;
        return 0;
    })
    
    -> 단순화하기(삼항연산자사용!)

    배열변수.sort(function(x,y){
        return x == y ? 0 : x > y ? 1 : -1;
    })

    -> 더 줄이기! (화살표함수 사용!)

    배열변수.sort((x,y)=> x == y ? 0 : x > y ? 1 : -1)


    -> 리턴값의 의미(오름차순)
    1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
    2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
    3) return 0; -> x,y 정렬을 유지 (리턴값 0)

    -> 내림차순은 양수/음수만 반대로 써주면 된다!

    [ 정렬시 데이터 유의사항 ]

    1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
    하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())

    예)
        배열변수.sort((x,y)=>{
            let a = x.toUpperCase(),
                b = y.toUpperCase();
            
            return a == b ? 0 : a > b ? 1 : -1;
        })

    2. 날짜정렬도 숫자와 동일함
    (날짜데이터 자체가 숫자형으로 되어있음)

    3. 특정언어의 특수문자일 경우 
    localeCompare() 메서드로 문자열 비교를 한다!

    예) 특수문자 x변수를 y변수와 변환후 비교 
        x.localeCompare(y)

  *************************************************************

      [ 배열의 검색 : find() / filter() / indexOf() ]

      1. find() 메서드
      (1) 검색후 첫번째 일치값 하나만을 리턴
      (2) 결과가 없으면 undefined 리턴(if문에서 false처리!)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열의 값 하나(값의 데이터형)
      (5) 활용케이스 : 아이디검사 결과 리턴
      (6) 코드예 :
          변수 = 배열.find(v=>{
              if(v[속성명].indexOf(검색어)!==-1) return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 할당된 변수에 저장하고 문장이 바로 끝난다!


      2. filter() 메서드
      (1) 검색후 모든 일치값을 리턴
      (2) 결과가 없으면 빈배열 리턴([]->배열.length 값이 0)
      (3) 콜백함수구성 : function(val,idx,obj){}
          1) val : 처리중 배열의 값
          2) idx : 처리중 배열의 순번
          3) obj : 처리중 배열전체
      (4) 리턴데이터 : 배열형데이터(하나여도 배열값으로 넘어옴!)
      (5) 활용케이스 : 검색리스트 결과 리턴
      (6) 코드예 :
          변수 = 배열.filter(v=>{
              if(v[속성명].indexOf(검색어)!==-1) return true;
          })
          -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
          return true 하여 다른값이 계속 나올때까지 배열로 값을
          할당변수에 저장한다!(배열을 전체순회함!)

      3. LIKE 검색방법 : 값의 일부만 넣어도 검색되는 방법
      -> indexOf(값) 을 사용함!
      결과값으로 문자열의 위치순번을 리턴하는데
      만약 없으면 -1을 리턴하므로 이것을 이용하여 
      조건문에 -1이 아닌경우가 검색결과가 있는 경우가 됨!
      예) 
      if(문자열.indexOf(검색문자열)!==-1){결과리턴}

      *************************************************

      [ 객체를 배열로 변환하여 리스트 만들기 : 정렬시 필수! ]

      1. 대상: 배열이 아닌 객체형식으로 되어 있는 데이터를
              리스트로 만들고 이를 배열정렬 메서드를 사용코자할때
      
      2. 변경방법:
          (1) 객체의 속성(키)만 배열로 만들어준다!
          Object 객체는 객체를 위한 인터페이스 제공 객체임!
          -> Object.keys(객체)
          : 하는일 - 객체의 속성을 모아 배열로 만들어준다!
          -> 키배열을 만드는 이유는?
          ->>> 키배열 === 값배열 왜????
          -> 객체는 키를 통해 값을 부를 수 있기 때문이다!

          (2) 변경확인 
              변경전 : {속성1:값1,속성2:값2}
              변경후 : [속성1,속성2]

          (3) 속성을 값으로 하는 배열값으로 정렬을 변경할 수 있다
          -> Object.keys(객체).sort()

          (4) 객체값으로 구성되는 배열일 경우 아래와 같이 변환한다
          -> 객체를 변환후 map으로 값을 다시 담아준다!

          객체변수 = 객체

          [ 한번에 값배열로 변환 : 오브젝트.키쓰.맵! ]
          새변수 = Object.keys(객체변수).map(v=>객체변수[v])

      3. 새로구성한 객체 변환 배열로 기존 배열 메서드를 사용하여
          정렬, 검색 후 정렬 등을 수행한다!!


******************************************************/

// 숫자값 배열
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
// 문자값 배열
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

// sort()는 기본 문자로 처리하므로 숫자는 내부함수로 빼기연산처리함!
// console.log('숫자배열:',arrNumber);
// console.log('숫자배열.sort((x,y)=>x-y):',arrNumber.sort((x,y)=>x-y));
// console.log('숫자배열.sort((x,y)=>y-x):',arrNumber.sort((x,y)=>y-x));
// console.log('숫자배열.reverse():',arrNumber.reverse());
// console.log('문자배열:',arrString);
// console.log('문자배열.sort():',arrString.sort());
// console.log('문자배열.reverse():',arrString.reverse());

/////////////////////////////////////////
/// 배열 데이터 화면 출력하기 /////////////

// 1. 숫자로만 된 배열의 화면 뿌리기 ////////
// map()메서드로 배열값을 태그로 감싸서 출력하기

// (1) 출력대상: .showNum
const showNum = dFn.qs(".showNum");

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen = () =>
  (showNum.innerHTML = arrNumber
    .map(
      (val) => `<img src="./images/num/num_0${val}.png" alt="숫자${val}이미지">`
    )
    .join(""));

// 최초출력
showScreen();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox = dFn.qs("#sel");
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox, "change", function () {
  // 1. 선택 option value값
  let optVal = this.value;
  console.log("숫자정렬변경:", optVal);
  // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
  if (optVal == 1) {
    // 오름차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 1처리 -> 순서바꿈!
    arrNumber.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

    // sort() 빼기연산처리 : 앞수-뒷수
    // arrNumber.sort((a,b)=>a-b);
  } /////// if ///
  else if (optVal == 2) {
    // 내림차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 -1처리 -> 순서안바꿈!
    arrNumber.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

    // sort() 빼기연산처리 : 뒷수-앞수
    // arrNumber.sort((a,b)=>b-a);
  } ///// else if ////

  // 화면출력
  // -> 원본 배열의 정렬이 변경된 후 다시 출력
  showScreen();
}); ///// change 이벤트 함수 //////////

//////////////////////////////////////////
// 2. 문자로만 된 배열의 화면 뿌리기 ////////
// map()메서드로 배열값을 태그로 감싸서 출력하기

// (1) 출력대상: .showNum
const showNum2 = dFn.qs(".showNum2");

// (2) 배열 숫자 데이터 만큼 이미지로 변환하여 출력
// map().join() 맵쬬잉!
const showScreen2 = () =>
  (showNum2.innerHTML = arrString.map((val) => `<span>${val}</span>`).join(""));

// 최초출력
showScreen2();

// (3) 정렬 기준에 선택박스 변경 이벤트 발생시
// 정렬 변경하기 (오름차순/내림차순)
// (3-1) 대상: #sel
const selBox2 = dFn.qs("#sel2");
// (3-2) 이벤트 연결하기 : 이벤트 종류 - change
dFn.addEvt(selBox2, "change", function () {
  // 1. 선택 option value값
  let optVal = this.value;
  console.log("숫자정렬변경:", optVal);
  // 2. 정렬 분기 : 1 - 오름차순 / 2 - 내림차순
  if (optVal == 1) {
    // 오름차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 1처리 -> 순서바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));

    // 오름차순 기본 메서드 sort() 사용
    // arrString.sort();
  } /////// if ///
  else if (optVal == 2) {
    // 내림차순
    // [sort()메서드 내부함수사용법]
    // a > b 일때 true이면 -1처리 -> 순서안바꿈!
    arrString.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));

    // 내림차순 기본 메서드 reverse() 사용
    // arrString.reverse();
  } ///// else if ////

  // 화면출력
  // -> 원본 배열의 정렬이 변경된 후 다시 출력
  showScreen2();
}); ///// change 이벤트 함수 //////////

///////////////////////////////////////////
// 3. 객체 데이터 배열의 정렬 //////////////
///////////////////////////////////////////
// (1) 데이터 : 객체데이터 배열
const list1 = [
  {
    idx: 8,
    tit: "나는 구누?",
    cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
  },
  {
    idx: 4,
    tit: "여기는 어디?",
    cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
  },
  {
    idx: 1,
    tit: "나야나",
    cont: "연합 갈라 서포트 계좌오픈",
  },
  {
    idx: 15,
    tit: "이제 얼마나 남은거니?",
    cont: "음악프로그램에 출연 요청글도 써볼까요?",
  },
]; /////////////// list1 /////////////

console.log(list1);

// 출력대상: .showList3
const showList3 = dFn.qs(".showList3");

// (2) html 코드 생성하여 출력하는 함수 만들기
// upCode 함수를 공통으로 파라미터 처리함 /////
const upCode = (data,exBox) => {
  // data - 객체데이터배열 / exBox - 출력할요소
  // 반복코드 만들기
  // 대상코드 : list1 배열
  let hcode = data.map(
    (val) => `
      <tr>
          <td>${val.idx}</td>
          <td>${val.tit}</td>
          <td>${val.cont}</td>
      </tr>
  `
  );
  // console.log('새로운배열:',hcode);

  // 테이블 생성코드 넣기
  exBox.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>
        ${hcode.join("")}
      </tbody>
    </table>
  `;
}; //////////// upCode 함수 //////////////

// (3) 요소에 데이터 코드 넣기 함수호출 : 기본출력
upCode(list1,showList3);

// (4) 정렬변경 이벤트 발생시 실제 정렬 변경하기 ///
// 이벤트 대상: .sel3
const sel3 = dFn.qs(".sel3");
// 정렬기준 대상: .cta3
const cta3 = dFn.qs(".cta3");

// sel3 이벤트 설정하기 ////
// 데이터와 출력 타겟부터 설정후 정렬함수 호출!
dFn.addEvt(sel3, "change", ()=>{
  targetData = list1;
  targetEle = showList3;
}); /////// change ///////////
dFn.addEvt(sel3, "change", sortingFn);

// 검색기준 선택박스 변경시 정렬선택 초기화하기 ///
dFn.addEvt(dFn.qs('.cta3'),'change',()=>{
  dFn.qs('.sel3').value = '0';
}); ////////////// change //////////////////


// 정렬변경함수의 데이터 및 출력요소 셋팅변수
let targetData = list1;
let targetEle = showList3;

// 정렬변경 함수 만들기 ///
function sortingFn() {
  // 1. 선택값 담기 : 오름차순(1), 내림차순(2)
  let optVal = this.value;

  console.log('앞에누구?',this.previousElementSibling);
  // this -> 콤보박스자신
  // 앞에있는 형제요소 선택 : this.previousElementSibling
  // 뒤에있는 형제요소 선택 : this.nextElementSibling
  
  // 2. 정렬기준값 읽기 : 
  // -> idx, tit, cont (객체데이터 배열의 속성명)
  // let cta = cta3.value;
  let cta = this.previousElementSibling.value;
  
  console.log("바꿔! 정렬!", optVal,cta);

  // 2. 분기하기
  // 데이터 대상: targetData 배열
  if (optVal == 1) {
    // 오름차순
    targetData.sort((a, b) => {
      // a,b는 모두 객체 데이터
      // 따라서 내부 속성을 구체적으로 비교함!
      // idx,tit,cont 세가지 중 하나로 비교
      return a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? 1 : -1;
    });
  } //// if //////
  else if (optVal == 2) {
    // 내림차순
    targetData.sort((a, b) => {
      // a,b는 모두 객체 데이터
      // 따라서 내부 속성을 구체적으로 비교함!
      // idx,tit,cont 세가지 중 하나로 비교
      return a[cta] == b[cta] ? 0 : a[cta] > b[cta] ? -1 : 1;
    });
  } //// else if //////

  console.log(targetData);

  // 리스트 코드 반영하기 : 대상데이터,출력요소는
  // 호출시 설정된 것으로 셋팅됨!
  upCode(targetData,targetEle);

  console.log('타겟데이터:',targetData,
  '\n타겟요소:',targetEle);
} ////////// sortingFn 함수 /////////

//////////////////////////////////////////////
////////////// 배열의 검색 !!! ////////////////
//////////////////////////////////////////////

// 4. 객체데이터 검색후 배열의 정렬 ////////////

// (1) 출력대상선정: showList4
const showList4 = dFn.qs('.showList4');
// console.log(showList4);

// (2) 데이터셋팅 : 객체 데이터 배열
const list2 = [
  {
      idx: 58,
      tit: "당근마켓에 가자",
      cont: "당근마켓이 항상 좋은건 아니야~!!ㅠ.ㅠ",
  },
  {
      idx: 15,
      tit: "당근마켓에 가자",
      cont: "당근마켓이 정말로 싸고 좋다구~!",
  },
  {
      idx: 74,
      tit: "점심에 뭐먹지? 당근이지!",
      cont: "오스틴님 생일 서포트 안내",
  },
  {
      idx: 18,
      tit: "직돌이는 쉬고싶다~!",
      cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  {
      idx: 104,
      tit: "올해는 다른 회사로 이직한다!",
      cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
]; /////////////// list2 /////////////   

// 검색/정렬용 변수 
// -> 검색시 newList 변수 업데이트!
let newList = list2;

// (3) 리스트 초기호출!
// 위의  upCode() 함수를 호출하여 페이지 찍기
upCode(list2,showList4);

// (4) sel4 이벤트 설정하기 ////
// 데이터와 출력 타겟부터 설정후 정렬함수 호출!
dFn.addEvt(sel4, "change", ()=>{
  // 정렬용 데이터는 원본 list2 쓰지 않고 newList사용!
  targetData = newList;
  targetEle = showList4;
}); /////// change ///////////
dFn.addEvt(sel4, "change", sortingFn);

// (5) 검색 기능 버튼 클릭 이벤트 설정하기 ////
// - 이벤트대상 : .sbtn
dFn.addEvt(dFn.qs('.sbtn'),'click',searchingFn);

// (6) 검색 함수 만들기 ///////////
function searchingFn(){
  // 1. 검색어 읽어오기
  // 대상: #stxt
  let stxt = dFn.qs('#stxt').value;
  
  // 2. 검색 대상항목 읽어오기
  // 대상: .cta4
  let cta = dFn.qs('.cta4').value;
  
  console.log('입력문자:',stxt,'\n검색기준:',cta);

  // 3. 다중값 리턴 LIKE검색 : 원본데이터(list2)로 검색!
  // filter() + indexOf() 사용!!!
  let res = list2.filter(v=>{
    // v[객체속성명] -> v[cta]
    // -> cta변수에 idx/tit/cont 중 하나들어옴
    // indexOf(검색어) -> indexOf(stxt변수값)
    // 숫자형 데이터일 경우에 에러가 발생하므로
    // String(숫자데이터) -> 문자형변환!
    if(String(v[cta]).indexOf(stxt)!=-1) return true;
  }); ///////// filter ////////////////

  console.log('검색결과:',res);

  // 4. 출력하기 : upCode()
  upCode(res,showList4);

  // 5. 원본 데이터는 그대로 두고 새로운 변수를 선언하여
  // 그 변수에 값은 업데이트 한다!
  // 단, 그 변수 데이터는 정렬시에 사용하도록 한다!
  // -> newList변수
  newList = res;  

} /////////// searchingFn 함수 //////////////

// (7) 전체 리스트 돌아가기 버튼 클릭시 기능구현 ///////
// 대상: .fbtn
dFn.addEvt(dFn.qs('.fbtn'),'click',()=>{
  // 1. newList를 원본 list2 로 업데이트
  newList = list2;
  upCode(newList,showList4);

  // 2. 검색 초기화
  initSearch();
  
}); /////////// click /////////////////

/// 초기화함수 : 검색선택박스 초기화
function initSearch(){
  // 1. 검색어 초기화
  dFn.qs('#stxt').value = '';
  // 2. 검색어 기준 선택초기화
  dFn.qs('.cta4').value = 'idx';
  // 3. 정렬초기화
  dFn.qs('.sel4').value = '0';

} ////////// initSearch 함수 ////////////

// 검색기준 선택박스 변경시 정렬선택 초기화하기 ///
dFn.addEvt(dFn.qs('.cta4'),'change',()=>{
  dFn.qs('.sel4').value = '0';
}); ////////////// change //////////////////



// 샘플 버튼으로 데이터를 검색한 결과를 콘솔에 찍어본다! ////
dFn.addEvt(dFn.qs('.sample'),'click',()=>{

  // 1. find() 메서드 확인하기 : 데이터 정확히 일치해야함!
  let res1 = list2.find(v=>{
    if(v.tit=='당근마켓에 가자') return true;
    // 데이터가 일치하면 배열의 값을 리턴함!

    // if(v.tit=='당근마켓에가자') return true;
    // 데이터가 완벽하게 일치하지 않으면 undefined 리턴!
  });
  console.log("검색어:'당근마켓에가자'\n결과:",res1);

  // 2. find() 메서드 LIKE 검색하기 : 데이터일부로 찾음!
  // indexOf() 결과가 -1이 아니면 내용이 있으므로 처리!
  // find() 의 특성상 처음 만나는 데이터 하나만 리턴함!
  let res2 = list2.find(v=>{
    if(v.tit.indexOf('다')!=-1) return true;
    // 데이터가 일치하면 배열의 값을 리턴함!
  });
  console.log("검색어:'다'\n결과:",res2);

  // 3. filter()  메서드로 LIKE 검색하기
  // fildter()는 해당결과를 배열로 리턴함(여러개수집!)
  let res3 = list2.filter(v=>{
    if(v.tit.indexOf('당근')!=-1) return true;
    // if(v.tit.indexOf('머스캣')!=-1) return true;
    // 검색결과가 없으면 빈배열이 리턴됨(배열.length==0)
  });
  console.log("검색어:'당근'\n결과:",res3);


}); /////////// click ///////////////////////


// 5. 객체원본 배열로 변환하기
// (1) 데이터 : 객체데이터
const list3 ={ 
  item1:{
      idx: 45,
      tit: "강남당근마켓에 가자",
      cont: "다니엘 당근마켓이 정말로 싸고 좋다구~!",
  },
  item2:{
      idx: 94,
      tit: "나라점심에 뭐먹지?",
      cont: "강남오스틴님 생일 서포트 안내",
  },
  item3:{
      idx: 22,
      tit: "다니엘 직돌이는 쉬고싶다~!",
      cont: "마동석 활동정지에 대한 파생글 무통보 삭제 및 경고",
  },
  item4:{
      idx: 111,
      tit: "라면 올해는 다른 회사로 이직한다!",
      cont: "나라 갈라콘 서포트에 많은 참여 부탁드립니다!",
  },
}; /////////////// list3 ///////////// 

// (2) 객체데이터를 배열로 변경하기
// 1단계 : 객체속성을 키배열로 변환하기 
// -> Object.keys(객체) -> 속성값으로 구성된 배열!
// let myKey = Object.keys(list3);
// console.log('키배열:',myKey);
// console.log('키배열 정렬:',myKey.reverse());

// 2단계 : 키배열을 객체의 값으로 대체하여 원하는 값배열만들기
// let myVal = myKey.map(v=>list3[v]);
// console.log('값배열:',myVal);

// 1,2단계를 한번에 값배열 만들기 : 오브젝트.키쓰.맵!
let newList3 = Object.keys(list3).map(v=>list3[v]);
console.log('새로운 값배열:',newList3);

// (3) 출력대상선정 : .showList5
const showList5 = dFn.qs('.showList5');

// (4) 초기출력하기 : upCode()
upCode(newList3, showList5);

// (5) 정렬기능 이벤트 설정하기 : sortingFn()
// 이벤트 대상: .sel5

// 데이터 맵핑하기
dFn.addEvt(dFn.qs('.sel5'),'change',()=>{
  // 타겟 데이터 설정
  targetData = newList3;
  // 타겟 출력요소
  targetEle = showList5;
});

// change이벤트 연결설정
dFn.addEvt(dFn.qs('.sel5'),'change',sortingFn);

// 검색기준 선택박스 변경시 정렬선택 초기화하기 ///
dFn.addEvt(dFn.qs('.cta5'),'change',()=>{
  dFn.qs('.sel5').value = '0';
}); ////////////// change //////////////////






