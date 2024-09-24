import "./style.css"
import { IoStar } from "react-icons/io5";
import ModalWindowCall from "../../pages/singlePage/modalWindowCall";
import ModalWindowMessage from "../../pages/singlePage/modalWindowMessage";
import { useDispatch, useSelector } from "react-redux";
import { loadFavoriteUserLengthFromLocalStorage } from "../../../store/featueres/favoriteState";
import { Link } from "react-router-dom";
import {  toggleModalCallOpen,  toggleModalMessageOpen } from "../../../store/featueres/modalCallUser";
import FavoriteIcon from "../../favoriteIcon";
import Rating from "../../rating";


const CardUser = ({ user }) => {
    const isOpenCall = useSelector(state => state.modalCallUser.isOpenCall);
    const isOpenMessage = useSelector(state => state.modalCallUser.isOpenMessage);
    const dispatch = useDispatch();

    const handleToggleModalCall = () => {
        dispatch(toggleModalCallOpen());
    };

    const handleToggleModalMessage = () => {
        dispatch(toggleModalMessageOpen());
    };

    return (
        <div className="cardUser">
            <div className="cardUserGradient">
                <FavoriteIcon
                    item={user}
                    storageName='favUs'
                    dispatchFunc={loadFavoriteUserLengthFromLocalStorage()}
                    classNameDiv="cardUserIconDiv"
                    classNameIcon="cardUserIcon"
                    classNameIconActive="cardUserIconActive" />

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
                <Link to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
                    <h1 className="cardUserName">{user.firstName} {user.lastName}</h1>
                </Link>
                <Rating/>
                {/* <div className="userRating">
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                    <IoStar className="rat" />
                </div> */}
                <div className="userButtons">
                    <button className="userButtonCall" onClick={handleToggleModalCall}>
                        Call
                    </button>
                    <ModalWindowCall
                        user={user}
                        isOpenCall={isOpenCall}
                    />
                    <button className="userButtonMessage" onClick={handleToggleModalMessage}>
                        Message
                    </button>
                    <ModalWindowMessage
                        user={user}
                        isOpenMessage={isOpenMessage} 
                    />
                </div>
            </div>
        </div>
    )
}

export default CardUser