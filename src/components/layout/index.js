import { Outlet } from "react-router-dom"
import Header from "./header"
import "../../globalCss/style.css"

const Layout = ({countBasket}) => {
    return (
        <>
            <Header countBasket={countBasket}/>
            <Outlet />
        </>

    )
}
export default Layout