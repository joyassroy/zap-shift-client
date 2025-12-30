import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/brands/amazon.png';
import img2 from '../../../assets/brands/amazon_vector.png';
import img3 from '../../../assets/brands/casio.png';
import img4 from '../../../assets/brands/moonstar.png';
import img5 from '../../../assets/brands/randstad.png';
import img6 from '../../../assets/brands/star.png';
import img7 from '../../../assets/brands/start_people.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const brandlogos=[img1,img2,img3,img4,img5,img6,img7];
const Brands = () => {
    
    return (
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >
            {
                brandlogos.map((brand,index)=><SwiperSlide key={index}><img src={brand} alt="" /></SwiperSlide>)
            }
            
        
        </Swiper>
    );
};

export default Brands;