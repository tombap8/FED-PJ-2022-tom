import myData from "./data.js";
import myData2 from "./data2.js";
// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

/************************************
 * 서브컴포넌트 1 : GoodsCode
 * 상품리스트 html코드 구성 컴포넌트
************************************/
function GoodsCode(props) { // idx - 데이터 배열순번
    // 선택데이터
    const selData = twoData[props.idx];
  
    // 코드 리턴파트 //////////
    return selData.map((v) => (
      /* props.chgFn(뷰상태1,상품고유번호idx) */
      <a href="#" onClick={()=>props.chgFn(1,v.idx)}>
      <ol class="glist">
        <li>
          <img src={
            props.idx?
            "./images/gallery/"+v.idx+".jpg":
            "./images/vans/vans_"+v.idx+".jpg"
            } alt={props.idx?"드레스":"신발"} />
        </li>
        <li>{v.gname}</li>
        <li>가격 : {v.gprice}원</li>
      </ol></a>
    ));
  } /////////// GoodsCode //////////////////

export {GoodsCode}