///  메뉴버튼 모듈 - MenuBtn.js
import $ from 'jquery';
import "./css/menubtn.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function MenuBtn(){
    return(
        <>
        <section className="menubtn">
            <div className="imbx">
                <img src="" alt="" />
            </div>
            <div className="titbx">
                <h3></h3>
                <h2></h2>
            </div>
            <div className="btnbx">
                <button></button>
            </div>  
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default MenuBtn;