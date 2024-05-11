import "./style.css"
import { FcRating } from "react-icons/fc";
import { IoHeartCircle, IoStar } from "react-icons/io5";
import ModalWindowCall from "../../pages/singlePage/modalWindowCall";
import ModalWindowMessage from "../../pages/singlePage/modalWindowMessage";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavoriteUserLengthFromLocalStorage } from "../../../store/featueres/favoriteState";
import { Link } from "react-router-dom";
import { toggleModalCall, toggleModalMessage } from "../../../store/featueres/modalCallUser";
import FavoriteIcon from "../../favoriteIcon";


const CardUser = ({ user }) => {

    const [isFavorite, setIsFavorite] = useState(false);
  

    const dispatch = useDispatch()
    const isOpenCall = useSelector(state => state.modalCallUser.isOpenCall);
    const isOpenMessage = useSelector(state => state.modalCallUser.isOpenMessage);
  
    const handleToggleModalCall = () => {
      dispatch(toggleModalCall());
    };
  
    const handleToggleModalMessage = () => {
      dispatch(toggleModalMessage());
    };





    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem("favUs")) || [];
    //     setIsFavorite(favorites.includes(user.id));
    // }, [user.id]);


    // const toggleFavorite = (id) => {
    //     const favorites = JSON.parse(localStorage.getItem("favUs")) || [];
    //     if (favorites.includes(id)) {
    //         const updatedFavorites = favorites.filter(favId => favId !== id);
    //         localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
    //         setIsFavorite(false);
    //         dispatch(loadFavoriteUserLengthFromLocalStorage());

    //     } else {
    //         const updatedFavorites = [...favorites, id];
    //         localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
    //         setIsFavorite(true);
    //         dispatch(loadFavoriteUserLengthFromLocalStorage());

    //     }
    // };


    // const handleClickLike = (id) => {
    //     toggleFavorite(id)
    // }

    return (
        <div className="cardUser">
            <div className="cardUserGradient">
                <FavoriteIcon 
                item={user} 
                storageName={"favUs"} 
                dispatchFunc={loadFavoriteUserLengthFromLocalStorage()}
                classNameDiv="cardUserFavoriteIconDiv"
                classNameIcon="cardUserFavoriteIcon"
                classNameIconActive="cardUserFavoriteIconActive"/>
                {/* <IoHeartCircle className="anotherUserPageIcon" onClick={() => handleClickLike(user.id)} style={isFavorite ? { color: "red", fontSize: "30px" } : { color: "green", fontSize: "30px" }} /> */}

            </div>

            <div className="cardUserDescription">
                <Link to={`/user/${user.id}`}>
                    <div className="cardUserImageDiv">
                        {user.image ?
                            <img src={user.image} alt={user.firstName} className="cardUserImage" />
                            :
                            <div className="cardUserIcon">
                                {user.firstName.slice(0, 1).toUpperCase()}
                            </div>
                        }
                    </div>
                </Link>
                <Link to={`/user/${user.id}`} style={{textDecoration:"none"}}>
                    <h1 className="cardUserName">{user.firstName} {user.lastName}</h1>
                </Link>
                <div className="userRating">
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                </div>
                <div className="userButtons">
                    <button className="userButtonCall" onClick={handleToggleModalCall} > Call</button>
                <ModalWindowCall user={user} isOpenCall={isOpenCall} handleToggleModalCall={handleToggleModalCall} />

                    <button className="userButtonMessage" onClick={handleToggleModalMessage}> Message</button>
                    <ModalWindowMessage user={user} isOpenMessage={isOpenMessage} handleToggleModalMessage={handleToggleModalMessage} />

                </div>
            </div>
        </div>
    )
}

export default CardUser