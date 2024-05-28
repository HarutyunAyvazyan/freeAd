import { FaSearch } from 'react-icons/fa';

import "./style.css"


const SearchBar = ({ setOpenModal, handleChange, inputValue }) => {
    return (
        <div className='searchBar' >
            <FaSearch className="searchIcon" />
            <input
                placeholder="search ..."
                onChange={handleChange}
                value={inputValue}
                className="searcInput"
                onClick={() => setOpenModal(true)}
            />
        </div>
    )
};

export default SearchBar