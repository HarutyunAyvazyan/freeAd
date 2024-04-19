import { CiMenuKebab } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import { BsShare } from "react-icons/bs";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
// import { deleteFavorite,onChange } from "../../../store/featueres/favoriteState";
import { deleteFavorite, onChange } from "../../../store/featueres/favoriteState";
import { UniqueComponentId } from "primereact/utils";
import pageName from "../../../constants/pageName";

const CardBasket = ({ product, basketChekBoxChoose,handleDeleteItem,favorites,handleCheck }) => {
    // console.log(product,"sw")
    const [isChecked,setIsChecked] = useState(false)
    // const favorite = useSelector(state => state.favorite)
// console.log(favorites,"favorites")
  
    const handleCheckedProduct = () => {
        setIsChecked(!isChecked)
        // dispatch(onChange(product.id))
    }

    const dispatch = useDispatch()



    const prod = favorites.filter(item => product.id === item.id)

    return (
        <label>
 <div className="cardBasket" onClick={handleCheckedProduct}>
            <div className="cardBasketLink" >

                <div className="cardBasketImageDiv" >
                    <img src={product.images[0]} className="cardBasketImage" />
                    <div className="cardBasketImageCheckBoxDiv" style={basketChekBoxChoose && favorites.length > 1 ? { display: "block" } : { display: "none" }} >
                        <input
                            className="cardBasketImageCheckBox"
                            type="checkbox"
                            checked={product.isChecked || false}
                            onChange={() =>handleCheck(product.id)}
                        />
                    </div>
                </div>
            </div>
            <div className="cardBasketDescription">
                <div className={basketChekBoxChoose ? "cardBasketIconDisplay" : "cardBasketDescriptionIcon"} >
                    <BsShare className="cardBasketIconShare" />
                    <BsTrash3 className="cardBasketIconDelete" onClick={() => handleDeleteItem(product.id)} />
                </div>
                <div className="cardBasketDescriptionCategoryName">
                    GLXAVOR
                    TRANSPORT
                    AVTOMEQENANER
                    AVTOMEQENANER
                </div>
                <div className="cardBasketDescriptionContent">
                    <Link to={basketChekBoxChoose && favorites.length > 1 ? null : `/${pageName.product}/${product.id}`} className="cardBasketDescriptionContentMain" >
                        <h1 style={{ fontWeight: "400", margin: "0" }}>{product.price}</h1>
                        <h3
                            className="cardBasketDescriptionTitle"
                            style={{ fontWeight: "500" }}
                        >
                            {product.Մակնիշ}
                            {product.Մոդել},
                            {product[" Շարժիչի ծավալը"]},
                            {product.Տարի}

                        </h3>
                        <p>{product.Վազք}, {product.Շարժիչ}, {product["Փոխանցման տուփը"]}</p>
                    </Link>
                </div>
                <div className="cardBasketDescriptionDate" >
                    <span >Добавлено в 08.03.2024</span>
                    <span> Обновлено в: 08.03.2024</span>

                </div>

            </div>
        </div>
        </label>
       


    )
}

export default CardBasket