// 패션인트로 데이터 JS

export const fsData = {
  men: {
    isrc: "./images/men02.png",
    ialt: "공유다!",
    tit: ["MEN'S", "ESSENTIALS"],
  },
  women: {
    isrc: "./images/women01.png",
    ialt: "여자",
    tit: ["WOMEN'S", "ESSENTIALS"],
  },
  // 스타일 데이터는 배열로 2개를 사용함!
  style: {
    isrc: ["./images/style02.png", "./images/style03.png"],
    ialt: ["여자스타일", "공유스타일"],
    tit: [
      ["MEN'S", "STYLE"],
      ["WOMEN'S", "STYLE"],
    ],
  },


  // 서브페이지용 데이터는 구성이 다름
  sub: {
    men: [
      {
        isrc: "./images/sub/men/03.disc.png",
        ialt: "공유가 해변에 있다!",
        tit: ["MEN'S", "BEACH STYLE"],
      },
      {
        isrc: ["./images/sub/men/04.disc.png", "./images/sub/men/05.disc.png"],
        ialt: ["남자스타일1", "남자스타일2"],
        tit: [
          ["MEN'S", "SPORT STYLE"],
          ["MEN'S", "LIFE STYLE"],
        ],
      },
    ],
    women: [
      {
        isrc: "./images/sub/women/03.disc.png",
        ialt: "여자들의 자유로움이 있다!",
        tit: ["WOMEN'S", "FREE STYLE"],
      },
      {
        isrc: ["./images/sub/women/04.disc.png", "./images/sub/women/05.disc.png"],
        ialt: ["여자스타일1", "여자스타일2"],
        tit: [
          ["WOMEN'S", "SPORT STYLE"],
          ["WOMEN'S", "LIFE STYLE"],
        ],
      },
    ],
    // 스타일 데이터는 배열로 2개를 사용함!
    style: [
      {
        isrc: "./images/sub/style/03.disc.png",
        ialt: "공유가 캠핑을 한다!",
        tit: ["STYLE'S", "CAMPING STYLE"],
      },
      {
        isrc: ["./images/sub/style/04.disc.png", 
        "./images/sub/style/05.disc.png"],
        ialt: ["스타일1", "스타일2"],
        tit: [
          ["STYLE'S", "SPORT STYLE"],
          ["STYLE'S", "LIFE STYLE"],
        ],
      },
    ],
  },
}; //////////// fsData ////////////
