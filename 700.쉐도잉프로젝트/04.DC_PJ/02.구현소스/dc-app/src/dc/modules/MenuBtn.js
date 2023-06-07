///  메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "../css/menubtn.css";
import menubtn_data from "../data/menubtn";
import {Link} from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {


    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function MenuBtn() {
    return (
        <>
            <section className="menubtn">
            {
                menubtn_data.map((v,i)=>
                    <div key={i}>
                        <div className="imbx">
                            <img src={v.isrc} alt="메뉴버튼" />
                        </div>
                        <div className="titbx">
                            <h3>{v.tit.split('^')[0]}</h3>
                            <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                        </div>
                        <div className="btnbx">
                            {/* 라우터를 이용한 이동은 반드시 Link를 사용하자! */}
                            <Link to={v.link}>
                                <button>
                                    {v.btn.toUpperCase()}
                                </button>
                            </Link>
                        </div>
                    </div>
                )
                }
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;
