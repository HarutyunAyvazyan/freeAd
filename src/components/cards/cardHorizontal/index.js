import { SlBasket } from "react-icons/sl";
import { IoHeartCircle } from "react-icons/io5";


import "./style.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteLength, loadFavoriteAdLengthFromLocalStorage, setFavoriteItems, setFavoriteLength, toggleFavoriteItem } from "../../../store/featueres/favoriteState";
import pageName from "../../../constants/pageName";
import FavoriteIcon from "../../favoriteIcon";

const CardHorizontal = ({ product }) => {
    // const favoriteItems = useSelector(state => state.favorites);

    // const favorit = JSON.parse(localStorage.getItem("favorites")) || [];


    // const [isOpen, setIsOpen] = useState(false)

    // const [isFavorite, setIsFavorite] = useState(false);

    // const dispatch = useDispatch()


    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     setIsFavorite(favorites.includes(product.id));
    // }, [product.id]);


    // const toggleFavorite = (id) => {
    //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     if (favorites.includes(id)) {
    //         const updatedFavorites = favorites.filter(favId => favId !== id);
    //         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //         setIsFavorite(false);
    //         dispatch(loadFavoriteAdLengthFromLocalStorage());

    //     } else {
    //         const updatedFavorites = [...favorites, id];
    //         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //         setIsFavorite(true);
    //         dispatch(loadFavoriteAdLengthFromLocalStorage());

    //     }
    // };


    // const handleClickLike = (id) => {
    //     toggleFavorite(id)
    // }
    // const handleClickLikeColor =(id)=>{
    //     setIsOpen(!isOpen)
    //     handleClickLike(id)
    // }

    const currentUrl = window.location
    console.log(currentUrl)
    return (

        <div className="cardHorizontal">
            <Link to={`/${pageName.product}/${product.id}`} className="cardHorizontalLink">

                <div className="cardHorizontalImageDiv">
                    <img src={product.images[0]} className="cardHorizontalImage" />
                </div>
            </Link>
            <div className="cardHorizontalDescription">
                <div className="cardHorizontalDescriptionCategoryName">
                    GLXAVOR
                    TRANSPORT
                    AVTOMEQENANER
                    AVTOMEQENANER
                </div>
                <div className="cardHorizontalDescriptionContent">

                    <Link to={`/${pageName.product}/${product.id}`} className="cardHorizontalDescriptionContentMain">
                        <h1 style={{ fontWeight: "400", margin: "0" }}>{product.price}</h1>
                        <h3
                            className="cardHorizontalDescriptionTitle"
                            style={{ fontWeight: "500" }}
                        >
                            {product.Մակնիշ}
                            {product.Մոդել},
                            {product[" Շարժիչի ծավալը"]},
                            {product.Տարի}
                        </h3>
                        <p className="cardHorizontalDescriptionText">{product.Վազք}, {product.Շարժիչ}, {product["Փոխանցման տուփը"]}</p>
                    </Link>
                    <div className="cardHorizontalDescriptionIcon" >
                    <FavoriteIcon item={product} storageName="favorites" dispatchFunc={loadFavoriteAdLengthFromLocalStorage()}/>

                        {/* <IoHeartCircle onClick={() => handleClickLike(product.id)} style={isFavorite ? { color: "red", fontSize: "30px" } : { color: "green", fontSize: "30px" }} /> */}
                    </div>
                </div>


                <div className="cardHorizontalDescriptionDate" >
                    <span >Добавлено в 08.03.2024</span>
                    <span> Обновлено в: 08.03.2024</span>

                </div>

            </div>
        </div>

    )
}

export default CardHorizontal