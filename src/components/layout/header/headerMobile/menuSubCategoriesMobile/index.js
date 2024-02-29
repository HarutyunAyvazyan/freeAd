import { Link, useNavigate, useParams } from "react-router-dom"
import { MdArrowBackIos } from "react-icons/md";

import "./style.css"
import Categories from "../../../../../constants/stateCategories"


const MenuSubCategoryMobile = () => {
    const { menuCategoryName } = useParams()
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        Categories.map((category) => (
            `${category.name}` === menuCategoryName &&
            <div className="menuSubCategoryMobile">
                <div className="menuSubCategoryMobileHeader">
                    <MdArrowBackIos className="menuSubCategoryMobileBackArrow" onClick={goBack} />
                    <span className="menuSubCategoryMobileTitle">{category.name}</span>
                </div>
                <div className="menuSubCategoryMobileContent">
                    {
                        category.subCategories.map((subCategory) => (
                            <div className="menuSubCategoryMobileContentItem">
                                <Link to={`/${category.name}/${subCategory.name}`}>
                                    <h4 className="menuSubCategoryMobileContentTitle">{subCategory.name}</h4>
                                </Link>
                                <div>
                                    {subCategory.subCategories.map((subCategoryLink) => (
                                        <Link to={`/${category.name}/${subCategory.name}/${subCategoryLink}`}>
                                            <p className="menuSubCategoryMobileContentLink">{subCategoryLink}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        ))


    )
}
export default MenuSubCategoryMobile