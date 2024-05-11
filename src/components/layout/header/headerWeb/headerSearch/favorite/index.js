import { IoHeart } from "react-icons/io5";
import "./style.css"


const FavoriteIcon = ({totalLength}) => {
    return (
        <div className="favoriteIconDiv">
            <IoHeart className={totalLength === 0 ? "favoriteIcon" : "activeFavoriteIcon"}/>
            <div className="favoriteCountDiv" style={totalLength === 0 ? { display: "none" } : { display: "block" }}>
            <span className="favoriteCountText" >{totalLength}</span>
            </div>
        </div>
    )
}

export default FavoriteIcon