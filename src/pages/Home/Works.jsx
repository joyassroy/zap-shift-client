import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
const Works = () => {
    return (
        <div className='mt-[100px]mb-[100px]'>
            <h2 className='font-extrabold text-[32px] mb-[32px]'>How it Works</h2>
            <div className='flex max-sm:flex-col items-center justify-between'>
                <div className='p-[32px] rounded-[24px] shadow'>
                    <CiDeliveryTruck size={56}/>
                    <h2 className='text-[20px] text-[#03373D] font-bold'>Booking Pick & Drop</h2>
                    <p className='text-[16px] text-[#606060] font-medium'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-[32px] rounded-[24px] shadow'>
                    <CiDeliveryTruck size={56}/>
                    <h2 className='text-[20px] text-[#03373D] font-bold'>Cash On Delivery</h2>
                    <p className='text-[16px] text-[#606060] font-medium'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-[32px] rounded-[24px] shadow'>
                    <CiDeliveryTruck size={56}/>
                    <h2 className='text-[20px] text-[#03373D] font-bold'>Delivery Hub</h2>
                    <p className='text-[16px] text-[#606060] font-medium'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
                <div className='p-[32px] rounded-[24px] shadow'>
                    <CiDeliveryTruck size={56}/>
                    <h2 className='text-[20px] text-[#03373D] font-bold'>Booking SME & Corporate</h2>
                    <p className='text-[16px] text-[#606060] font-medium'>From personal packages to <br /> business shipments — we deliver <br /> on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;