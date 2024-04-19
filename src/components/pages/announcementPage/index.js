import { useEffect, useState } from "react";
import Categories, { categories } from "../../../constants/stateCategories"
import "./style.css"
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Signin from "../signin";
import Signup from "../signup";
import FormAppartement from "../../formsCategories/formsRealEstate/formAppartement";
import pageName from "../../../constants/pageName";


export const initalState = [
    {
        id: 1,
        name: "Ansharj guyq",
        // pathImg: house,
        subCategories: [
            {
                id: 11,
                name: "vacharq",
                subCategories: [
                    {
                        id:111,
                        name:"tner",
                        component:<FormAppartement/>
                    },
                    {
                        id:112,
                        name:"bnakaranner",
                        component:<Signin/>
                    }, {
                        id:113,
                        name:"hoxamaser",
                        component:<Signup/>
                    },

                ]
            },
            {
                id: 12,
                name: "vardzakalutyun",
                subCategories: [
                    {
                        id:121,
                        name:"amaranocner",
                        component:<FormAppartement/>
                    },
                    {
                        id:122,
                        name:"tnakner",
                        component:<Signin/>
                    }, {
                        id:123,
                        name:"tner",
                        component:<Signup/>
                    }, 
                  
                ]
            },
    ]},
    {
        id: 2,
        name: "transport",
        // pathImg: house,
        subCategories: [
            {
                id: 21,
                name: "avtomeqenaner",
                subCategories: [
                    {
                        id:211,
                        name:"meqenaner",
                        component:<Signup/>
                    },
                    {
                        id:212,
                        name:"motoner",
                        component:<Signin/>
                    }, {
                        id:213,
                        name:"avtoner",
                        component:<FormAppartement/>
                    },

                ]
            },
            {
                id: 22,
                name: "bernatarner",
                subCategories: [
                    {
                        id:221,
                        name:"aaa",
                        component:<Signup/>
                    },
                    {
                        id:222,
                        name:"bbb",
                        component:<Signin/>
                    }, {
                        id:223,
                        name:"ccc",
                        component:<FormAppartement/>
                    }, 
                  
                ]
            },
    ]},
  
]

const Announcement = () => {
    // const [categories, setCategories] = useState(Categories)
    const [currentTab, setCurrentTab] = useState("")

    const handleMouseEnter = (id) => {
        setCurrentTab(id);
        // console.log(id, "id")
    };

    useEffect(() => {

    }, [currentTab]);

    return (
        <div className="container">
            <div className="announcement" style={{ marginTop: "300px" }}>
                {initalState.map((subCategory) => (
                    subCategory.subCategories.map((subCategor) => (
                        // console.log(subCategor, "bb")
                        <div key={subCategor.id}>
                            {subCategor.subCategories.map((sub) => (
                                <div style={{
                                    color: "red",
                                    width: "200px",
                                }}
                                key={sub}>
                                    <Link to={`${pageName.addAnnouncement}/${sub.id}`}>{sub.name}</Link>
                                </div>
                            ))}
                        </div>

                    ))
                ))}


                kajhkfhkjsdaf
            </div>



        </div>
    );
};



export default Announcement

// {categories.map((category, index) => (
//                         <button key={index} className="announcementCategoryButton" id={category.id} onClick={() => handleMouseEnter(category.id)} >
//                             <img src={category.pathImg} alt='' width='30px' height='30px' />
//                             <div style={{
//                                 width: "85%",
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 justifyContent: "space-between",
//                                 alignItems: "center"
//                             }}>
//                                 <span className="announcementCategoryButtonText">{category.name}</span>
//                                 <MdArrowForwardIos className="announcementCategoryButtonArrow" />
//                             </div>
//                         </button>
//                     ))}
//                 </div>
//                 <div className={!currentTab ? "announcementTabcontentText" : "announcementTabcontent"}>
//                     <div className="pppp" style={!currentTab ? { display: "flex" } : { display: "none" }}>
//                         <h1 style={{ fontWeight: "400" }}> xndrum  enq nshel categorian</h1>
//                     </div>
//                     {
//                         categories.map((category, index) => (
//                             currentTab === category.id &&
//                             <div key={index}>
//                                 <h2 style={{ color: "red", margin: "0 auto" }}>xndrum enq nshel entabajin@</h2>
//                                 <div className="categoryName">
//                                     <h2>{category.name}</h2>
//                                 </div>
//                                 <div className="announcementTabItems"
//                                     style={currentTab === category.id ? { display: "flex" } : { display: "none" }}
//                                 >
//                                     {category.subCategories.map((subCategory, index) => (
//                                         <div className="announcementTabItem"
//                                             key={index}>
//                                             <div
//                                             > <h4>{subCategory.name}</h4>
//                                             </div>
//                                             <div >
//                                                 <ul className="announcementSubCategoryUl">
//                                                     {subCategory.subCategories.map((subCategoryLink, index) => (
//                                                         <Link key={index}
//                                                             className="announcementSubCategoryLink"
//                                                             to={`/announcement/${subCategoryLink}`}>
//                                                             <li className="announcementSubCategoryLi" >
//                                                                 <div>
//                                                                     {subCategoryLink}

//                                                                 </div>
//                                                                 </li>
//                                                                 </Link>
//                                                             ))}
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))
//                             } 
