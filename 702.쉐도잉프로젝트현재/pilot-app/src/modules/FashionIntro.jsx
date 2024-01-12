// Pilot PJ - 패션인트로 컴포넌트 ////////

// 컨텍스트 API 불러오기
import { useContext } from "react";
import { pCon } from "./PilotContext";

// 패션 인트로 데이터 불러오기
import { fsData } from "../data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명
  // props.subcat - 서브 카테고리 분류명

  // 컨텍스트 사용
  const myCon = useContext(pCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  // 선택데이터
  let selData = fsData[props.cat];

  if (props.subcat !== "etc") 
  selData = fsData[props.cat][props.subcat[0]][props.subcat[1]];

  // 새로적용할 스타일객체
  const newStyle = {};
  // 'women'일 경우 값을 셋팅
  if (props.cat == "women") newStyle.flexDirection = "row-reverse";

  // 리턴 코드 ////////////////////////////
  return (
    <div id={props.cat} className="fs-page">
      <ul
        className="pgc"
        style={newStyle}
        //   style={props.cat=='women'?{flexDirection:'row-reverse'}:{}}
      >
        {/* 스타일일때 이미지경로는 배열! */}
        {props.subcat === "etc" && (
          <li className="imgc">
            <img
              src={props.cat == "style" ? selData.isrc[0] : selData.isrc}
              alt={props.cat == "style" ? selData.ialt[0] : selData.ialt}
            />
          </li>
        )}
        {/* 스타일이면 타이틀2개, 아니면 1개 */}
        {props.subcat === "etc" && (
          <li className="txtc">
            {props.cat != "style" && (
              <h2>
                <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                  {selData.tit[0]} <br />
                  {selData.tit[1]}
                </a>
              </h2>
            )}
            {props.cat == "style" && (
              <>
                <h2 className="tm">
                  <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                    {selData.tit[0][0]} <br />
                    {selData.tit[0][1]}
                  </a>
                </h2>
                <h2 className="tw">
                  <a href="#" onClick={() => myCon.chgPgName(props.cat)}>
                    {selData.tit[1][0]} <br />
                    {selData.tit[1][1]}
                  </a>
                </h2>
              </>
            )}
          </li>
        )}
        {/* 스타일 패션에서만 나오는 이미지 */}
        {props.cat == "style" && (
          <li className="imgc">
            <img src={selData.isrc[1]} alt={selData.ialt[1]} />
          </li>
        )}

        {/* 서브페이지용 구성 */}
        {props.cat == "sub" && props.subcat[1] === 0 && (
          <>
            {/* 글자박스 */}
            <li className="txtc">
              <h2>
                <a href="#">
                  {selData.tit[0]} <br />
                  {selData.tit[1]}
                </a>
              </h2>
            </li>
            {/* 이미지박스 */}
            <li className="imgc">
              <img src={selData.isrc} alt={selData.ialt} />
            </li>
          </>
        )}
        {props.cat == "sub" && props.subcat[1] === 1 && (
          <>
          {/* 이미지박스 */}
          <li className="imgc">
              <img src={selData.isrc[0]} alt={selData.ialt[0]} />
            </li>
            {/* 글자박스 */}
            <li className="txtc">
              <h2>
                <a href="#">
                  {selData.tit[0]} <br />
                  {selData.tit[1]}
                </a>
              </h2>
            </li>
            {/* 이미지박스 */}
            <li className="imgc">
              <img src={selData.isrc[1]} alt={selData.ialt[1]} />
            </li>
          </>
        )}
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////
