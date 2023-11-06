/////////// 하단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : FooterArea
  기능 : 하단영역 링크메뉴, 회사정보
*******************************************/
export default function FooterArea() {
  // 하단링크 데이터
  const fTxt = ["정기구독", "회사소개", "광고 및 제휴", "개인정보 처리방침"];

  const makeList = (data) =>
    data.map((v) => (
      <li>
        <a href="#">{v}</a>
      </li>
    ));

  return (
    <React.Fragment>
      <div id="footer-area">
        <footer className="footer-area ibx common-area">
          {/* 3-1.하단로고 */}
          <div className="blogo">
            <img src="./images/footer_logo.png" alt="하단로고" />
          </div>
          {/* 3-2.회사주소 */}
          <address className="addr">
            WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
            VOGUE.COM KOREA IS OPERATED BY DOOSAN MAGAZINE.
          </address>
          {/* 3-3.하단링크 */}
          <ul className="blink">{makeList(fTxt)}</ul>
        </footer>
      </div>
      {/* 위로가기버튼 */}
      <a href="#" className="tbtn fi fi-angle-up">
        <span className="ir">위로가기버튼</span>
      </a>
    </React.Fragment>
  );
} //////////// FooterArea 컴포넌트 /////////////
