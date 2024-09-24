import { useEffect, useState } from "react";
import Categories from "../../../../../constants/stateCategories";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css"
import HeaderBarMobile from "../headreBarMobile";
import HeaderSearchMobile from "../headerSaerchMobile";






const MenuCategoryMobile = ({ toogleModalMobile }) => {
    const [categories, setCategories] = useState(Categories);
    const [currentTab, setCurrentTab] = useState("");
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e, id) => {
        setCurrentTab(id);
        console.log(isOpen, "open")
        console.log(e.target.id, "curent")
    };

    useEffect(() => {
    }, [currentTab]);

    return (
        <>
            <HeaderSearchMobile />
            <div className="menuMobile" >
                <div className="menuMobileContent">
                    {categories.map((category, index) => (

                        <Link to={`/menuCategoriesMobile/${category.name}`}
                            key={index}
                            className="modalMenuMobileContentItem"
                            id={category.id}
                            onClick={(e) => handleClick(e, category.id)}
                        >

                            <div className="menuMobileImageDiv">
                                <img src={category.pathImg} className="menuMobileImage" />

                                <span className="categoryButtonTextMobile" style={{ color: "white" }}>{category.name}</span>

                            </div>

                            {/* {currentTab === category.id &&
                            <div className="subCategoryItems" style={currentTab === category.id ? { display: "flex" } : { display: "none" }}>
                                {
                                    category.subCategories.map((subCategory) => (
                                        <div className="subCategoryItem">
                                            <Link to={`${category.id}/${subCategory.id}`}
                                                onClick={toggleModal}
                                            >
                                                <h4 className="subCategoryItemTitle">{subCategory.name}</h4>
                                            </Link>
                                            {
                                                subCategory.subCategories.map((subCategoryLink) => (
                                                    <Link className="subCategoryItemLink"
                                                        onClick={toggleModal}
                                                        to={`${category.id}/${subCategory.id}/${subCategoryLink}`}
                                                    ><p className="ss">{subCategoryLink}</p></Link>
                                                ))
                                            }
                                        </div>
                                    )
                                    )}
                            </div>
                        } */}
                        </Link>


                    ))}
                </div>
                {/* <div className="aaaa">
                {categories && categories.map((category) => (
                    <div> */}
                {/* {currentTab === category.id &&
                            <div>
                                {
                                    category.subCategories.map((subCategory) => (
                                        <div>
                                            <h4>{subCategory.name}</h4>
                                            {
                                                subCategory.subCategories.map((subCategoryLink) => (
                                                    <p>{subCategoryLink}</p>
                                                ))
                                            }
                                        </div>
                                    )
                                    )}
                            </div>
                        } */}
                {/* </div>

                ))}
            </div> */}
            </div>

        </>

    )

}

export default MenuCategoryMobile