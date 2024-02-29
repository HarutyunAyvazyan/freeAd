import { Link } from "react-router-dom"
import "./style.css"
import HeaderSearch from "../headerSearch"


const HeaderBar = () => {
    return (
            <header className="layout">
                <div className="headerLinksDiv">
                    <div className="container">
                        <div className="headerLinks">
                            <div className="navbarLinks">
                                <Link to="/" className="navbarLink">Home</Link>
                                <Link to="/about" className="navbarLink">About Us</Link>
                                <Link to="/about" className="navbarLink">About Us</Link>
                                <Link to="/about" className="navbarLink">About Us</Link>

                                <Link to="/forYou" className="navbarLink">For You</Link>
                            </div>
                            <div className="registrationLinks">
                                <div className="registrationSigninSignup">
                                    <Link to="/signin" className="navbarLink">Signin</Link>
                                    <Link to="/signup" className="navbarLink">Signup</Link>
                                </div>
                                <Link to="/announcement" className="navbarLink">Announcement</Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="headerSearchDiv"> */}
                    <HeaderSearch />
                {/* </div> */}

            </header>
    )
}

export default HeaderBar