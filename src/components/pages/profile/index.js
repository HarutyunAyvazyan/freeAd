import { NavLink, Outlet } from "react-router-dom"
import pageName from "../../../constants/pageName"
import "./style.css"


const Profile = () => {
const isActiveLink = ({isActive}) => {
return isActive ? "activeProfileMenuLink" : "profileMenuLink"
}
    return (
        <div className="container">
            <div className="profile" >
                <div className="profileMenu">
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileWallet}`}>dramapanak</NavLink>
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileAnnouncement}`}>haytararutyunner</NavLink>
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileSettings}`}>kargavorumner</NavLink>
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileReviews}`}>meknabanutyunner</NavLink>
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileMessage}`}>haxordagrutyunner</NavLink>
                    <NavLink
                        className={isActiveLink}
                        to={`${pageName.profile}/${pageName.profileNotifications}`}>canucumner</NavLink>

                </div>
                <div className="profileContent">
                    <h1 style={{ color: "black" }}>ksdjfhsd</h1>
                    <Outlet />
                </div>

            </div>
        </div>

    )
}

export default Profile