import { Link } from "react-router-dom";
import Categories from "../../../constants/stateCategories";
import CategoryPage from "../../categories/categoryPage";
import "./style.css"

const Home = () => {
    return (
        <div className="homePage">
            {Categories.map((category) => (
                <div>
                    <Link to={`${category.name}`}>
                        <div>
                            {category.name}
                        </div>

                    </Link>
                </div>

            ))}
        </div>
    )
}

export default Home;