import { Link } from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineUpdate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import pageName from "../../../../../../../constants/pageName";

import "./style.css";

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
];

const SearchResults = ({
    openModal,
    setOpenModal,
    removeLocalStorageItem,
    searchHistoryRemoveAll,
    componentRef
}) => {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    const reverseHistory = searchHistory?.reverse();
    const lastSearch = reverseHistory?.splice(0, 4);

    const handleCloseModal = () => setOpenModal(!openModal);

    return openModal && (
        <div className="searchResults" ref={componentRef}>
            {lastSearch?.length > 0 &&
                <div>
                    <div className="searchResultsRemoveAll" onClick={(e) => searchHistoryRemoveAll(e)}>
                        <RiDeleteBin6Line className="searchResultsRemoveAllIcon" />
                        <span className="searchResultsRemoveAllText">jnjel patmutyun@</span>
                    </div>
                    {lastSearch.map((searchName, index) => (
                        <div key={index} className="searchResultsItem">
                            <Link className="searchResultsItemLink" to={pageName.home} onClick={handleCloseModal}>
                                <MdOutlineUpdate className="searchResultsItemIcon" />
                                <p className="searchResultsItemText">{searchName}</p>
                            </Link>
                            <TiDeleteOutline className="searchResultsItemDelete" onClick={(e) => removeLocalStorageItem(e, searchName)} />
                        </div>
                    ))}
                </div>}
            <div className="searchResultsCategories">
                {categoriesName.map((searchItem, index) => (
                    <div className="searchResultsCategoriesItem" key={index} onClick={handleCloseModal}>
                        <FaSearch src={searchItem.image} className="searchResultsCategoriesIcon" />
                        <p className="searchResultsCategoriesText">{searchItem.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SearchResults