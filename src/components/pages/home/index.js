import Main from "./main";
import SwiperHome from "./swiperHome";

const Home = () => {
    return (
        <div className="container">
            <div className="homePage">
                <SwiperHome />
                <Main/>
            </div>
        </div>

    )
}

export default Home;