import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { loadFavoriteAdLengthFromLocalStorage } from "../../store/featueres/favoriteState";
import pageName from "../../constants/pageName";
import FavoriteIcon from "../favoriteIcon";
import Viewed from "./viewed";

import animals from "../../assets/images/imageButtonsCategories/animals.jpg"
import auto from "../../assets/images/imageButtonsCategories/auto.jpg"
import sport from "../../assets/images/imageButtonsCategories/sport.jpg"
import sad from "../../assets/images/imageButtonsCategories/sad.png"

import "./style.css"
import ImageBoxCardsWeb from "./imageBoxCardsWeb";


const Card = ({ product }) => {

  const favoriteProducts = JSON.parse(localStorage.getItem("favorites"))


  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
    if (viewedItems.includes(product.id)) {
      setViewed(true);
    }
  }, [product.id]);

  const handleClick = (e) => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
    if (!viewedItems.includes(product.id)) {
      localStorage.setItem('viewedItems', JSON.stringify([...viewedItems, product.id]));
    }
    setViewed(true);
  };

  const cloneProductTitle = product.title && product.title.join(", ")

  const cloneProductRegion = product.region && product.region.join(", ")
  return (
    <div className="card" >
      <Link to={`${pageName.product}/${product.id}`} className="cardLink" onClick={(e) => handleClick(e)}>
        <div className="cardContainer" >
          <div className="cardImageDiv">
            <Viewed viewed={viewed} />
            <ImageBoxCardsWeb images={product.images} />
            {/* <FavoriteIcon
              item={product}
              storageName="favorites"
              dispatchFunc={loadFavoriteAdLengthFromLocalStorage()}
              classNameDiv="cardFavoriteIconDiv"
              classNameIcon="cardFavoriteIcon"
              classNameIconActive="cardFavoriteIconActive" /> */}
          </div>
          <div className="cardDescription">
            <FavoriteIcon
              item={product}
              storageName="favorites"
              dispatchFunc={loadFavoriteAdLengthFromLocalStorage()}
              classNameDiv="cardFavoriteIconDiv"
              classNameIcon="cardFavoriteIcon"
              classNameIconActive="cardFavoriteIconActive" />
            <strong className="cardTitle">
              {cloneProductTitle}
            </strong>
            <div className="cardPriceDiv">
              <h1 className="cardPrice">$ {product.price}</h1>
            </div>
            <div className="cardDescriptionItems">
              {product.description?.map((descriptionItem =>
                <p className="cardDescriptionItem">{descriptionItem}</p>
              ))}
            </div>
            <div className="cardRegion">
              {cloneProductRegion}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
