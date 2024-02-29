import { Link, useParams } from "react-router-dom"
import Categories from "../../../constants/stateCategories"
import { IoIosArrowForward } from "react-icons/io";



import "./style.css"

const SubCategoryPage = () => {
    const { categoryName, subCategoryName } = useParams()
    // console.log(subCategoryId,"subCategoryId",categoryiId)
    // const filteredCategory = Categories
    //     .filter((category) => categoryName === `${subCategoryName}`)
    //     .map((sub) => (
    //         sub.subCategories.filter((suba) => (subCategoryId === `${suba.id}`
    //         ))
    //     ))


    // console.log(filteredCategory,"aaa")

    return (
        <div className="container">
  <div className="subCategoryPage">
              <div className="categoryPageMenuCategories">
                <Link to={"/"} className="categoryPageMenuCategoriesArrow"><h6>GLXAVOR</h6><IoIosArrowForward/> </Link> 
                <Link  to={`/${categoryName}`} className="categoryPageMenuCategoriesArrow"><h6>{categoryName}</h6> <IoIosArrowForward/></Link>
                <h6>{subCategoryName}</h6>

            </div>
            {
                Categories.map((category) => (
                    categoryName === `${category.name}` &&
                    <div>
                        {category.subCategories.map((subCategory) => (
                            subCategoryName === `${subCategory.name}` &&
                                subCategory.subCategories.map((subCategoryLink) => (
                                    <div>
                                        <Link to={`/${categoryName}/${subCategoryName}/${subCategoryLink}`}>
                                            {subCategoryLink}
                                        </Link>
                                    </div>
                                ))
                        ))}
                    </div>
                ))
            }
        </div >
        </div>
      
    )
}

export default SubCategoryPage