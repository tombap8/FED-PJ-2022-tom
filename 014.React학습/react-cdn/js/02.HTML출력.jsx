// HTML 출력 JSX

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본XML문법과 동일!)
const myele = (
    <div>
        <h1>♣ 나의 친구 리스트</h1>
        <table>
            <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>생일</th>
            </tr>
            <tr>
                <td>전소민</td>
                <td>010-222-3333</td>
                <td>90.3.4</td>
            </tr>
            <tr>
                <td>김혁수</td>
                <td>010-555-7777</td>
                <td>02.5.8</td>
            </tr>
            <tr>
                <td>이상화</td>
                <td>010-8888-2222</td>
                <td>00.7.8</td>
            </tr>
        </table>
    </div>
);

// 화면출력
// ReactDOM.render(출력할요소,대상요소)
ReactDOM.render(myele, document.querySelector("#root"));
