// 회원관련 기능 함수 - fnMem.js

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
    localStorage.clear();
    console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
    // 만약 로컬스 "mem-data"가 null이면 만들어준다!
    if (localStorage.getItem("mem-data") === null) {
        localStorage.setItem(
            "mem-data",
            `
                    [
                        {
                            "idx": "1",
                            "uid":"tomtom",
                            "pwd":"1111",
                            "unm":"Tom",
                            "eml":"tom@gmail.com"
                        }
                    ]
                `
        );
    }
}; ///////////// initData /////////////////

export { clearData, initData };
