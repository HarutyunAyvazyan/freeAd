import { BiHome } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { BsInfoCircleFill } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { MdAnnouncement } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";


// import ModalMenuSearchMobile from "../../modalMenuSearchMobile";
import "./style.css"
import HeaderSearchMobile from "../headerSaerchMobile";
// import FavoriteIcon from "../../headerWeb/headerSearch/favorite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadFavoriteAdLengthFromLocalStorage, loadFavoriteUserLengthFromLocalStorage } from "../../../../../store/featueres/favoriteState";
import FavoriteIconNavBar from "../../../../favoriteIconNavBar";



const HeaderBarMobile = () => {
    const favoriteLength = useSelector(state => state.favorite.favoriteAdLength);
    const favoriteUserLenght = useSelector(state => state.favorite.favoriteUserLength)

    const totalLength = favoriteLength + favoriteUserLenght
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavoriteAdLengthFromLocalStorage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadFavoriteUserLengthFromLocalStorage());
    }, [dispatch]);

    const isActiveLinkMobile = ({isActive}) => {
        return isActive ? "headerBarMobileItemIconDivActive" : "headerBarMobileItemIconDiv"
        }

        const isActiveLinkFavoriteMobile = ({isActive}) => {
            return isActive ? "headerBarMobileFavoriteActive" : "headerBarMobileFavorite"
            }
    return (
        <div className="headerBarMobileContainer">
            <div className="headerBarMobile">
                {/* <div className="headerBarMobileItem"> */}
                  
                {/* </div> */}
                <NavLink to="/" className={isActiveLinkMobile}>
                    {/* <div className="headerBarMobileItem"> */}
                        {/* <div className="headerBarMobileItemIconDiv"> */}
                        <FaHome className="headerBarMobileIcon" />
                        {/* </div>        */}
                        {/* <span >Home</span> */}
                    {/* </div> */}
                </NavLink>
                <NavLink className={isActiveLinkMobile} to="3">
                        {/* <div className="headerBarMobileItemIconDiv"> */}
                        <RiMenuSearchLine className="headerBarMobileIcon"/>
                        {/* </div> */}
                        {/* <span >Search</span> */}
                    </NavLink>
                <NavLink to="announcement" className={isActiveLinkMobile}>
                    {/* <div className="headerBarMobileItem"> */}
                        {/* <div className="headerBarMobileItemIconDiv"> */}
                        <MdAnnouncement className="headerBarMobileIcon"/>
                        {/* </div> */}
                        {/* <span>Announcement</span> */}
                    {/* </div> */}
                </NavLink>
                <NavLink to="favorite/ad" className={isActiveLinkFavoriteMobile}>
                    {/* <div className="headerBarMobileItem"> */}
                        <FavoriteIconNavBar
                            totalLength={totalLength}
                            // classNameFavoriteMainDiv={isActiveLinkFavoriteMobile}
                            classNameFavoriteIcon="favoriteNavBarIconMobile"
                            classNameFavoriteIconActive="favoriteNavBarIconActiveMobile"
                            classNameFavoriteCountDiv="favoriteNavBarIconCountDivMobile"
                            classNameFavoriteCountText="favoriteNavBarIconCountTextMobile"
                        />
                        {/* <span>Favorite</span> */}
                    {/* </div> */}
                </NavLink>
                <NavLink to="signin" className={isActiveLinkMobile}>
                    {/* <div className="headerBarMobileItem"> */}
                        {/* <div className="headerBarMobileItemIconDiv"> */}
                        <FaUser className="headerBarMobileIcon" />
                        {/* </div> */}
                        {/* <span>User</span> */}
                    {/* </div> */}
                </NavLink>
            </div>
            <HeaderSearchMobile />
        </div>

    )
}

export default HeaderBarMobile