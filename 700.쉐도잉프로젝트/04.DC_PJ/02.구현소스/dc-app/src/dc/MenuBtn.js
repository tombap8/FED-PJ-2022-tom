///  메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function MenuBtn() {
    return (
        <>
            <section className="menubtn">
                <div>
                    <div className="imbx">
                        <img src="./images/menubtn1.jpg" alt="메뉴버튼" />
                    </div>
                    <div className="titbx">
                        <h3>WORLDS COLLIDE</h3>
                        <h2>The Flash is Only in Theaters June 16</h2>
                    </div>
                    <div className="btnbx">
                        <button>TICKETS ON SALE NOW</button>
                    </div>
                </div>
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;
