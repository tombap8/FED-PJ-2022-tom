// DC PJ 캐릭터 검색결과 리스트 컴포넌트
import { Link } from "react-router-dom";

// 캐릭터 리스트 데이터 가져오기
import { catListData } from "../data/swiper_cat";

// 캐릭터 검색 리스트 CSS 가져오기
import "../../css/search_cat_list.css";

export function SchCatList({word,chgCntFn}) {
  // word - 데이터 검색값
  // showCntFn - 개수보이기함수 전달

  // 전달된 검색어 소문자변환
  let kword = word.toLowerCase();

  // 선택데이터
  const selData = catListData.filter((v) => {
    if (v.cname.toLowerCase().indexOf(kword) !== -1) return true;
  });

  // 선택데이터 개수
  const selCnt = selData.length;

  // 선택데이터 개수 후크변수 업데이트하기
  chgCntFn(selCnt);

  console.log(selData, selCnt);

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
                  <img src={v.tmsrc} alt={v.cname} />
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
