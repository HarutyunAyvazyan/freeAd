import { Outlet } from "react-router-dom"
import Header from "./header"
import "../../globalCss/style.css"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}
export default Layout