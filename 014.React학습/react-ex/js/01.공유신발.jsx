// 01.공유신발 JSX
import myData from "./data.js";
import myData2 from "./data2.js";
import actEffect from "./act_effect.js";

const twoData = [myData,myData2];

// console.log(twoData[1]);

// 메인 컴포넌트 /////////////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!
function MainComponent() {
  const [dataNum,setDataNum] = React.useState(0);


  React.useLayoutEffect(()=>{
    actEffect();
});



  const chgData = () => {
    setDataNum(dataNum?0:1);
    console.log(dataNum);
  }
  return (
    <React.Fragment>
      {/* 1. 타이틀 */}
      <h1 className="tit">{dataNum?"효진이 입고 ":"공유가 신고 "}다닌다는!</h1>
      {/* 2. 내용박스 */}
      <section>
        <h2>{dataNum?"효진은":"공유는"} 오늘도 멋찝니다!</h2>
        {/* 이미지 */}
        <div className="img-box">
        <img className="main-img" src={dataNum?
          "https://www.sisanews.kr/news/photo/201601/16647_13007_488.jpg":
          "./images/vans/gongyoo.jpg"} alt={dataNum?"상큼효진":"멋진공유"} />

        </div>
      </section>
      {/* 3. 상품리스트박스 */}
      <button onClick={chgData} className="btn-gong">{dataNum?"효진초이스":"공유초이스"}</button>
      <div className="gwrap">
        <GoodsCode number={dataNum} />
      </div>
      {actEffect()}
    </React.Fragment>
  );
} /////////// MainComponent //////////////////

// console.log(myData);

// 상품 html코드 구성 컴포넌트 ///////////
function GoodsCode(props) {
  // console.log('GoodsCode:',props.dataSet);
  const selData = twoData[props.number];
  return selData.map((v) => (
    <ol class="glist">
      <li>
        <img src={
          props.number?
          "./images/gallery/"+v.idx+".jpg":
          "./images/vans/vans_"+v.idx+".jpg"
          }
          alt="신발" />
      </li>
      <li>{v.gname}</li>
      <li>가격 : {v.gprice}원</li>
    </ol>
  ));
} /////////// GoodsCode //////////////////

// 메인컴포넌트 출력하기 //////////
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
