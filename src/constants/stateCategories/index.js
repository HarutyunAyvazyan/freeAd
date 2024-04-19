import house from '../../assets/images/imageButtonsCategories/realEstate.png'
import car from  '../../assets/images/imageButtonsCategories/auto.jpg'
import clothes from  '../../assets/images/imageButtonsCategories/clothes.jpg'
import animals from  '../../assets/images/imageButtonsCategories/animals.jpg'
import garden from  '../../assets/images/imageButtonsCategories/sad.png'
import sport from  '../../assets/images/imageButtonsCategories/sport.jpg'
import working from  '../../assets/images/imageButtonsCategories/job.jpg'
import electronicDevices from  '../../assets/images/imageButtonsCategories/electroniks.jpg'
import child from  '../../assets/images/imageButtonsCategories/child.jpg'
import FormRegion from '../../components/formsCategories/formsCategoriewsGlobal/formRegion'
import FormHouse from '../../components/formsCategories/formsRealEstate/formHouse'


export const categories = [
    {
        id: 1,
        name: "Ansharj guyq",
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    {
                        id: 6,
                        name: "hoxamaser",
                        formComponent:<FormRegion/>
                    } ,{
                        id: 7,
                        name: "tnakner",
                        formComponent:<FormRegion/>
                    } 
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    {
                        id: 8,
                        name: "hoxamaser",
                        formComponent:<FormRegion/>
                    } ,{
                        id: 9,
                        name: "tnakner",
                        formComponent:<FormRegion/>
                    } 
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    {
                        id: 10,
                        name: "tner",
                        formComponent:<FormHouse/>
                    } ,{
                        id: 11,
                        name: "avtotnakner ev kayanatexi",
                        formComponent:<FormRegion/>
                    } ,
               

                ]
            },
            {
                id: 4,
                name: "norakaruyc ansharj guyq",
                subCategories: [
                    {
                        id: 12,
                        name: "bnakaranner",
                        formComponent:<FormHouse/>
                    }
                    ,
                    {
                        id: 13,
                        name: "tner",
                        formComponent:<FormRegion/>
                        }
                ]
            },
        ]
    },
    {
        id: 2,
        name: "Transport",
        subCategories: [
            {
                id: 1,
                name: "avtomeqenaner",
                subCategories: [
                    {
                        id: 14,
                        name: "avtomeqenenaner",
                        formComponent:<FormRegion/>
                    }
                    ,
                    {
                        id: 15,
                        name:  "vtarvac meqenaner",
                        formComponent:<FormHouse/>
                        }
               
                ]
            },
            {
                id: 2,
                name: "komercion",
                subCategories: [
                    {
                        id: 16,
                        name: "bernatarner",
                        formComponent:<FormRegion/>
                    }
                    ,
                    {
                        id: 17,
                        name:  "avtobusner",
                        formComponent:<FormHouse/>
                        }
                  
                ]
            }, 
        ]
    }

]


const Categories = [
    {
        id: 1,
        name: "Ansharj guyq",
        pathImg: house,
        subCategories: [
            {
                id: 1,
                name: "vacharq",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion",
                    "amaranocner",
                    "avtotnakner ev kayanatexi",
                    "tnakner",
                ]
            },
            {
                id: 2,
                name: "vardzakalutyun",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "hoxamaser",
                    "komercion",
                    "amaranocner",
                    "avtotnakner ev kayanatexi",
                    "tnakner",
                ]
            }, {
                id: 3,
                name: "oravardzov",
                subCategories: [
                    "tner",
                    "bnakaranner",
                    "senyakner",
                    "avtotnakner ev kayanatexi",
                    "amaranocner"

                ]
            },
            {
                id: 4,
                name: "norakaruyc ansharj guyq",
                subCategories: [
                    "bnakaranner",
                    "tner",
                ]
            },
        ]
    },
    {
        id: 2,
        name: "Transport",
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
        name: "Electronika",
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
        name: "Ashxatanq",
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
        name: "Tun ev aygi",
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
        name: "Hobbi ev sport",
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
        name: "Kendaniner",
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
        name: "Andznakan irer",
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
        name: "Carayutyunner",
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
        name: "Kencaxayin texnika",
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
        name: "Biznes ev sarqavorumner",
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
        name: "Shinararutyun",
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
        id:14,
        name: "Ayl",
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