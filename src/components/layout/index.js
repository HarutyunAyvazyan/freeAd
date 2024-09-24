import { Outlet } from "react-router-dom"
import Header from "./header"
import "../../globalCss/style.css"
import HeaderBarMobile from "./header/headerMobile/headreBarMobile"
import HeaderBar from "./header/headerWeb/headerBar"

const Layout = () => {
    return (
        <>
            {/* <Header /> */}
            <HeaderBar />
            <HeaderBarMobile/>
            <Outlet />
        </>

    )
}
export default Layout