// DC PJ 캐릭터 상세페이지
// -> 캐릭터 리스트로 부터 라우팅 이동하여 보이는 페이지

import { Banner } from "../modules/Banner";
import { useLocation } from "react-router-dom";

// 캐릭터 상세 페이지 CSS불러오기
import "../../css/cat_detail.css";
import { CatList } from "../modules/CatList";

export function CatDetail() {
  // 라우터 호출시 전달한 값을 받는다!
  // 라우터 전달값을 받기위해 useLocation 생성하기!
  const loc = useLocation();

  // 구체적으로 state속성 하위 전달된 객체속성명으로 받는다!
  // 1. 캐릭터 이름
  const cname = loc.state.cname;
  // 2. 캐릭터 설명 : "^"로 문단데이터 구분함
  let cdesc = loc.state.cdesc;
  cdesc = cdesc.split("^");
  // 3. 캐릭터 명세 : "^"로 명세항목별 구분함
  let facts = loc.state.facts;
  facts = facts.split("^");

  console.log(facts);

  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner category={cname} />
      {/* 2. 상세정보박스 */}
      <div className="detail">
        {/* 2-1. 캐릭터 설명박스 */}
        <div className="desc-box">
          <h2>{cname}</h2>
          <div className="cdesc">
            {
              /* 설명배열만큼 p요소로 싸기 */
              cdesc.map((v, i) => (
                <p key={i}>{v}</p>
              ))
            }
          </div>
        </div>
        {/* 2-2. 캐릭터 명세 */}
        <div className="facts">
          <div>
            <h3>CHARACTER FACTS</h3>
            {/* 명세배열만큼 tr로 구성 */}
            <table>
              <tbody>
                {facts.map((v, i) => (
                  <tr key={i}>
                    <td>{v.split(":")[0]}:</td>
                    <td>{v.split(":")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 3. 캐릭터 리스트 */}
      <CatList />
    </>
  );
} /////////// CatDetail 컴포넌트 ////////////////
