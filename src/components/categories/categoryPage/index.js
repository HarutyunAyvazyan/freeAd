import { Link, useParams } from "react-router-dom"
import Categories from "../../../constants/stateCategories"
import { IoIosArrowForward } from "react-icons/io";

import "./style.css"

const CategoryPage = () => {
    const { categoryName } = useParams()
    console.log(categoryName, "categorId")
    return (
        <div className="container">
            <div className="categoryPage">
                <div className="categoryPageMenuCategories">
                    <Link to={"/"} className="categoryPageMenuCategoriesArrow"><h6>GLXAVOR</h6><IoIosArrowForward /> </Link>
                    <h6>{categoryName}</h6>
                </div>
                {Categories.map((category) => (
                    // console.log(category.name)
                    categoryName === `${category.name}` &&
                    
                            category.subCategories.map((subCategory) => (
                                <Link to={`/${category.name}/${subCategory.name}`}>
                                    <div>
                                        <h4>
                                            {subCategory.name}
                                        </h4>
                                    </div>
                                </Link>
                            ))
                ))}
            </div>
        </div>


    )
}

export default CategoryPage