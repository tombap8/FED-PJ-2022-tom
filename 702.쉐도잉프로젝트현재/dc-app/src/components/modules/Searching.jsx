// DC PJ 검색모듈 컴포넌트

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";

// 검색모듈용 CSS 불러오기
import "../../css/searching.css";

export function Searching(props) {
  // props.kword - 검색어전달
  console.log("전달검색어:", props.kword);

  // 검색리스트 만들기 함수
  const schList = () => {};

  // 엔터키 반응 함수
  const enterKey = () => {};

  // 체크박스검색 함수 ////////
  const chkSearch = () => {};

  // 리스트 정렬 함수 /////////
  const sortList = () => {};

  // 리턴 코드 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
              onClick={schList}
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              onKeyUp={enterKey}
              value={props.kword}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  ALIGNMENT
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Heroes
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="hero" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="hero"
                    className="chklb"></label>
                  </li>
                  <li>
                    It's Complicated
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="comp" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="comp"
                    className="chklb"></label>
                  </li>
                  <li>
                    Villains
                    {/* 숨긴 체크박스 */}
                    <input 
                        type="checkbox" 
                        id="villain" 
                        className="chkhdn"
                        onChange={chkSearch} 
                    />
                    {/* 디자인노출 라벨 */}
                    <label
                    htmlFor="villain"
                    className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
            {/* 2-1. 결과 타이틀 */}
            <h2 className="restit">
                BROWSE CHARACTERS (total)
            </h2>
            {/* 2-2. 정렬선택박스 */}
            <aside className="sortbx">
                <select 
                    name="sel" 
                    id="sel" 
                    className="sel"
                    onChange={sortList}
                >
                    <option value="0">A-Z</option>
                    <option value="1">Z-A</option>
                </select>
            </aside>
            {/* 2-3. 캐릭터 리스트 컴포넌트 */}
            <SchCatList word={props.kword} />
        </div>
      </section>
    </>
  );
} ////////////// Searching 컴포넌트 //////////
