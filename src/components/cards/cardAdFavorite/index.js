import { CiMenuKebab } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteFavorite,onChange } from "../../../store/featueres/favoriteState";
import { deleteFavorite, onChange } from "../../../store/featueres/favoriteState";
import { UniqueComponentId } from "primereact/utils";
import pageName from "../../../constants/pageName";
import ImageBoxCardsWeb from "../imageBoxCardsWeb";

import "./style.css"
import CheckBox from "../../../ui/checkBox";


const CardAdFavorite = ({
    product,
    basketChekBoxChoose,
    handleDeleteItem,
    favorites,
    handleCheck
}) => {

    const [isChecked, setIsChecked] = useState(false)


    const handleCheckedProduct = () => {
        setIsChecked(!isChecked)
        handleCheck(product.id)
    }

    const cloneProductTitle = product.title && product.title.join(", ")

    const cloneProductRegion = product.region && product.region.join(", ")

    return (
        <div className="cardAdFavorite" onClick={handleCheckedProduct} >
                <div className="cardAdFavoriteImageDiv" >
                    <ImageBoxCardsWeb images={product.images} />
                    {/* <img src={product.images[0]} className="cardBasketImage" /> */}
                    {
                        basketChekBoxChoose && favorites.length > 1 &&
                        <div className="cardAdFavoriteImageCheckBoxDiv"  >
                            <label className="cardAdFavoriteContainerInput" >
                                <input
                                    className="cardAdFavoriteCheckBox"
                                    type="checkbox"
                                    checked={product.isChecked || false}
                                    onChange={() => handleCheck(product.id)}
                                />
                                <span class="checkmark"></span>
                            </label>
                            {/* <input
                            className="cardBasketImageCheckBox"
                            type="checkbox"
                            checked={product.isChecked || false}
                            onChange={() => handleCheck(product.id)}
                        /> */}
                        </div>
                    }

                </div>
            <div className="cardAdFavoriteDescription">
                <div className={basketChekBoxChoose ? "cardAdFavoriteIconDisplay" : "cardAdFavoriteDescriptionIcon"} >
                    <div className="cardAdFavoriteIconShareDiv">
                        <IoShareSocialSharp className="cardAdFavoriteIconShare" />
                    </div>
                    <div className="cardAdFavoriteIconDeleteDiv"
                        onClick={() => handleDeleteItem(product.id)}
                    >
                        <RiDeleteBin6Fill className="cardAdFavoriteIconDelete"
                        />
                    </div>
                </div>
                {/* <div className="cardAdFavoriteDescriptionCategoryName">
                    {product.subCategoryName}
                </div> */}
                <div className="cardAdFavoriteDescriptionContent">
                    <Link
                        to={basketChekBoxChoose && favorites.length > 1 ? null : `/${pageName.product}/${product.id}`}
                        className="cardAdFavoriteDescriptionContentMain"
                    >
                        <div className="cardAdFavoriteTitle">
                            {cloneProductTitle}
                        </div>
                        <h1 className="cardAdFavoritePrice" style={{ fontWeight: "400", margin: "0" }}>$ {product.price}</h1>
                        <div className="cardAdFavoriteDescriptionItems">
                            {product.description?.map((descriptionItem =>
                                <p className="cardAdFavoriteDescriptionItem">{descriptionItem}</p>
                            ))}
                        </div>
                        <div className="cardAdFavoriteRegion">
                            {cloneProductRegion}
                        </div>
                    </Link>
                </div>
                {/* <div className="cardAdFavoriteBasketDescriptionDate" >
                    <span >Добавлено в 08.03.2024</span>
                    <span> Обновлено в: 08.03.2024</span>

                </div> */}

            </div>
        </div>
    )
}


export default CardAdFavorite