import "./style.css"


const CheckBoxFavorite = ({onChange,checked}) => {
    return (
        <label className="cardAdFavoriteContainerInput" >
            <input
                className="cardAdFavoriteCheckBox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span class="checkmark"></span>
        </label>
    )
}


export default CheckBoxFavorite