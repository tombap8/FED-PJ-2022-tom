// 리스트 페이지 JS - list.js

let temp = "";

for(let i = 0; i<50; i++){
    temp += `
        {
            "idx" : "${i+1}",
            "tit" : "게시판 제목입니다${i+1}",
            "cont" : "게시판 내용입니다${i+1}",
            "att" : "",
            "date" : "2023-06-01",
            "writer" : "관리자",
            "pwd" : "1111",
            "cnt" : "1"
        },
    `;
}

console.log(temp);