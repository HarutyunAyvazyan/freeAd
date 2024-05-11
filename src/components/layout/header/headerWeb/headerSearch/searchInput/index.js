import { useEffect, useRef, useState } from "react";

import SearchButton from "../searchButton";
import SearchBar from "./searchBar";
import ModalWindowSearch from "./modalWindowSearch";
import SearchResults from "./searchResults";

import useClickOutside from "../../../../../../hooks/useClickOutside";

import "./style.css";


const SearchInput = () => {
    const [openModal, setOpenModal] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [searchHistoryArray, setSearchHistoryArray] = useState([]);

    const componentRef = useRef();

    useClickOutside(componentRef, () => {
        setOpenModal(false);
    });

    useEffect(() => {
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistoryArray(searchHistory);
    }, []);

    const handleChange = (e) => setInputValue(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        setOpenModal(false);
        setInputValue("");

        let updatedSearchHistory = [...searchHistoryArray];

        if(!searchHistoryArray.includes(inputValue)) {
            updatedSearchHistory = [...updatedSearchHistory, inputValue];
        };

        setSearchHistoryArray(updatedSearchHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    };

    const removeLocalStorageItem = (e, valueToRemove) => {
        e.preventDefault();
        const updatedSearchHistory = searchHistoryArray.filter(value => value !== valueToRemove);
        setSearchHistoryArray(updatedSearchHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory));
    };

    const searchHistoryRemoveAll = (e) => {
        e.preventDefault();
        localStorage.removeItem("searchHistory");
        setSearchHistoryArray([]);
    };

    return (
        <form className="searchInputDiv" onSubmit={onSubmit}>
            <div className="searchInput">
                <SearchBar
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleChange={handleChange}
                    inputValue={inputValue}
                />
                <SearchButton openModal={openModal} />
                <SearchResults
                    componentRef={componentRef}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    removeLocalStorageItem={removeLocalStorageItem}
                    searchHistoryRemoveAll={searchHistoryRemoveAll}
                />
            </div>
            <ModalWindowSearch openModal={openModal} />
        </form>
    )
};

export default SearchInput;