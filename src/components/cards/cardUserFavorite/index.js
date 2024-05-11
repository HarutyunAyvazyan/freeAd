import { useState } from "react"
import { BsShare, BsTrash3 } from "react-icons/bs"
import { Link } from "react-router-dom"
import pageName from "../../../constants/pageName"
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SlUser } from "react-icons/sl";
import { PiUserFill } from "react-icons/pi";


const CardUserFavorite = ({ user,basketChekBoxChoose,handleDeleteItem,favorites,handleCheck}) => {
    const [isChecked,setIsChecked] = useState(false)
    // const favorite = useSelector(state => state.favorite)
// console.log(favorites,"favorites")
  
    const handleCheckedProduct = () => {
        setIsChecked(!isChecked)
        // dispatch(onChange(product.id))
    }
    return (
        <label>
        <div className="cardBasket" onClick={handleCheckedProduct}>
                   <div className="cardBasketLink" >
       
                       <div className="cardBasketImageDiv" >
                           <PiUserFill className="cardBasketImage" style={{color:"blue",backgroundColor:"yellow"}} />
                           <div className="cardBasketImageCheckBoxDiv" style={basketChekBoxChoose && favorites.length > 1 ? { display: "block" } : { display: "none" }} >
                               <input
                                   className="cardBasketImageCheckBox"
                                   type="checkbox"
                                   checked={user.isChecked || false}
                                   onChange={() =>handleCheck(user.id)}
                               />
                           </div>
                       </div>
                   </div>
                   <div className="cardBasketDescription">
                       <div className={basketChekBoxChoose ? "cardBasketIconDisplay" : "cardBasketDescriptionIcon"} >
                           <BsShare className="cardBasketIconShare" />
                           <BsTrash3 className="cardBasketIconDelete" onClick={() => handleDeleteItem(user.id)} />
                       </div>
                       <div className="cardBasketDescriptionCategoryName">
                           GLXAVOR
                           TRANSPORT
                           AVTOMEQENANER
                           AVTOMEQENANER
                       </div>
                       <div className="cardBasketDescriptionContent">
                           <Link to={basketChekBoxChoose && favorites.length > 1 ? null : `/${pageName.user}/${user.id}`} className="cardBasketDescriptionContentMain" >
                               <h1 style={{ fontWeight: "400", margin: "0" }}>{user.firstName}</h1>
                               {/* <h3
                                   className="cardBasketDescriptionTitle"
                                   style={{ fontWeight: "500" }}
                               >
                                   {product.Մակնիշ}
                                   {product.Մոդել},
                                   {product[" Շարժիչի ծավալը"]},
                                   {product.Տարի}
       
                               </h3> */}
                               <p>{user.email}</p>
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
export default CardUserFavorite