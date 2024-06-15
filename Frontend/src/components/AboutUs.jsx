import React from 'react'; 
import aboutImage from '../assets/AboutUs.png'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-4 lg:mt-0 lg:pr-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">About FlexiWallet</h1>
          <p className="text-lg lg:text-xl mb-4">
            FlexiWallet is a leading digital wallet platform dedicated to simplifying financial transactions and empowering users with flexible and secure money management solutions.
          </p>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src={aboutImage} 
            alt="About Us Image" 
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;