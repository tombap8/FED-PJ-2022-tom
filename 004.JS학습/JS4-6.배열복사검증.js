// JS4-6.배열의 복사
const arrData = [
    
    {
        "idx" : "1",
        "tit" : "This is a Title1",
        "cont" : "I wanna talk to you now1",
        "att" : "",
        "date" : "2023-06-01",
        "writer" : "admin",
        "pwd" : "1111",
        "cnt" : "1"
    },

    {
        "idx" : "2",
        "tit" : "This is a Title2",
        "cont" : "I wanna talk to you now2",
        "att" : "",
        "date" : "2023-06-01",
        "writer" : "admin",
        "pwd" : "1111",
        "cnt" : "1"
    },

    {
        "idx" : "3",
        "tit" : "This is a Title3",
        "cont" : "I wanna talk to you now3",
        "att" : "",
        "date" : "2023-06-01",
        "writer" : "admin",
        "pwd" : "1111",
        "cnt" : "1"
    },

    {
        "idx" : "4",
        "tit" : "This is a Title4",
        "cont" : "I wanna talk to you now4",
        "att" : "",
        "date" : "2023-06-01",
        "writer" : "admin",
        "pwd" : "1111",
        "cnt" : "1"
    },

    {
        "idx" : "5",
        "tit" : "This is a Title5",
        "cont" : "I wanna talk to you now5",
        "att" : "",
        "date" : "2023-06-01",
        "writer" : "admin",
        "pwd" : "1111",
        "cnt" : "1"
    },
]

const copyData = arrData;
// const copyData = JSON.parse(JSON.stringify(arrData));

// 데이터변경
copyData.some(v=>{
    if(Number(v.idx)===3){ 
        v.tit = '나야나야나!^^';
        return true;
    }
    
})

// 내림차순변경
copyData.sort((x, y) => {
    return Number(x.idx) ==Number( y.idx) ? 0 : Number(x.idx) > Number(y.idx) ? -1 : 1;
});

console.log('원본:',arrData);
console.log('카피본:',copyData);