import HeaderBar from "./headerWeb/headerBar"
import HeaderBarMobile from "./headerMobile/headreBarMobile"



const Header = ({countBasket}) => {
    // console.log(window.innerWidth,"px")
    return (
        <div>
            {/* {window.innerWidth>=800 ?  <HeaderBar countBasket={countBasket}/>:<HeaderBarMobile innerWidth = {window.innerWidth}/> */}
 {/* } */}

 {window.innerWidth<=800 ? <HeaderBarMobile innerWidth = {window.innerWidth}/> :  <HeaderBar countBasket={countBasket}/>
}
        </div>
    )
}


export default Header