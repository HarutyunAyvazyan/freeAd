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
import { loadFavoriteAdLengthFromLocalStorage, loadFavoriteUserLengthFromLocalStorage } from "../../../../../store/featueres/favoriteState";
import FavoriteIconNavBar from "../../../../favoriteIconNavBar";



const HeaderSearch = () => {
    const favoriteLength = useSelector(state => state.favorite.favoriteAdLength);
    const favoriteUserLenght =  useSelector(state => state.favorite.favoriteUserLength)
   
    const totalLength = favoriteLength + favoriteUserLenght
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavoriteAdLengthFromLocalStorage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadFavoriteUserLengthFromLocalStorage());
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
                        {/* <div className="basketIcon">
                            <SlBasket />
                            <span className="basketCount" style={totalLength === 0 ? { display: "none" } : { display: "block" }}>{totalLength}</span>
                        </div> */}
                        <FavoriteIconNavBar 
                        totalLength={totalLength}
                        classNameFavoriteMainDiv="favoriteIconDiv"
                        classNameFavoriteIcon="favoriteIcon"
                        classNameFavoriteIconActive="favoriteIconActive"
                        classNameFavoriteCountDiv="favoriteCountDiv"
                        classNameFavoriteCountText="favoriteCountText"
                        />
                        {/* style={{width:"10%"}}> */}

                    </Link>
                </div>
            </div>
        </div>

    )
};

export default HeaderSearch;