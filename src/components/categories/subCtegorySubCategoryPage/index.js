import { Link, useParams } from "react-router-dom"
import Categories from "../../../constants/stateCategories"
import { IoIosArrowForward } from "react-icons/io";

import "./style.css"

const SubCategorySubCategoryPage = () => {
    const { categoryName, subCategoryName, subCategorySubCategoryName } = useParams()
    console.log(useParams(), "use")
    // const filteredCategory = Categories
    // .filter((category)=> categoryiId === `${category.id}` )
    // .map((sub)=>(
    //     sub.subCategories.filter((suba)=>(  subCategoryId === `${suba.id}`
    //     ))                
    // ))

    return (
        <div className="container">
            <div className="SubCategorySubCategoryPage" style={{marginTop:"200px"}}>
                {/* <div className="categoryPageMenuCategories">
                    <Link to={"/"}
                        className="categoryPageMenuCategoriesArrow">
                        <h6>GLXAVOR</h6>
                        <IoIosArrowForward />
                    </Link>
                    <Link to={`/${categoryName}`}
                        className="categoryPageMenuCategoriesArrow">
                        <h6>{categoryName}</h6>
                        <IoIosArrowForward />
                    </Link>
                    <Link to={`/${categoryName}/${subCategoryName}`}
                        className="categoryPageMenuCategoriesArrow">
                        <h6>{subCategoryName}</h6>
                        <IoIosArrowForward />
                    </Link>
                    <h6>{subCategorySubCategoryName}</h6>
                </div> */}
                subCategorySubCategor page
            </div>
        </div>

    )
}

export default SubCategorySubCategoryPage