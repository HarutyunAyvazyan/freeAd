import house from '../../assets/images/imageButtonsCategories/realEstate.png'
import car from  '../../assets/images/imageButtonsCategories/auto.jpg'
import clothes from  '../../assets/images/imageButtonsCategories/clothes.jpg'
import animals from  '../../assets/images/imageButtonsCategories/animals.jpg'
import garden from  '../../assets/images/imageButtonsCategories/sad.png'
import sport from  '../../assets/images/imageButtonsCategories/sport.jpg'
import working from  '../../assets/images/imageButtonsCategories/job.jpg'
import electronicDevices from  '../../assets/images/imageButtonsCategories/electroniks.jpg'
import child from  '../../assets/images/imageButtonsCategories/child.jpg'




const Categories = [
    {
        id: 1,
        name: "ANSHARJ GUYQ",
        pathImg: house,
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
            {
                id: 4,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 5,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 6,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն",
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id: 2,
        name: "TRANSPORT",
        pathImg: car,
        subCategories: [
            {
                id: 1,
                name: "avtomeqenaner",
                subCategories: [
                    "avtomeqenenaner",
                    "vtarvac meqenaner"
                ]
            },
            {
                id: 2,
                name: "komercion",
                subCategories: [
                    "bernatarner",
                    "avtobusner"
                ]
            }, {
                id: 3,
                name: "motocikler",
                subCategories: [
                    "motocikler",
                    "pahestamaser"
                ]
            },
        ]
    },
    {
        id: 3,
        name: "ELECTRONIKA",
        pathImg: electronicDevices,
        subCategories: [
            {
                id: 1,
                name: "bjjayin heraxosner",
                subCategories: [
                    "bjjayin heraxosner",
                    "plansheter", "aksesuarner"
                ]
            },
            {
                id: 2,
                name: "hamakargichner ev noutbuker",
                subCategories: [
                    "hamakargichner",
                    "noutbuker", "aksesuarner"
                ]
            }, {
                id: 3,
                name: "audiotexnika",
                subCategories: [
                    "nvagarkichner",
                    "erajshtakan kentronner",
                ]
            },
        ]
    },
    {
        id: 4,
        name: "ASHXATANQ",
        pathImg: working,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id: 5,
        name: "TUN EV AYGI",
        pathImg: garden,
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
        ]
    },
    {
        id: 6,
        name: "HOBBI EV XAXER",
        pathImg: sport,
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
        ]
    }, {
        id: 7,
        name: "KENDANINER",
        pathImg: animals,
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion"
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion", "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 4,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion", "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
        ]
    }, {
        id: 8,
        name: "ANDZNAKAN IRER",
        pathImg: clothes,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id: 9,
        name: "Erexaneri hamar",
        pathImg: child,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    }, {
        id: 10,
        name: "Erexaneri hamar",
        pathImg: child,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id:11,
        name: "Erexaneri hamar",
        pathImg: child,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id: 12,
        name: "Erexaneri hamar",
        pathImg: child,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    },
    {
        id: 13,
        name: "Erexaneri hamar",
        pathImg: child,
        subCategories: [
            {
                id: 1,
                name: "texnologianer ev TT",
                subCategories: [
                    "Ծրագրավորում և զարգացում",
                    "Փորձարկում և QA",
                    "Պրոդուկտի և նախագծերի կառավարում",
                    " Հեռահաղորդակցություն և կապ"
                ]
            },
            {
                id: 2,
                name: "arhest ev artadrutyun",
                subCategories: [
                    "Շինարարություն և վերանորոգում",
                    "Պահեստներ և լոգիստիկա",
                    "Գործարաններ և արտադրություն",
                    "Գյուղատնտեսություն և անասնաբուծություն"
                ]
            }, {
                id: 3,
                name: "marketing ev lratvamijocner",
                subCategories: [
                    "Մարկետինգ, գովազդ և PR",
                    "Մեդիա և դիզայն",
                    "Լրագրություն և հրատարակչություն"
                ]
            },
        ]
    }


]

export default Categories