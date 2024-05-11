import { BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import house from "../../assets/images/imageButtonsCategories/auto.jpg"
import "./style.css"
import { Link, useParams } from "react-router-dom";
import { IoHeartCircle } from "react-icons/io5"
import { BiSolidHeartCircle } from "react-icons/bi";
import { BiHeartCircle } from "react-icons/bi";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { FaShareAltSquare } from "react-icons/fa";

import pageName from "../../constants/pageName";
import { loadFavoriteAdLengthFromLocalStorage } from "../../store/featueres/favoriteState";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import animals from "../../assets/images/imageButtonsCategories/animals.jpg"
import auto  from "../../assets/images/imageButtonsCategories/auto.jpg"
import sport  from "../../assets/images/imageButtonsCategories/sport.jpg"
import sad  from "../../assets/images/imageButtonsCategories/sad.png"

import { IoCameraOutline } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteIcon from "../favoriteIcon";
import Viewed from "../viewed";

export const ImageBoxCardsMobile = ({images}) => {
  // const [activeImage, setActiveImage] = useState(0);

  const visibleImages = () => {
    if(images.length > 4){
      return [...images].splice(0,4)
    }
    return [...images]
  }; 

  const newImages = visibleImages();

  return (
    <div className="imageBoxContainer" >
      <Swiper
              spaceBetween={1}

       pagination={{
        dynamicBullets: true,
      }}
      style={{width:"100%",height:"100%"}}
      modules={[Pagination]}
      className="mySwiper">
        {newImages.map((image,index) => (
          <SwiperSlide style={{width:"100%",height:"100%"}} key={index}>
            <img src={image} className="imageBoxContainerImage" alt="image"/>
            <div
      className="imageBoxCountDiv"
      style={newImages.length >= 4 && index === newImages.length - 1 ? { display: "flex" } : { display: "none" }}
    >
        <CiCamera className="imageBoxCountIcon" />
          <p className="imageBoxCountText">Evs {images.length - newImages.length} Nkar</p>
    </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div>
  )
 

}

export const ImageBoxCards = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveImage(index);
  };
  const handleMouseLeave = () => {
    setActiveImage(0);
  }
  const visibleImages = () => {
    if(images.length > 4){
      return [...images].splice(0,4)
    }
    return [...images]
  } 
 
  const newImages =  visibleImages()
  return (
    <div className="imageBoxContainer"  onMouseLeave={handleMouseLeave} >
      <img
       src={images[activeImage]} 
        alt={`Image ${activeImage + 1}`} 
        className="imageBoxContainerImage"
        />
      <div className="imageHoverContainer" >
        {newImages.map((image, index) => (
          <div key={index} 
          style={newImages.length < 2 ?{display:"none"}:{ width: `${100 / newImages.length}%`, left: `${index * (100 / newImages.length)}%` }}
           onMouseEnter={() => handleMouseEnter(index)}
           className="imageHoverButtonDiv">
            <button className={index === activeImage ? "activeButton" :"imageHoverButton"}> </button>
          </div>
        ))}
  <div 
  className="imageBoxCountDiv"
  style={images.length > 4 && activeImage  === newImages.length -1 ?{display:"flex"} :{display:"none"}}
  >
<CiCamera className="imageBoxCountIcon"/>
<p className="imageBoxCountText">Evs {images.length - newImages.length} Nkar</p>
  </div>
      </div>
    </div>
  );
};
const Card = ({product}) => {
  const images =[sad,"mnmn",sad,animals,sport,auto,"nkjk",sport]
    // const {productId} = useParams()
    // // console.log(dataItem)
    // console.log(productId,"productId")
    // const currentUrl = window. location
    // console.log(currentUrl,"url")
    const favoriteProducts = JSON.parse(localStorage.getItem("favorites"))
    // console.log(favoriteProducts,"fav")

  
    // const [isFavorite, setIsFavorite] = useState(false);

    // const dispatch = useDispatch()


    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     setIsFavorite(favorites.includes(product.id));
    // }, [product.id]);


    // const toggleFavorite = (id) => {
    //     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    //     if (favorites.includes(id)) {
    //         const updatedFavorites = favorites.filter(favId => favId !== id);
    //         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //         setIsFavorite(false);
    //         dispatch(loadFavoriteAdLengthFromLocalStorage());

    //     } else {
    //         const updatedFavorites = [...favorites, id];
    //         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //         setIsFavorite(true);
    //         dispatch(loadFavoriteAdLengthFromLocalStorage());

    //     }
    // };


    // const handleClickLike = (e,id) => {
    //   // e.stopPropagation()
    //   e.preventDefault()
    //     toggleFavorite(id)
    // }

    const [viewed, setViewed] = useState(false);
  
    useEffect(() => {
      const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
      if (viewedItems.includes(product.id)) {
        setViewed(true);
      }
    }, [product.id]);
  
    const handleClick = (e) => {
      const viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
      if (!viewedItems.includes(product.id)) {
        localStorage.setItem('viewedItems', JSON.stringify([...viewedItems, product.id]));
      }
      setViewed(true);
    };

    const cloneProductTitle = product.title && product.title.join(", ") 

    const cloneProductRegion = product.region && product.region.join(", ")
    return (
      <div className="card" >
                <Link to={`${pageName.product}/${product.id}`} className="cardLink" onClick={(e)=>handleClick(e)}>

        <div className="cardContainer" >


<div className="cardImageDiv">
 <Viewed viewed={viewed}/>
    {/* <img src={product.images} className="cardImage"/> */}
    <ImageBoxCardsMobile images={product.images}/>
    {/* <div className="cardFavoriteIconDiv"> */}
      <FavoriteIcon 
  
      item={product}
       storageName="favorites"
        dispatchFunc={loadFavoriteAdLengthFromLocalStorage()}
        classNameDiv="cardFavoriteIconDiv"
        classNameIcon="cardFavoriteIcon"
        classNameIconActive="cardFavoriteIconActive"/>
    {/* <IoHeart className={isFavorite ?"cardFavoriteiconActive" : "cardFavoriteiconNoActive"} onClick={(e) => handleClickLike(e,product.id)} /> */}
    {/* </div> */}
    
</div>
<div className="cardDescription">
<div className="cardRegion">
        {/* {product.region?.map((regionItem =>
          <p className="cardRegionItem">{regionItem}{regionItem !== product.region[product.region.length -1 ]? "," : ""}</p>
      ))} */}
      {cloneProductRegion}
  </div>
  <div className="cardPriceDiv">
      <h1 className="cardPrice">$ {product.price}</h1>
  </div>
  <div className="cardTitle">
    {cloneProductTitle}
  {/* {
    cloneProductTitle && cloneProductTitle.length >=50 ?
    <div>
        {cloneProductTitle.split("").splice(0, 50).join("")}...
    </div>
    :
    <div >
      {cloneProductTitle}
    </div>
} */}
  </div>
 

   <div className="cardDescriptionItems">
    {product.description?.map((descriptionItem => 
      <p className="cardDescriptionItem">{descriptionItem}</p>
    ))}
    {/* <div className="cardShareDiv">
        <BsShare className="cardShare"/>
      </div> */}
  </div>
 
  
 
    {/* <button className="cardButton">
    Add to Basket
    </button> */}
</div>
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