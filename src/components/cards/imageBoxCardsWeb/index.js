import { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { ImCamera } from "react-icons/im";

import "./style.css"


export const ImageBoxCardsWeb = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveImage(index);
    };
    const handleMouseLeave = () => {
        setActiveImage(0);
    }
    const visibleImages = () => {
        if (images.length > 4) {
            return [...images].splice(0, 4)
        }
        return [...images]
    }

    const newImages = visibleImages()
    return (
        <div className="imageBoxContainer" onMouseLeave={handleMouseLeave} >
            <img
                src={images[activeImage]}
                alt={`Image ${activeImage + 1}`}
                className="imageBoxContainerImage"
            />
            <div className="imageHoverContainer" >
                {newImages.map((image, index) => (
                    <div key={index}
                        style={newImages.length < 2 ? { display: "none" } : { width: `${100 / newImages.length}%`, left: `${index * (100 / newImages.length)}%` }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className="imageHoverButtonDiv">
                        <button className={index === activeImage ? "activeButton" : "imageHoverButton"}> </button>
                    </div>
                ))}
                <div
                    className="imageBoxCountDiv"
                    style={images.length > 4 && activeImage === newImages.length - 1 ? { display: "flex" } : { display: "none" }}
                >
                    <ImCamera className="imageBoxCountIcon" />
                    <p className="imageBoxCountText">Evs {images.length - newImages.length} Nkar</p>
                </div>
            </div>
        </div>
    );
};


export default ImageBoxCardsWeb