import { BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import house from "../../assets/images/imageButtonsCategories/auto.jpg"
import "./style.css"
import { Link, useParams } from "react-router-dom";


const Card = ({product}) => {
    // const {productId} = useParams()
    // // console.log(dataItem)
    // console.log(productId,"productId")
    const currentUrl = window. location
    // console.log(currentUrl,"url")
    return (
      <div className="card">
              <Link to={`${currentUrl.origin}/product/${product.id}`} className="cardLink">

        <div className="cardImageDiv">
            <img src={product.images} className="cardImage"/>
         
        </div>
        <div className="cardDescription">
        <p className="cardTitle"> {product.Մակնիշ}, {product.Մոդել}, {product.Տարի}թ.{product[" Շարժիչի ծավալը"]}</p>
        <div className="cardPriceDiv">
        <h4 className="cardPrice">{product.price} $ </h4>
        </div>
           
            <span className="cardDescriptionSpan"> {product["Վազք"]},  {product["Շարժիչ"]}</span>
            {/* <button className="cardButton">
            Add to Basket
            </button> */}
        </div>
        </Link>

      </div>

      
    )
  }
  
  export default Card

  
// const Card = ({ card }) => {
//     return (
//       <div className="card">
//         <Link to={`/movie/${card.id}`}><img src={`${API_IMAGE}${card.backdrop_path}`} className="card_image" onClick={scrollUp} /></Link>
//         <div className="card_description">
//           <h3 className="card_title">{card.title}</h3>
//           <p className="card_text">{`${card.overview.split("").splice(0, 20).join("")}...`}</p>
//         </div >
//         <Link to={`/movie/${card.id}`} onClick={scrollUp}>
//           <button className="card_btn">WATCH ONLINE</button>
//         </Link>
//       </div>
//     )
//   }
  
//   export default Card