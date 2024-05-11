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
          slidesPerView={6}
          spaceBetween={30}
          // pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="mySwiper"
          allowTouchMove={true}
          navigation={true}
          
        >
          {Categories.map((category) => (
            <SwiperSlide className="swiper-slide" key={category.id}>
              <Link to={`${category.name}`} className="homeCategoryItem1" >
                <div className="homeCategoryItem" >
                  {category.name}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

  )
}

export default SwiperHome;