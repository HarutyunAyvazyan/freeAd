import { useEffect, useState } from "react"
import AllCategoryButton from "../allCategoryButton"
import SearchButton from "../searchButton"
import SearchBar from "./searchBar"
import "./style.css"
import ModalWindowSearch from "./modalWindowSearch"
import SearchResults from "./searchResults"

const SearchInput = () => {
    const [openModal, setOpenModal] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [searchHistoryArray, setSearchHistoryArray] = useState([]);
    const [removeClicked, setRemoveClicked] = useState(false); // Flag to track remove button click
    const [inputTouched, setInputTouched] = useState(false); // State to track if input has been touched

    useEffect(() => {
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistoryArray(searchHistory);
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        // setInputTouched(true);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue, "vaaaaaaaaaaaaaaallllllll");
        setOpenModal(false);
        setInputValue("");

        const updatedSearchHistory = [...searchHistoryArray, inputValue];
        setSearchHistoryArray(updatedSearchHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    };

    const removeLocalStorageItem = (e, valueToRemove) => {
        setRemoveClicked(!removeClicked)
        e.preventDefault()
        const updatedSearchHistory = searchHistoryArray.filter(value => value !== valueToRemove);
        setSearchHistoryArray(updatedSearchHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
        e.preventDefault()
        setOpenModal(true)
        setRemoveClicked(true)
    };

    const searchHistoryRemoveAll = (e) => {
        e.preventDefault()
        localStorage.removeItem("searchHistory");
        setSearchHistoryArray([]);
        // setRemoveClicked(true);
    };
    // const handleBlur = () => {
    //     if (removeClicked) {
    //         setOpenModal(true); // Open modal when input is blurred and Remove button was not clicked
    //     }
    //     setOpenModal(false)
    //     // setRemoveClicked(false); // Reset removeClicked flag
    // };

    // console.log(inputTouched,"totototot")
    const onBlur = (event) => {
            setTimeout(() => {
                // alert(removeClicked)
                setOpenModal(false)
            }, 300)
        
    }
    return (
        <form className="searchInputDiv" onSubmit={onSubmit}>
            {/* <AllCategoryButton /> */}
            {/* <input placeholder="search" className="searchInput" /> */}
            <div className="searchInput">
                <SearchBar
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleChange={handleChange}
                    inputValue={inputValue}
                    onBlur={onBlur} />
                <SearchButton openModal={openModal} />
                <SearchResults
                    openModal={openModal}
                    removeLocalStorageItem={removeLocalStorageItem}
                    searchHistoryRemoveAll={searchHistoryRemoveAll}
                    setOpenModal={setOpenModal}
                    setRemoveClicked={setRemoveClicked}
                />
            </div>

            <ModalWindowSearch openModal={openModal} />

        </form>
    )
}

export default SearchInput