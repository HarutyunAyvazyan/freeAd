import { Modal } from "bootstrap"
import { useState } from "react"
import SearchResults from "../searchResults"
import "./style.css"


const ModalWindowSearch = ({openModal}) => {
// console.log(openModal,"oppppppp")
    return (
        <div className="modalWindowSearch" style={openModal ? {display:"block"}:{display:"none"}}>
        </div>
    )
}

export default ModalWindowSearch