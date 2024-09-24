import { BsShare, BsTrash3 } from "react-icons/bs"
import { IoShareSocialSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { RiCheckboxMultipleFill } from "react-icons/ri";

import { RiCheckboxMultipleLine } from "react-icons/ri"
import "./style.css"
import { useSelector } from "react-redux";

const FavoriteMark = ({
    favoriteCheckBoxChoose,
    arrayWithChecked,
    handleClickFavoriteCheckBoxChoose,
    itemIsChecked,
    handleCheckAll,
    handleDeleteAll,
    favoriteMarkText,
    favoriteMarkLength
}) => {

    return (
        <div className="containerFavoriteChaeckbox">
            <div className="favoriteMarkDiv">
                <div className="FavoriteMarkConuntProductCheckbox" >
                    <p className="FavoriteMarkConuntProductCheckboxText">{favoriteCheckBoxChoose ? `@ntrvacner:${arrayWithChecked?.filter((item) => item.isChecked).length}` : arrayWithChecked.length > 1 ? <div>{favoriteMarkText} : {favoriteMarkLength}</div> : <div>{favoriteMarkText}</div>}</p>
                    {/* <span className="favoriteMarkCountProduct">qanak {arrayWithChecked.length}</span> */}
                    {
                        arrayWithChecked.length > 1 ?
                            <div className="favoriteMarkIconMark"
                                onClick={handleClickFavoriteCheckBoxChoose}
                            >
                                <p className="FavoriteMarkConuntProductCheckboxText" >Nshel</p>
                                <div className="favoriteMarkChekBoxChhoseDiv">
                                    <RiCheckboxMultipleFill
                                        className="favoriteMarkChekBoxChhoseIcon"
                                    />
                                </div>
                            </div>
                            :
                            <span>Qanak : {arrayWithChecked.length}</span>
                    }
                </div>
                {
                    favoriteCheckBoxChoose && arrayWithChecked.length > 1 &&
                    <div
                        className="favoriteMarkChooseAll">
                        <label className="favoriteMarktChoose">
                            <p className="FavoriteMarkConuntProductCheckboxText">@ntrel bolor@</p>
                            <input
                                type="checkbox"
                                checked={itemIsChecked ? (true) : (false)}
                                onChange={handleCheckAll}
                            />
                        </label>
                        <div className="favoriteMarkIcons" >
                            <div className="favoriteMarkShareDiv">
                                <IoShareSocialSharp className="favoriteMarkShareIcon" />
                            </div>
                            <div className="favoriteMarkDeleteDiv"
                                onClick={handleDeleteAll}
                            >
                                <RiDeleteBin6Fill className="favoriteMarkDeleteIcon" />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FavoriteMark