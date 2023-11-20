// Pilot PJ - 패션인트로 컴포넌트 ////////

// 패션 인트로 데이터 불러오기
import { fsData } from "../data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명

  // 선택데이터
  const selData = fsData[props.cat];

  // 새로적용할 스타일객체
  const newStyle = {};
  // 'women'일 경우 값을 셋팅
  if (props.cat == "women") newStyle.flexDirection = "row-reverse";

  return (
    <div id={props.cat} className="fs-page">
      <ul
        className="pgc"
        style={newStyle}
        //   style={props.cat=='women'?{flexDirection:'row-reverse'}:{}}
      >
        <li className="imgc">
          <img
            src={
              props.cat == "style" ? 
              selData.isrc[0] : selData.isrc
            }
            alt={
              props.cat == "style" ? 
              selData.ialt[0] : selData.ialt
            }
          />
        </li>
        <li className="txtc">
          {props.cat != "style" && (
            <h2>
              <a href="#">
                {selData.tit[0]} <br />
                {selData.tit[1]}
              </a>
            </h2>
          )}
          {props.cat == "style" && (
            <>
              <h2 className="tm">
                <a href="#">
                  {selData.tit[0][0]} <br />
                  {selData.tit[0][1]}
                </a>
              </h2>
              <h2 className="tw">
                <a href="#">
                  {selData.tit[1][0]} <br />
                  {selData.tit[1][1]}
                </a>
              </h2>
            </>
          )}
        </li>
        {props.cat == "style" && (
          <li className="imgc">
            <img
              src={selData.isrc[1]}
              alt={selData.ialt[1]}
            />
          </li>
        )}
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////
