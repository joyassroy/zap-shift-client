import React from 'react';

import { TbTruckDelivery, TbPackage, TbHeadset } from "react-icons/tb";
import img1 from '../../../assets/live-tracking.png';
import img2 from '../../../assets/safe-delivery.png';

const featuresData = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    // ইমেজে অনেকগুলো আইকনের মিশ্রণ আছে, আমি একটি প্রধান আইকন ব্যবহার করলাম
    icon: <img src={img1} alt="" />,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <img src={img2} alt="" />,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <img src={img2} alt="" />,
  },
];


const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center shadow-sm">
      

      <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-12 mb-8 md:mb-0 md:border-r-2 md:border-dashed border-gray-200">

        <div className="text-[#0f3434]">
          {icon}
        </div>
      </div>

      
      <div className="w-full md:w-2/3 pl-0 md:pl-12 text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#0f3434] mb-4">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};



const TrustSection = () => {
  return (
    
    <section className=" py-16 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 mb-12">
         <div className="border-t-2 border-dashed border-gray-300/60"></div>
      </div>

      {/* কার্ডগুলোর কন্টেইনার (Cards Container) */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {featuresData.map((feature) => (
          <FeatureCard 
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>

      {/* নিচের ড্যাশড লাইন (Bottom Dashed Line) */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
         <div className="border-b-2 border-dashed border-gray-300/60"></div>
      </div>

    </section>
  );
};

export default TrustSection;