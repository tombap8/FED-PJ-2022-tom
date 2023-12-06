// 게시판 형식의 객체를 생성함!
let obj = [
  {
    idx: 1,
    tit: "내가 왕이될 상인가?",
    cont: "이정재형은 진정 왕이십니다~!",
  },
];
localStorage.setItem("minfo", JSON.stringify(obj));

let localData = localStorage.getItem("minfo");
localData = JSON.parse(localData);
bindCode = localData
  .map(
    (v, i) => `
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class="del-link">
                    <a href="#" data-idx="${i}">×</a>
                </td>
            </tr>
        `
  )
  .join("");
