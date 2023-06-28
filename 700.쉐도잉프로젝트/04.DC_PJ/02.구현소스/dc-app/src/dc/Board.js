///  게시판 모듈 - Board.js
import $ from 'jquery';
import "./css/board.css";

// 제이쿼리 로드구역 함수 /////////
function jqFn(){
    $(()=>{

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

function Board(){
    return(
        <>
        {/* 모듈코드 */}
        {/* 게시판 리스트 */}
        <table className="dtbl" id="board">
            <caption>
                OPINION
            </caption>
            {/* 상단 컬럼명 표시영역 */}
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Date</th>
                    <th>Hits</th>
                </tr>
            </thead>

            {/* 중앙 레코드 표시부분 */}
            <tbody>
                <tr>
                    <td colspan="5">There is no data.</td>
                </tr>
            </tbody>

            {/* 하단 페이징 표시부분 */}
            <tfoot>
                <tr>
                    <td colspan="5" className="paging">
                         {/* 페이징번호 위치  */}
                    </td>
                </tr>
            </tfoot>
        </table>

        <br />
        <table className="dtbl btngrp">
            <tr>
                <td>
                    <button>
                        <a href="list.php">List</a>
                    </button>
                    <button className="wbtn">
                        <a href="write.php">Write</a>
                    </button>
                </td>
            </tr>
        </table>
        {/* 빈루트를 만들고 JS로드함수포함 */}
        {jqFn()}
        </>
    )
}

export default Board;