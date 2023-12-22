// Pilot PJ 전체메뉴 컴포넌트

// 컨텍스트 API 불러오기
import { useContext } from "react";
import { pCon } from "./PilotContext";

export function TotalMenu() {

  // 컨텍스트 사용
  const myCon = useContext(pCon);
  // pCon에 Provider value 속성에 공개한 변수/함수를 사용함!

  // 메뉴 이동 처리함수 ///
  const goPage = (txt) => {
    myCon.chgPgName(txt);
    // 전체박스 숨기기
    document.querySelector('.ham').click();
  }; //////// goPage 메서드 ///////////

  // 코드 리턴 //////////////////////
  return (
    <>
      <div className="mbox">
        <video
          src="./images/disc2018.mp4"
          loop="loop"
          muted="muted"
          className="bgm"
        ></video>
        <nav className="mlist">
          <dl>
            <dt>
              <a href="#" 
              onClick={()=>goPage('men')}>MEN</a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" 
              onClick={()=>goPage('women')}>WOMEN</a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" 
              onClick={()=>goPage('style')}>STYLE</a>
            </dt>
            <dd>
              <a href="#">COLLECTION</a>
            </dd>
            <dd>
              <a href="#">SEASON AD</a>
            </dd>
            <dd>
              <a href="#">STAR &amp; NEWS</a>
            </dd>
            <dd>
              <a href="#">MAIN ITEM</a>
            </dd>
          </dl>
        </nav>
      </div>
    </>
  );
} ///////// TotalMenu 컴포넌트 //////////
