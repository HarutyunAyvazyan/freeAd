// import AllCategoryButton from "./allCategoryButton";
import { SlBasket } from "react-icons/sl";

import Logo from "./logo";
// import SearchButton from "./searchButton";
import SearchInput from "./searchInput";
import "./style.css"
import { Link } from "react-router-dom";
import AllCategoryButton from "./allCategoryButton";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import pageName from "../../../../../constants/pageName";
import { useDispatch, useSelector } from "react-redux";
import { loadFavoriteLengthFromLocalStorage } from "../../../../../store/featueres/favoriteState";



const HeaderSearch = () => {
    const favoriteLength = useSelector(state => state.favorite.length);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavoriteLengthFromLocalStorage());
    }, [dispatch]);

    return (
        <div className="headerSearch">
            <div className="container">
                <div className="headerSearchContainer">
                    <Logo />
                    <div style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <AllCategoryButton />
                        <SearchInput />
                    </div>

                    {/* <SearchButton /> */}
                    <Link to={"favorite/ad"}>
                        <div className="basketIcon">
                            <SlBasket />
                            <span className="basketCount" style={favoriteLength === 0 ? { display: "none" } : { display: "block" }}>{favoriteLength}</span>
                        </div>
                        {/* style={{width:"10%"}}> */}

                    </Link>
                </div>
            </div>
        </div>

    )
};

export default HeaderSearch;