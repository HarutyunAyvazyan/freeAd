import { useState } from "react"
import { getUsers } from "../../../../utils"
import { BsShare, BsTrash3 } from "react-icons/bs"
import { RiCheckboxMultipleLine } from "react-icons/ri"
import { loadFavoriteUserLengthFromLocalStorage } from "../../../../store/featueres/favoriteState"
import { useDispatch } from "react-redux"
import CardUserFavorite from "../../../cards/cardUserFavorite"


const FavoriteUsers = () => {
    const dispatch = useDispatch()
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [basketChekBoxChoose, setBasketChekBoxChoose] = useState(false)
    const historyFavorites = JSON.parse(localStorage.getItem("favUs")) || []

    const [favorites, setFavorites] = useState(historyFavorites)
    const favoriteProducts = getUsers().filter(user => favorites.includes(user.id));

    const [productsWithChecked, setProductsWithChecked] = useState(favoriteProducts.map(product => ({ ...product, isChecked: false })));

    const handleDeleteItem = (id) => {
        const storedFavorites = JSON.parse(localStorage.getItem("favUs")) || [];
        const updatedFavorites = storedFavorites.filter(favId => favId !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
        const updatedProductsWithChecked = productsWithChecked.filter(product => product.id !== id);
        setProductsWithChecked(updatedProductsWithChecked);
        dispatch(loadFavoriteUserLengthFromLocalStorage());

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
        const storedFavorites = JSON.parse(localStorage.getItem("favUs")) || [];
        const filteredProductsWithChecked = productsWithChecked.filter((product) => product.isChecked)
        const updatedProducts = productsWithChecked.filter((product) => !product.isChecked)
        const updatedProductsWithChecked = filteredProductsWithChecked.map((product) => product.id);
        const updatedFavorites = storedFavorites.filter((id) => !updatedProductsWithChecked.includes(id))
        setFavorites(updatedFavorites);
        localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
        setProductsWithChecked(updatedProducts);
        handleBasketChekBoxChoose()
        dispatch(loadFavoriteUserLengthFromLocalStorage());
    }

    const handleBasketChekBoxChoose = () => {
        setBasketChekBoxChoose(!basketChekBoxChoose)
    }

console.log(productsWithChecked)

    return (
        // <div className="container">
            <div className="basket" >
                <div className="basketContent">
                    {!productsWithChecked.length ?
                        <h3 >duq chuneq naxntrac haytararutyunner</h3> :
                        <div className="containerBasketChaeckbox">
                            <div className="basketConuntProductCheckbox" >
                                <span>{basketChekBoxChoose ? `@ntrvacner:${productsWithChecked.filter((item) => item.isChecked).length}` : "ogtaterer"}</span>
                                <span className="basketConuntProduct">qanak {productsWithChecked.length}</span>
                                <RiCheckboxMultipleLine style={productsWithChecked.length > 1
                                    ?
                                    { display: "block" }
                                    :
                                    { display: "none" }
                                }
                                    className="basketChekBoxChhose"
                                    onClick={handleBasketChekBoxChoose} />
                            </div>
                            <div style={basketChekBoxChoose && productsWithChecked.length > 1
                                ?
                                { display: "flex" }
                                :
                                { display: "none" }
                            }
                                className="basketChooseAll">
                                <label className="basketChoose">
                                    <span>@ntrel bolor@</span>
                                    <input 
                                        type="checkbox"
                                        checked={productsIsChecked ? (true) : (false)}
                                        onChange={handleCheckAll}
                                    />
                                    {/* <label className="containerInput" >
                                        <p className="checkBoxLabel">{"@ntrel bolor@"}</p>
                                        <input
                                             type="checkbox"
                                             checked={productsIsChecked ? (true) : (false)}
                                             onChange={handleCheckAll}
                                        />
                                        <span class="checkmark"></span>

                                    </label> */}
                                </label>
                                <div className="basketIcons" >
                                    <BsShare />
                                    <BsTrash3 onClick={handleDeleteAll} />
                                </div>
                            </div>
                            {
                                productsWithChecked.map((user) =>
                                    <CardUserFavorite
                                        user={user}
                                        basketChekBoxChoose={basketChekBoxChoose}
                                        key={user.id}
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

export default FavoriteUsers