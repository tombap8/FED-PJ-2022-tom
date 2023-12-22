// DC PJ 캐릭터 검색결과 리스트 컴포넌트
import { Link } from "react-router-dom";

// 캐릭터 검색 리스트 CSS 가져오기
import "../../css/search_cat_list.css";

export function SchCatList({dt,total}) {
  // dt - 검색된 배열데이터
  // total - 검색된 배열데이터 개수

  // 선택데이터
  const selData = dt;

  // 선택데이터 개수
  const selCnt = total;

  return (
    <>
      {
        // 데이터 개수가 0이 아닐때
        selCnt != 0 && (
          <ul className="clist">
            {selData.map((v, i) => (
              <li key={i}>
                <Link
                  to="/detail"
                  state={{
                    cname: v.cname,
                    cdesc: v.cdesc,
                    facts: v.facts,
                  }}
                >
                  <img src={process.env.PUBLIC_URL+v.tmsrc} alt={v.cname} />
                  <h3>{v.cname}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        // 선택데이터가 0개이면
        selCnt == 0 && (
          <h2 style={{textAlign:'center'}}>
            Sorry, we don't have any matches for that. But there's plenty more
            to see on DC!
          </h2>
        )
      }
    </>
  );
} ///////// SchCatList /////////////////
