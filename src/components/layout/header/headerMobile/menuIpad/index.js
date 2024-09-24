import Categories from "../../../../../constants/stateCategories"


const MenuIpad = () => {
    return (
        <div className="menuIpad">
            {Categories?.map((category) => (
                <div>
                    {category.name}
                </div>
            ))}
        </div>
    )
}


export default MenuIpad