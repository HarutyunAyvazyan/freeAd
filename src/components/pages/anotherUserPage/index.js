import { useParams } from "react-router-dom"
import { getProducts, getUsers } from "../../../utils"
import "./style.css"
import CardHorizontal from "../../cards/cardHorizontal"
import CardUser from "../../cards/cardUser"


const AnotherUserPage = ({ }) => {

    const { userId } = useParams()
    const users = getUsers().filter((user) => `${user.id}` === userId)
    const user = users[0]
    const filteredProducts = getProducts().filter(product => `${product.userId}` === userId);

    return (
        <div className="container">
            <div className="anotherUserPage" style={{ marginTop: "120px" }}>
                <CardUser user={user} />
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