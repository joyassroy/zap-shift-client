import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
const Reveiwcard = ({rev}) => {
    const {userName,review,user_photoURL}=rev;
    return (
        <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-[32px] p-8 max-w-[450px]">
        
        <div className="text-[#cbd5e1] text-5xl mb-4">
          <FaQuoteLeft />
        </div>

        <p className="text-[#4b5563] text-[16px] leading-[1.6] mb-8 font-normal">
          {review}
        </p>

        <div className="w-full border-t-2 border-dashed border-[#1f4d5a] opacity-30 mb-6"></div>

        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] rounded-full bg-[#1f4d5a]">
            <img src={user_photoURL} className='rounded-full'  alt="" />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-[#1f4d5a] font-bold text-lg">
              {userName}
            </h3>
            <p className="text-[#4b5563] font-medium text-sm underline decoration-[#3b82f6] decoration-2 underline-offset-4 cursor-pointer">
              Senior Product Designer
            </p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default Reveiwcard;