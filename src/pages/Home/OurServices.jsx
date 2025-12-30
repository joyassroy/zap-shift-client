import React from 'react';

import { FiTruck, FiMapPin, FiPackage, FiDollarSign, FiBriefcase, FiRefreshCcw } from 'react-icons/fi';


const servicesData = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FiTruck />,
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FiMapPin />,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FiPackage />,
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FiDollarSign />,
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FiBriefcase />,
  },
  {
    id: 6,
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FiRefreshCcw />,
  },
];


const ServiceCard = ({ title, description, icon }) => {
  return (
   
    <div className="bg-white p-8 rounded-[2rem] text-center shadow-sm transition-all duration-300 hover:bg-[#cce986] group h-full flex flex-col justify-start">
      
     
      <div className="w-20 h-20 mx-auto bg-blue-50/80 rounded-full flex items-center justify-center mb-6 shadow-inner">
         <span className="text-3xl text-blue-400/70">
           {icon}
         </span>
      </div>

     
      <div className="mb-4 relative inline-block mx-auto">
        
        <h3 className="text-xl font-bold text-gray-900 relative z-10 px-2">
          {title}
        </h3>
        
        <span className="absolute inset-0 border-2 border-dashed border-transparent group-hover:border-gray-700 rounded-lg -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
      </div>

      
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};



const OurServices = () => {
  return (
    
    <div className="bg-[#143d3d] py-16 px-4 sm:px-8 md:px-16 rounded-[3rem] max-w-7xl mx-auto my-10">
      
      
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Services
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

    </div>
  );
};

export default OurServices;