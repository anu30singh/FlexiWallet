import React, { useState } from 'react';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">FlexiWallet</div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-8`}>
          <a href="#" className="text-white font-semibold ">Home</a>
          <a href="#" className="text-white font-semibold">About Us</a>
          <a href="#" className="text-white font-semibold">Transfer Money</a>
          <a href="#" className="text-white font-semibold">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;