import HeaderBar from "./headerWeb/headerBar"
import HeaderBarMobile from "./headerMobile/headreBarMobile"



const Header = () => {
    console.log(window.innerWidth,"px")
    return (
        <div>
            {window.innerWidth>=800 ?  <HeaderBar/>:<HeaderBarMobile innerWidth = {window.innerWidth}/>
 }
        </div>
    )
}


export default Header