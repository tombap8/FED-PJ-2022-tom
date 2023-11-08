/////////// 하단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : FooterArea
  기능 : 하단영역 링크메뉴, 회사정보
*******************************************/
export default function FooterArea() {
  // 하단링크 데이터
  

    
    React.useEffect(()=>{
      return ()=>{
        console.log('언마운트시 실행!!!');
      }

      },[])

      const [bb,setBb] = React.useState(0);
      const [cc,setCc] = React.useState(0);
      console.log('하단영역실행!!!');

      const chgBb = val =>{
        setBb(val==1?0:1)
        setCc(val==1?0:1)
      }

  return (<React.Fragment>
<button onClick={()=>setBb(1)}>bbbb</button>
    <BtnMy aa={bb} bb={cc} />
  </React.Fragment>
    
  );
} //////////// FooterArea 컴포넌트 /////////////

const BtnMy = React.memo((props) => {
  console.log('메모 실행!')
  const fTxt = ["정기구독", "회사소개", "광고 및 제휴", "개인정보 처리방침"];

  const calc = (a,b) => {
    console.log('계산해!');
    return a*b};

  // const iseeu = React.useMemo(()=>calc(a,b));

  const makeList = (data) =>
    data.map((v) => (
      <li>
        <a href="#">{v}</a>
      </li>
    ));
	return <React.Fragment>
  <div id="footer-area">
    <footer className="footer-area ibx common-area">
      {/* 3-1.하단로고 */}
      <div className="blogo">
        <img 
        src={props.aa==0?"./images/footer_logo.png":"https://media.tenor.com/roL8BtIs724AAAAd/vogue-celine-vogue.gif"} alt="하단로고" />
       
      </div>
      {/* 3-2.회사주소 */}
      <address className="addr">
        {props.aa+props.bb}WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
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
}
);
