import { useParams } from "react-router-dom"
import { getProducts, getUsers } from "../../../utils"
import "./style.css"
import CardHorizontal from "../../cards/cardHorizontal"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { IoHeartCircle } from "react-icons/io5"
import { loadFavoriteUserLengthFromLocalStorage } from "../../../store/featueres/favoriteState"
import CardUser from "../../cards/cardUser"


const AnotherUserPage = ({ }) => {

    const { userId } = useParams()
    const users = getUsers().filter((user) => `${user.id}` === userId)
    const user = users[0]
    const filteredProducts = getProducts().filter(product => `${product.userId}` === userId);

   
    // const [isFavorite, setIsFavorite] = useState(false);

    // const dispatch = useDispatch()
 

    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem("favUs")) || [];
    //     setIsFavorite(favorites.includes(user.id));
    // }, [user.id]);


    // const toggleFavorite = (id) => {
    //     const favorites = JSON.parse(localStorage.getItem("favUs")) || [];
    //     if (favorites.includes(id)) {
    //         const updatedFavorites = favorites.filter(favId => favId !== id);
    //         localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
    //         setIsFavorite(false);
    //         dispatch(loadFavoriteUserLengthFromLocalStorage());

    //     } else {
    //         const updatedFavorites = [...favorites, id];
    //         localStorage.setItem("favUs", JSON.stringify(updatedFavorites));
    //         setIsFavorite(true);
    //         dispatch(loadFavoriteUserLengthFromLocalStorage());

    //     }
    // };


    // const handleClickLike = (id) => {
    //     toggleFavorite(id)
    // }

    return (
        <div className="container">
            <div className="anotherUserPage" style={{ marginTop: "120px" }}>
                {/* <div className="anotherUserPageUser" >
                    <h3>{user.firstName}</h3>
                    <IoHeartCircle className="anotherUserPageIcon"onClick={() => handleClickLike(user.id)} style={isFavorite ? { color: "red", fontSize: "30px" } : { color: "green", fontSize: "30px" }} />
                </div> */}
<CardUser user={user}/>
                <div className="anotherUserPageAnnouncement">
                    {
                        filteredProducts.map((product) => <CardHorizontal product={product} key={product.id} />)
                    }

                </div>

            </div>
        </div>

    )
}

export default AnotherUserPage