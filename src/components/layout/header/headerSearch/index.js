// import AllCategoryButton from "./allCategoryButton";
import Logo from "./logo";
import SearchButton from "./searchButton";
import SearchInput from "./searchInput";
import "./style.css"



const HeaderSearch = () => {

    return (
        <div className="headerSearch">
            <div className="container">
                <div className="headerSearchContainer">
                    <Logo />
                    {/* <AllCategoryButton /> */}
                    <SearchInput />
                    <SearchButton />
                </div>
            </div>
        </div>

    )
};

export default HeaderSearch;