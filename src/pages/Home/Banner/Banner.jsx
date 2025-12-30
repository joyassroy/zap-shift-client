import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { FaCircleArrowUp } from "react-icons/fa6";
const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className='mt-[32px]'>
                <div>
                    <img src={bannerImg1} className='' />
                    <div className='flex items-center gap-[10px] absolute  bottom-1/12 left-1/15'>
                        <div className='flex items-center'>
                        <button className='text-bold text-[20px] px-[32px] py-[16px]  rounded-[50px] bg-primary'>Track Your Parcel</button>
                        <FaCircleArrowUp size={40} className='rotate-45'></FaCircleArrowUp>
                        </div>
                        
                        <button className='rounded-[12px] px-[32px] py-[16px] border-[#DADADA] border-[2px]'>Be A Rider</button>
                    </div>
                    
                </div>
                <div>
                    <img src={bannerImg2}  />
                    <div className='flex items-center gap-[10px] absolute  bottom-1/12 left-1/15'>
                        <div className='flex items-center'>
                        <button className='text-bold text-[20px] px-[32px] py-[16px]  rounded-[50px] bg-primary'>Track Your Parcel</button>
                        <FaCircleArrowUp size={40} className='rotate-45'></FaCircleArrowUp>
                        </div>
                        
                        <button className='rounded-[12px] px-[32px] py-[16px] border-[#DADADA] border-[2px]'>Be A Rider</button>
                    </div>
                </div>
                <div>
                    <img src={bannerImg3}  />
                    <div className='flex items-center gap-[10px] absolute  bottom-1/12 left-1/15'>
                        <div className='flex items-center'>
                        <button className='text-bold text-[20px] px-[32px] py-[16px]  rounded-[50px] bg-primary'>Track Your Parcel</button>
                        <FaCircleArrowUp size={40} className='rotate-45'></FaCircleArrowUp>
                        </div>
                        
                        <button className='rounded-[12px] px-[32px] py-[16px] border-[#DADADA] border-[2px]'>Be A Rider</button>
                    </div>
                </div>
            </Carousel>
    );
};

export default Banner;