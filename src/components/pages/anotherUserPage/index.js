import { useParams } from "react-router-dom"
import { getProducts, getUsers } from "../../../utils"
import Card from "../../cards"
import "./style.css"
import CardHorizontal from "../../cards/cardHorizontal"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadFavoriteLengthFromLocalStorage } from "../../../store/featueres/favoriteState"
// import { useDispatch, useSelector } from "react-redux"
// import { addFavorite, deleteFavorite } from "../../../store/featueres/favoriteState"

const AnotherUserPage = ({ }) => {
    const [favoriteState, setFavoriteState] = useState([])

    const { userId } = useParams()
    const users = getUsers().filter((user) => `${user.id}` === userId)
    const user = users[0]
    const filteredProducts = getProducts().filter(product => `${product.userId}` === userId);

   

    // console.log(state, 'statestatestatestatestatestatestate');

    return (
        <div className="container">
            <div className="anotherUserPage" style={{ marginTop: "120px" }}>
                <div className="anotherUserPageUser" >
                    <h3>{user.firstName}</h3>

                </div>

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