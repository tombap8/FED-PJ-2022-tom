// DC.com GNB메뉴 데이터
export const menu = [
    // {
    //     txt:"Home",
    //     link:"/",
    // },
    {
        txt:"CHARACTERS",
        link:"/character",
    },
    {
        txt:"COMICS",
        link:"/comics",
        sub:[
            {
                txt: "LATEST COMICS",
                link: "/comics",
            },
            {
                txt: "DC UNIVERSE INFINITE",
                link: "/comics",
            },
            {
                txt: "ALL COMICS SERIES",
                link: "/comics",
            },
        ],
    },
    {
        txt:"MOVIES & TV",
        link:"/movies",
        sub:[
            {
                txt: "DC MOVIES",
                link: "/movies",
            },
            {
                txt: "DC SERIES",
                link: "/movies/series",
            },
            {
                txt: "DC ON HBO MAX",
                link: "/movies",
            },
        ]
    },
    {
        txt:"GAMES",
        link:"/games",
    },
    {
        txt:"NEWS",
        link:"/news",
    },
    {
        txt:"VIDEO",
        link:"/video",
    },
    {
        txt:"OPINIONS",
        link:"/board",
    },
];