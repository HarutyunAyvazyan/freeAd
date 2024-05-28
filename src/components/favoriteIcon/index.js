import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

import { IoHeart } from "react-icons/io5";
import { useDispatch } from "react-redux";
// import "./style.css"

const FavoriteIcon = ({item,storageName,dispatchFunc,classNameDiv,classNameIcon,classNameIconActive}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch()


    useEffect(() => {
         const favorites = JSON.parse(localStorage.getItem(storageName)) || [];
        setIsFavorite(favorites.includes(item.id));
    }, [item.id]);


    const toggleFavorite = (id) => {
        const favorites = JSON.parse(localStorage.getItem(storageName)) || [];
        if (favorites.includes(id)) {
            const updatedFavorites = favorites.filter(favId => favId !== id);
            localStorage.setItem(storageName, JSON.stringify(updatedFavorites));
            setIsFavorite(false);
            dispatch(dispatchFunc);

        } else {
            const updatedFavorites = [...favorites, id];
            localStorage.setItem(storageName, JSON.stringify(updatedFavorites));
            setIsFavorite(true);
            dispatch(dispatchFunc);

        }
    };


    const handleClickLike = (e,id) => {
      // e.stopPropagation()
      e.preventDefault()
        toggleFavorite(id)
    }

return (
    <div className={classNameDiv}>
    <CiHeart className={isFavorite ? classNameIconActive : classNameIcon} onClick={(e) => handleClickLike(e,item.id)} />

    </div>
)
}

export default FavoriteIcon