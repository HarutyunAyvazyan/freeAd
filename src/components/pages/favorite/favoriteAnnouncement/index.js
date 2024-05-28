
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../../../../utils"
import { loadFavoriteAdLengthFromLocalStorage } from "../../../../store/featueres/favoriteState"
import { RiCheckboxMultipleLine } from "react-icons/ri"
import { BsShare, BsTrash3 } from "react-icons/bs"
import CardBasket from "../../../cards/cardBasket"
import CardAdFavorite from "../../../cards/cardAdFavorite"
import FavoriteMark from "../../../favoriteMark"





const FavoriteAnnouncement = () => {
    const dispatch = useDispatch()
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [basketChekBoxChoose, setBasketChekBoxChoose] = useState(false)
    const historyFavorites = JSON.parse(localStorage.getItem("favorites")) || []

    const [favorites, setFavorites] = useState(historyFavorites)
    const favoriteProducts = getProducts().filter(product => favorites.includes(product.id));

    const [productsWithChecked, setProductsWithChecked] = useState(favoriteProducts.map(product => ({ ...product, isChecked: false })));

    const handleDeleteItem = (id) => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const updatedFavorites = storedFavorites.filter(favId => favId !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        const updatedProductsWithChecked = productsWithChecked.filter(product => product.id !== id);
        setProductsWithChecked(updatedProductsWithChecked);
        dispatch(loadFavoriteAdLengthFromLocalStorage());

    };

    const productsIsChecked = productsWithChecked.every(item => item.isChecked === true);

    const handleCheck = (productId) => {
        const updatedProducts = productsWithChecked.map(product =>
            product.id === productId ? { ...product, isChecked: !product.isChecked } : product
        )
        setProductsWithChecked(updatedProducts);
    }

    const handleCheckAll = () => {
        setIsCheckedAll(!isCheckedAll)
        const updatedProducts = productsWithChecked.map(product =>
            !isCheckedAll ? { ...product, isChecked: true } : { ...product, isChecked: false }
        )
        setProductsWithChecked(updatedProducts);
    }


    const handleDeleteAll = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const filteredProductsWithChecked = productsWithChecked.filter((product) => product.isChecked)
        const updatedProducts = productsWithChecked.filter((product) => !product.isChecked)
        const updatedProductsWithChecked = filteredProductsWithChecked.map((product) => product.id);
        const updatedFavorites = storedFavorites.filter((id) => !updatedProductsWithChecked.includes(id))
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setProductsWithChecked(updatedProducts);
        handleBasketChekBoxChoose()
        dispatch(loadFavoriteAdLengthFromLocalStorage());
    }

    const handleBasketChekBoxChoose = () => {
        setBasketChekBoxChoose(!basketChekBoxChoose)
    }



    return (
        <div className="favoriteAd" >
            <div className="favoriteAdContent">
                {!productsWithChecked.length ?
                    <h3 >duq chuneq naxntrac haytararutyunner</h3> :
                    <div className="containerBasketChaeckbox">
                        <FavoriteMark 
                          favoriteCheckBoxChoose={basketChekBoxChoose}
                          arrayWithChecked={productsWithChecked}
                          handleClickFavoriteCheckBoxChoose={handleBasketChekBoxChoose}
                          itemIsChecked={productsIsChecked}
                          handleCheckAll={handleCheckAll}
                          handleDeleteAll={handleDeleteAll}
                          favoriteMarkText={productsWithChecked.length >1 ? "Haytararutyunneri qanak" : "Haytararutyunner"}
                        />
                        {
                            productsWithChecked.map((product) =>
                                <CardAdFavorite
                                    product={product}
                                    basketChekBoxChoose={basketChekBoxChoose}
                                    key={product.id}
                                    handleDeleteItem={handleDeleteItem}
                                    favorites={favorites}
                                    handleCheck={handleCheck}
                                />
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}


export default FavoriteAnnouncement