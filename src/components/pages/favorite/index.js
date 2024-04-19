import { useEffect, useState } from "react";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BsTrash3 } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { getProducts } from "../../../utils"
import CardBasket from "../../cards/cardBasket";
import CardHorizontal from "../../cards/cardHorizontal"
import "./style.css"




import { Link, NavLink, Outlet } from "react-router-dom";
import "./style.css"
import { useDispatch } from "react-redux";
import { loadFavoriteLengthFromLocalStorage } from "../../../store/featueres/favoriteState";


const Favorite = () => {
    // const dispatch = useDispatch()
    // const [isCheckedAll, setIsCheckedAll] = useState(false)
    // const [basketChekBoxChoose, setBasketChekBoxChoose] = useState(false)
    // const historyFavorites = JSON.parse(localStorage.getItem("favorites"))

    // const [favorites, setFavorites] = useState(historyFavorites)
    // const favoriteProducts = getProducts().filter(product => favorites.includes(product.id));

    // const [productsWithChecked, setProductsWithChecked] = useState(favoriteProducts.map(product => ({ ...product, isChecked: false })));

    // const handleDeleteItem = (id) => {
    //     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     const updatedFavorites = storedFavorites.filter(favId => favId !== id);
    //     setFavorites(updatedFavorites);
    //     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //     const updatedProductsWithChecked = productsWithChecked.filter(product => product.id !== id);
    //     setProductsWithChecked(updatedProductsWithChecked);
    //     dispatch(loadFavoriteLengthFromLocalStorage());

    // };

    // const productsIsChecked = productsWithChecked.every(item => item.isChecked === true);

    // const handleCheck = (productId) => {
    //     const updatedProducts = productsWithChecked.map(product =>
    //         product.id === productId ? { ...product, isChecked: !product.isChecked } : product
    //     )
    //     setProductsWithChecked(updatedProducts);
    // }

    // const handleCheckAll = () => {
    //     setIsCheckedAll(!isCheckedAll)
    //     const updatedProducts = productsWithChecked.map(product =>
    //         !isCheckedAll ? { ...product, isChecked: true } : { ...product, isChecked: false }
    //     )
    //     setProductsWithChecked(updatedProducts);
    // }


    // const handleDeleteAll = () => {
    //     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     const filteredProductsWithChecked = productsWithChecked.filter((product) => product.isChecked)
    //     const updatedProducts = productsWithChecked.filter((product) => !product.isChecked)
    //     const updatedProductsWithChecked = filteredProductsWithChecked.map((product) => product.id);
    //     const updatedFavorites = storedFavorites.filter((id) => !updatedProductsWithChecked.includes(id))
    //     setFavorites(updatedFavorites);
    //     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //     setProductsWithChecked(updatedProducts);
    //     handleBasketChekBoxChoose()
    //     dispatch(loadFavoriteLengthFromLocalStorage());
    // }

    // const handleBasketChekBoxChoose = () => {
    //     setBasketChekBoxChoose(!basketChekBoxChoose)
    // }



    return (
        // <div className="container">
        //     <div className="basket" >
        //         <div className="basketContent">
        //             {!productsWithChecked.length ?
        //                 <h3 >duq chuneq naxntrac haytararutyunner</h3> :
        //                 <div>
        //                     <div className="basketConuntProductCheckbox" >
        //                         <span>{basketChekBoxChoose ? `@ntrvacner:${productsWithChecked.filter((item) => item.isChecked).length}` : "haytararutyunner"}</span>
        //                         <span className="basketConuntProduct">qanak {productsWithChecked.length}</span>
        //                         <RiCheckboxMultipleLine style={productsWithChecked.length > 1
        //                             ?
        //                             { display: "block" }
        //                             :
        //                             { display: "none" }
        //                         }
        //                             className="basketChekBoxChhose"
        //                             onClick={handleBasketChekBoxChoose} />
        //                     </div>
        //                     <div style={basketChekBoxChoose && productsWithChecked.length > 1
        //                         ?
        //                         { display: "flex" }
        //                         :
        //                         { display: "none" }
        //                     }
        //                         className="basketChooseAll">
        //                         <label className="basketChoose">
        //                             <span>@ntrel bolor@</span>
        //                             <input 
        //                                 type="checkbox"
        //                                 checked={productsIsChecked ? (true) : (false)}
        //                                 onChange={handleCheckAll}
        //                             />
        //                             {/* <label className="containerInput" >
        //                                 <p className="checkBoxLabel">{"@ntrel bolor@"}</p>
        //                                 <input
        //                                      type="checkbox"
        //                                      checked={productsIsChecked ? (true) : (false)}
        //                                      onChange={handleCheckAll}
        //                                 />
        //                                 <span class="checkmark"></span>

        //                             </label> */}
        //                         </label>
        //                         <div className="basketIcons" >
        //                             <BsShare />
        //                             <BsTrash3 onClick={handleDeleteAll} />
        //                         </div>
        //                     </div>
        //                     {
        //                         productsWithChecked.map((product) =>
        //                             <CardBasket
        //                                 product={product}
        //                                 basketChekBoxChoose={basketChekBoxChoose}
        //                                 key={product.id}
        //                                 handleDeleteItem={handleDeleteItem}
        //                                 favorites={favorites}
        //                                 handleCheck={handleCheck}
        //                             />
        //                         )
        //                     }
        //                 </div>
        //             }
        //         </div>
        //         <div className="basketMenu">
        //             <p>haytararutyunner</p>
        //             <p>ogtaterer</p>
        //         </div>
        //     </div>
        // </div >
        <div className="container" style={{ marginTop: "140px",display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
            {/* <h2>Favorite Page</h2> */}
            {/* Кнопки */}
            <div className="favoriteMenu" >
                <NavLink to="users" className="favoriteMenuItem">Users</NavLink>
                <NavLink to="ad" className="favoriteMenuItem">Ad</NavLink>
            </div>

            {/* Вложенные маршруты */}
            <div className="favoriteContent" style={{width:"80%",backgroundColor:"white"}}>
                <Outlet />

            </div>
        </div>
    )
}

export default Favorite