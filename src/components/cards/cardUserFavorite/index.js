import { useState } from "react"
import { BsShare, BsTrash3 } from "react-icons/bs"
import { Link } from "react-router-dom"
import pageName from "../../../constants/pageName"
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SlUser } from "react-icons/sl";
import { PiUserFill } from "react-icons/pi";
import "./style.css"
import CheckBoxFavorite from "../../../ui/CkeckBoxFavorite";
import FavoriteIcons from "../../favoriteIcons";
import Rating from "../../rating";
import CardMenuMobile from "../../cardMenuMobile";

const CardUserFavorite = ({
    user,
    basketChekBoxChoose,
    handleDeleteItem,
    handleClickShare,
    handleClickCopy,
    favorites,
    handleCheck
}) => {
    const [isChecked, setIsChecked] = useState(false)


    const handleCheckedProduct = () => {
        setIsChecked(!isChecked)
        // handleCheck(user.id)
    }
    return (
        <div className="cardUserFavorite" onClick={handleCheckedProduct}>
            <div className="cardUserFavoriteImageDiv" >
                <div className="cardUserFavoriteImageContentDiv">
                    {user.image ?
                        <img
                            src={user.image}
                            alt={user.firstName}
                            className="cardUserFavoriteImage"
                        />
                        :
                        <div className="cardUserFavoriteIconDiv">
                            {user.firstName.slice(0, 1).toUpperCase()}
                        </div>
                    }
                </div>
                {
                    basketChekBoxChoose && favorites.length > 1 &&
                    <div className="cardAdFavoriteImageCheckBoxDiv"  >
                        <CheckBoxFavorite
                            checked={user.isChecked || false}
                            onChange={() => handleCheck(user.id)}
                        />
                    </div>
                }
            </div>
            <div className="cardUserFavoriteDescription">
                <div className={basketChekBoxChoose ? "carUserdFavoriteIconDisplay" : "cardUserFavoriteDescriptionIcon"} >
                    <FavoriteIcons
                        // onClickShare={}
                        onClickDelete={() => handleDeleteItem(user.id)}
                    />
                </div>
                <div className="cardUserFavoritetDescriptionContent">
                    <Link
                        to={basketChekBoxChoose && favorites.length > 1 ? null : `/${pageName.user}/${user.id}`}
                        className="cardUserFavoriteDescriptionContentMain"
                    >
                        <h1 className="cardUserfavoriteUserName"> {user.firstName} </h1>
                        <h2 className="cardUserFavoriteCountAd">Haytararutyunneri qanak {user.products.length}</h2>
                        <Rating />
                    </Link>
                </div>
                <div className="cardUserFavoriteDescriptionDate" >
                    <span >Grancman amsativ@ в 08.03.2024</span>
                </div>
            </div>
            <CardMenuMobile
                onClickDelete={() => handleDeleteItem(user.id)}
                onClickShare={handleClickShare}
                onClickCopy={handleClickCopy}
            />
        </div>
    )
}
export default CardUserFavorite