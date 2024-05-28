import { Link } from "react-router-dom";
import Categories from "../../../../constants/stateCategories";
import CategoryPage from "../../../categories/categoryPage";
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';






const SwiperHome = () => {
  return (

    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"

      // pagination={true}
      loop={true}
      speed={800}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      allowTouchMove={true}
      navigation={true}

    >
      {Categories.map((category) => (
        <SwiperSlide className="swiper-slide" key={category.id}>
          <Link to={`${category.name}`} className="swiper_slide_link" >
            <div className="swiper_slide_item" style={{ backgroundImage: `url(${category.pathImg})` }}>
              <div  className="swiper_slide_item_content">
                {category.name}
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

  )
}

export default SwiperHome;