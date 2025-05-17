import React from 'react';
import "./Welcome.css";
import Button from './Button';
import { burgerr } from '../../public/assets';

const Welcome = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#cd8521] via-black to-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[90rem] mx-auto pt-20 pb-16 px-4 gap-12">

        {/* Left Section: Text & Buttons */}
        <div className="flex flex-col items-start lg:items-start max-w-[45rem] text-left space-y-6">
          <div className="space-y-3">
            <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px] font-bold">
              Savor Every Bite:
            </p>
            <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px] font-bold">
              From <span className="fancy">Our Kitchen</span>
            </p>
            <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px] font-bold">
              to Your Table
            </p>
            <p className="sub-text text-xl lg:text-2xl fancy">
              Delivering Deliciousness to Your Doorstep
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <Button white>Order Now</Button>
            <Button>Get App</Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center">
          <img src={burgerr} alt="Burger" className="w-[670px] h-[670px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
