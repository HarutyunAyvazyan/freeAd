import { useRef, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5"
import useHandleClickOutside from "../../hooks/useHandleClickOutside";
import "./style.css"


const CardMenuMobile = ({
    onClickShare,
    onClickDelete,
    onClickCopy
}) => {
    const [openModal, setOpenModal] = useState(false)
    const modalRef = useRef(null);

    const handleClickModal = () => {
        setOpenModal(!openModal)
    }
    const handleClickShare = () => {
        onClickShare();
        handleClickModal();
    }

    const handleClickDelete = () => {
        onClickDelete();
        handleClickModal();
    }

    const handleClickCopy = () => {
        onClickCopy();
        handleClickModal();
    }

    useHandleClickOutside(modalRef, () => {
        setOpenModal(false);
    })
    return (
        <div ref={modalRef} >
            <div className="cardFavoriteMenuMobile"
                onClick={handleClickModal}
            >
                <IoEllipsisVerticalSharp className="cardFavoriteMenuMobileIcon" />
            </div>
            {
                openModal &&
                <div className="cardFavoriteMenuMobileModal" >
                    <p className="cardFavoriteMenuMobileModalShare"
                        onClick={ handleClickShare}>Поделиться</p>
                    <p className="cardFavoriteMenuMobileModalCopy"
                        onClick={handleClickCopy}>Копировать</p>
                    <p className="cardFavoriteMenuMobileModalDelete"
                        onClick={handleClickDelete}
                    >Удалить</p>
                </div>
            }
        </div>
    )
}

export default CardMenuMobile