import { Link } from "react-router-dom"
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineUpdate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


import "./style.css"
import pageName from "../../../../../../../constants/pageName"
import { useState } from "react";

const categoriesName = [
    {
        image: <FaSearch />,
        name: "Ansharj guyq"
    },
    {
        image: <FaSearch />,
        name: "Transport"
    }, {
        image: <FaSearch />,
        name: "Aashxatanq"
    }, {
        image: <FaSearch />,
        name: "Tun ev Aygi"
    }, {
        image: <FaSearch />,
        name: "Electronika"
    },
]

const SearchResults = ({ openModal, removeLocalStorageItem, searchHistoryRemoveAll }) => {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory"))
    // console.log(searchHistory, "hiiiiiiiii")
    const reverseHistory = searchHistory?.reverse()
    const lastSearch = reverseHistory?.splice(0, 4)
    // console.log(lastSearch, "lastaSAa")

    return (
        <div className="searchResults" style={openModal ? { display: "block" } : { display: "none" }}>
            {lastSearch && lastSearch.length > 0 &&
                <div>
                    <div className="searchResultsRemoveAll" onClick={searchHistoryRemoveAll}>
                        <RiDeleteBin6Line className="searchResultsRemoveAllIcon" />
                        <span className="searchResultsRemoveAllText">jnjel patmutyun@</span>
                    </div>

                    {/* <h4 className="searchResultsTitle">Verjin voronumner@</h4> */}

                    {lastSearch.map((searchName,index) => (
                        <Link to={pageName.home} className="searchResultsItem" key={index}>
                            <MdOutlineUpdate className="searchResultsItemIcon" />
                            <p className="searchResultsItemText">{searchName}</p>
                            <TiDeleteOutline className="searchResultsItemDelete" onClick={() => removeLocalStorageItem(searchName)} />
                        </Link>

                    ))}
                </div>
            }
            <div className="searchResultsCategories">
                {/* <h4 className="searchResultsCategoriesTitle">Nshanavor bajinner</h4> */}
                {categoriesName.map((searchItem,index) => (
                    <div className="searchResultsCategoriesItem" key={index}>
                        <FaSearch src={searchItem.image} className="searchResultsCategoriesIcon" />
                        <p className="searchResultsCategoriesText">{searchItem.name}</p>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default SearchResults