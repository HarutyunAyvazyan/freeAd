

import { IoHeart } from "react-icons/io5";
// import "./style.css"


const FavoriteIconNavBar = ({
    totalLength,
    classNameFavoriteMainDiv,
    classNameFavoriteIcon,
    classNameFavoriteIconActive,
    classNameFavoriteCountDiv,
    classNameFavoriteCountText
}) => {
    return (
        <div className={classNameFavoriteMainDiv}>
            <IoHeart className={totalLength === 0 ? classNameFavoriteIcon : classNameFavoriteIconActive} />
            <div className={classNameFavoriteCountDiv} style={totalLength === 0 ? { display: "none" } : { display: "block" }}>
                <span className={classNameFavoriteCountText} >{totalLength}</span>
            </div>
        </div>
    )
}

export default FavoriteIconNavBar