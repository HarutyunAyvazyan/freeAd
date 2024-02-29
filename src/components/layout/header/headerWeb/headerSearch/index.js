// import AllCategoryButton from "./allCategoryButton";
import { SlBasket } from "react-icons/sl";

import Logo from "./logo";
import SearchButton from "./searchButton";
import SearchInput from "./searchInput";
import "./style.css"
import { Link } from "react-router-dom";
import AllCategoryButton from "./allCategoryButton";



const HeaderSearch = () => {

    return (
        <div className="headerSearch">
            <div className="container">
                <div className="headerSearchContainer">
                    <Logo />
                    <div style={{width:"80%",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around"}}>
                    <AllCategoryButton />
                    <SearchInput />
                    </div>
                   
                    {/* <SearchButton /> */}
                    <Link to={"basket"}
                    style={{width:"10%"}}>
                    <SlBasket className="basket"/>
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default HeaderSearch;