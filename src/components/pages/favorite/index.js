

import {  NavLink, Outlet } from "react-router-dom";
import {  useSelector } from "react-redux";

import "./style.css"


const Favorite = () => {
    const favoriteAdLenght = useSelector(state => state.favorite.favoriteAdLength)
    const favoriteUserLength = useSelector(state => state.favorite.favoriteUserLength)

    const favoriteLinkActive = ({ isActive }) => {
        return isActive ? "favoriteMenuItemActive" : "favoriteMenuItem"
    }
    return (
        <div className="container">
            <div className="containerFvorite">
                <h1 className="favoriteTitle">Favoritner</h1>
                <div className="favoriteMenu" >
                    <div className="favoriteMenuUsers">
                        <NavLink to="users" className={favoriteLinkActive}>Ogtaterer </NavLink>
                        {favoriteUserLength > 0 &&
                            <div className="favoriteMenuUsersCount">
                                <span className="favoriteMenuUsersCountText">{favoriteUserLength}</span>
                            </div>
                        }

                    </div>
                    <div className="favoriteMenuAd">
                        <NavLink to="ad" className={favoriteLinkActive}>Haytararutyunner </NavLink>
                        {
                            favoriteAdLenght > 0 &&
                            <div className="favoriteMenuAdCount">
                                <span className="favoriteMenuAdCountText">{favoriteAdLenght}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="favoriteContent" >
                    <Outlet />
                </div>
            </div>
         </div>
    )
}

export default Favorite