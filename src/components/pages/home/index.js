import { useEffect } from "react";
import Main from "./main";
import SwiperHome from "./swiperHome";
import HeaderBarMobile from "../../layout/header/headerMobile/headreBarMobile";
import HeaderSearchMobile from "../../layout/header/headerMobile/headerSaerchMobile";

const Home = () => {

    return (
        <>
            <HeaderSearchMobile />
            <div className="container">
                <div className="homePage">
                    <SwiperHome />
                    <Main />
                </div>
            </div>
        </>


    )
}

export default Home;