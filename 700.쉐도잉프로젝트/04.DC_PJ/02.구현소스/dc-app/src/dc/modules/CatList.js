///  캐릭터리스트 모듈 - CatList.js
import $ from 'jquery';
import "../css/catlist.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function CatList(props){

    // 선택데이터
    let sdt = props.dt;

    return(
        <>
        {/* 모듈코드 */}
        <ul className='clist'>
        {
            sdt.map((v,i)=>
                <li key={i}>
                    <img src={v.tmsrc} alt={v.cname} />
                    <h3>{v.cname}</h3>
                </li>
            )
        }
        </ul>
        {/* {console.log(sdt)} */}
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default CatList;