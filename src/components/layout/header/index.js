import HeaderBar from "./headerWeb/headerBar"
import HeaderBarMobile from "./headerMobile/headreBarMobile"



const Header = ({countBasket}) => {
    // console.log(window.innerWidth,"px")
    return (
        <div>
            {/* {window.innerWidth>=800 ?  <HeaderBar countBasket={countBasket}/>:<HeaderBarMobile innerWidth = {window.innerWidth}/> */}
 {/* } */}

<HeaderBarMobile /> 
 <HeaderBar />

        </div>
    )
}


export default Header