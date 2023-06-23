///  검색 모듈 - Search.js
import $ from 'jquery';
import { useState } from 'react';
import cat_data from '../data/cat';
import "../css/search.css";
import CatList from './CatList';

/* 폰트어썸 임포트 */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Search(){

    // 데이터 선택하기 : Hook 데이터 구성하기
    let [sdt,setSdt] = useState(cat_data);
    // 데이터 건수 : Hook 데이터 구성하기
    let [tot,setTot] = useState(cat_data.length);

    // 데이터 검색 함수 ///////////////////
    const schList = () => {
        // 검색요소 대상 :  #schin
        let inp = document.querySelector("#schin");
        // 1. 검색어 읽기
        let keyword = inp.value;

    }; /////////// schList 함수 /////////////

    return(
        <>
        {/* 모듈코드 */}
        <section className='schbx'>
            {/* 1. 옵션선택박스 */}
            <div className='schopt'>
                {/* 검색박스 */}
                <div className='searching'>
                    {/* 검색버튼 돋보기아이콘 */}
                    <FontAwesomeIcon 
                    icon={faSearch}
                    className='schbtn'
                    title='Open search'
                    onClick={schList} />
                    {/* 입력창 */}
                    <input id='schin' type='text' 
                    placeholder='Filter by Keyword' />
                </div>
            </div>
            {/* 2. 결과리스트박스 */}
            <div className='listbx'>
                {/* 결과타이틀 */}
                <h2 className='restit'>
                    BROWSE CHARACTERS({tot})
                </h2>
                {/* 정렬선택박스 */}
                <aside className='sortbx'>

                </aside>
                {/* 캐릭터 리스트 컴포넌트 
                전달속성 dt - 리스트 데이터 */}
                <CatList dt={sdt} />
            </div>
        </section>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Search;