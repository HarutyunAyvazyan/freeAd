import { Modal } from "bootstrap"
import { useState } from "react"
import SearchResults from "../searchResults"
import "./style.css"


const ModalWindowSearch = ({ openModal }) => {
    const style = { display: openModal ? 'block' : 'none' };
    // console.log(openModal,"oppppppp")
    return (
        <div className="modalWindowSearch" style={style}>
        </div>
    )
}

export default ModalWindowSearch