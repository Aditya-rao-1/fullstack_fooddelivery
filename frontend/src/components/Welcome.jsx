import React from 'react';
import "./Welcome.css";
import Button from './Button';
import { burgerr } from '../../public/assets';

const Welcome = () => {
  return (
    <>
      <div className="relative pb-[150px] mb-5 pt-20 p-10 bg-black">
        <div className="absolute top-6 right-0 pointer-events-none  max-lg:top-40 max-sm:top-96 xl:w-auto">
        <img src={burgerr} width={670} height={670} className='max-lg:w-[500px] max-lg:h-[500px]' alt="" />
        </div>
        <div className="relative text-white font-semibold z-1 max-w-[45rem] mr-[10px] pt-20 max-md:ml-[20px] max-lg:ml-[50px] max-sm:text-center">
          <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px]">Savor Every Bite:</p>
          <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px]">From <span className="fancy">Our Kitchen</span></p>
          <p className="main-text xl:text-7xl lg:text-6xl md:text-[60px] sm:text-[50px]">to Your Table</p>
          <p className="sub-text xl:text-2xl lg:text-xl md:text-lg sm:text-base fancy">Delivering Deliciousness to Your Doorstep</p>
        </div>

        <div className="relative flex max-sm:justify-center z-1 max-w-[40rem] gap-7 mr-[10px] pt-10 max-md:ml-[20px] max-lg:ml-[50px]">
          <Button white>Order Now</Button>
          <Button>Get App</Button>
        </div>

      </div>
      
    </>
  )
}

export default Welcome;
