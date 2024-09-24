
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";


import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteFavorite,onChange } from "../../../store/featueres/favoriteState";
import { deleteFavorite, onChange } from "../../../store/featueres/favoriteState";
import { UniqueComponentId } from "primereact/utils";
import pageName from "../../../constants/pageName";
import ImageBoxCardsWeb from "../imageBoxCardsWeb";

import "./style.css"
import CheckBox from "../../../ui/checkBox";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import useHandleClickOutside from "../../../hooks/useHandleClickOutside";
import CheckBoxFavorite from "../../../ui/CkeckBoxFavorite";
import FavoriteIcons from "../../favoriteIcons";
import CardMenuMobile from "../../cardMenuMobile";


const CardAdFavorite = ({
    product,
    basketChekBoxChoose,
    handleDeleteItem,
    handleClickShare,
    handleClickCopy,
    favorites,
    handleCheck,
    productsWithChecked,

}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckedProduct = () => {
        setIsChecked(!isChecked)
    }


    const cloneProductTitle = product.title && product.title.join(", ")

    const cloneProductRegion = product.region && product.region.join(", ")
    return (
        <div className="cardAdFavorite" onClick={handleCheckedProduct} >
            <div className="cardAdFavoriteImageDiv" >
                <ImageBoxCardsWeb images={product.images} />
                {
                    basketChekBoxChoose && favorites.length > 1 &&
                    <div className="cardAdFavoriteImageCheckBoxDiv"  >
                        <CheckBoxFavorite
                            checked={product.isChecked || false}
                            onChange={() => handleCheck(product.id)}
                        />
                    </div>
                }
            </div>
            <div className="cardAdFavoriteDescription">
                <div className={basketChekBoxChoose ? "cardAdFavoriteIconDisplay" : "cardAdFavoriteDescriptionIcon"} >
                    <FavoriteIcons
                        // onClickShare={}
                        onClickDelete={() => handleDeleteItem(product.id)}
                    />
                </div>
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
            </div>
            <CardMenuMobile
            onClickDelete={()=>handleDeleteItem(product.id)}
            onClickShare={handleClickShare}
            onClickCopy={handleClickCopy}
            />
            {/* <div ref={modalRef} >
                <div className="cardAdFavoriteMenu"
                    onClick={handleClickModal}
                >
                    <IoEllipsisVerticalSharp className="cardAdFavoriteMenuIcon" />
                </div>
                {
                    openModal &&
                    <div className="cardAdFavoriteMenuModal" >
                        <p className="cardAdFavoriteMenuModalShare"
                            onClick={handleClickModal}>Поделиться</p>
                        <p className="cardAdFavoriteMenuModalCopy"
                            onClick={handleClickModal}>Копировать</p>
                        <p className="cardAdFavoriteMenuModalDelete"
                            onClick={() => handleDeleteItem(product.id)}

                        >Удалить</p>
                    </div>
                }

            </div> */}

        </div>
    )
}


export default CardAdFavorite