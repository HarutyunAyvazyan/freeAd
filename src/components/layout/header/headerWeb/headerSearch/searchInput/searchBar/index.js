import { useEffect, useState } from "react";
import SearchResults from "../searchResults";
import "./style.css"
import { FaSearch } from "react-icons/fa";
import ModalWindowSearch from "../modalWindowSearch";


const SearchBar = ({ setOpenModal,handleChange,inputValue,setRemoveClicked,removeClicked }) => {
    // const [inputValue, setInputValue] = useState("")
    const [searchHistoryArray,setSearchHistoryArray] = useState([])
  
    // useEffect(() => {
    //     const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    //     if (searchHistory) {
    //         setSearchHistoryArray(searchHistory);
    //     }
    // }, []); // Empty dependency array ensures this effect runs only once on mount

    // const handleChange = (e) => {
    //     setInputValue(e.target.value);
    // };

 

    return (
        <div className="searchBar" >
            <FaSearch className="searchIcon" />
            <input placeholder="search ..."
                onChange={handleChange}
                value={inputValue}
                className="searcInput"
                onFocus={() => {
                    setOpenModal(true)
                }}
              onBlur={() => {
                    setTimeout(() => {
                        setOpenModal(false)
                    }, 300)
                }}  
            />
        </div>
    )
}

export default SearchBar