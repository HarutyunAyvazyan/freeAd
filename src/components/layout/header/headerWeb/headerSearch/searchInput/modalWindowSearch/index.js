import { Modal } from "bootstrap"
import { useState } from "react"
import SearchResults from "../searchResults"
import "./style.css"


const ModalWindowSearch = ({ openModal,componentRef }) => {
    const style = { display: openModal ? 'block' : 'none' };
    // console.log(openModal,"oppppppp")
    return (
        <div
         ref={componentRef} 
         className="modalWindowSearch" 
         style={style}>
            <SearchResults/>
        </div>
    )
}

export default ModalWindowSearch