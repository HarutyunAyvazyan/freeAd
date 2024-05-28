import { CiCamera } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';
import "./style.css"



export const ImageBoxCardsMobile = ({ images }) => {

    const visibleImages = () => {
        if (images.length > 4) {
            return [...images].splice(0, 4)
        }
        return [...images]
    };

    const newImages = visibleImages();

    return (
        <div className="imageBoxContainer" >
            <Swiper
                spaceBetween={1}

                pagination={{
                    dynamicBullets: true,
                }}
                style={{ width: "100%", height: "100%" }}
                modules={[Pagination]}
                className="mySwiper">
                {newImages.map((image, index) => (
                    <SwiperSlide style={{ width: "100%", height: "100%" }} key={index}>
                        {/* <div style={{backgroundImage:`url(${image})`}} className="imageBoxContainerImage">
  
              </div> */}
                        <img src={image} className="imageBoxContainerImage" alt="image" />
                        <div
                            className="imageBoxCountDiv"
                            style={newImages.length >= 4 && index === newImages.length - 1 ? { display: "flex" } : { display: "none" }}
                        >
                            <CiCamera className="imageBoxCountIcon" />
                            <p className="imageBoxCountText">Evs {images.length - newImages.length} Nkar</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )


}


export default ImageBoxCardsMobile