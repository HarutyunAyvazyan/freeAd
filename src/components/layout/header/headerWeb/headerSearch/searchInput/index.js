import AllCategoryButton from "../allCategoryButton"
import SearchButton from "../searchButton"
import "./style.css"

const SearchInput = () => {
    return (
        <div className="searchInputDiv">
            {/* <AllCategoryButton /> */}
            <input placeholder="search" className="searchInput" />
            <SearchButton />
        </div>
    )
}

export default SearchInput