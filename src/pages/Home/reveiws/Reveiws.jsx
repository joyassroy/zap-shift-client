import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reveiwcard from './Reveiwcard';

const Reveiws = ({reviewsPromise}) => {
    const reviews=use(reviewsPromise);
    console.log(reviews);
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h3 className='text-3xl text-center font-bold'>Reviews</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio explicabo dolores dignissimos quisquam suscipit, corporis enim eos minus, accusamus tenetur repellat? Minima dolorem odit ex, qui alias atque nesciunt?</p>
            </div>
            <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          
          modifier: 1,
          scale:0.75,
          slideShadows: true,
        }}
        autoplay={
            {
                delay:2000,
                disableOnInteraction:false,
            }
        }
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
            reviews.map(rev=><SwiperSlide>
          <Reveiwcard rev={rev}></Reveiwcard>
        </SwiperSlide>)
        }
        
      </Swiper>
    </>
        </div>
    );
};

export default Reveiws;