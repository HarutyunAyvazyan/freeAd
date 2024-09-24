import { IoShareSocialSharp } from "react-icons/io5"
import { RiDeleteBin6Fill } from "react-icons/ri"
import "./style.css"

const FavoriteIcons = ({onClickShare,onClickDelete}) => {
    return (
        <>
            <div className="cardAdFavoriteIconShareDiv"
            onClick={onClickShare}>
                <IoShareSocialSharp  className="cardAdFavoriteIconShare" />
            </div>
            <div className="cardAdFavoriteIconDeleteDiv"
                onClick={onClickDelete}
            >
                <RiDeleteBin6Fill className="cardAdFavoriteIconDelete"
                />
            </div>
        </>
    )
}

export default FavoriteIcons