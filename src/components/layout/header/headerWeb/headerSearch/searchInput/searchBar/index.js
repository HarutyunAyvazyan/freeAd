import { FaSearch } from 'react-icons/fa';

import "./style.css"


const SearchBar = ({ setOpenModal, handleChange, inputValue, onBlur }) => {
    return (
        <div className='searchBar' >
            <FaSearch className="searchIcon" />
            <input
                placeholder="search ..."
                onChange={handleChange}
                value={inputValue}
                className="searcInput"
                onClick={() => setOpenModal(true)}
                // onBlur={(event) => onBlur(event)}
            />
        </div>
    )
};

export default SearchBar