import React from 'react'
import NavBar from './NavBar';
import wine from "../../images/site photos/kym-ellis-aF1NPSnDQLw-unsplash.jpg"

const Header = () => {
  return (
    <div className="pt-[20px] px-[30px]">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <h1
          className="text-[75px] sm:text-[80px] lg:text-[85px]
      w-[100px] font-light leading-none mb-[20px]"
        >
          Rachel Naismith
        </h1>
        <NavBar />
      </div>
      <div className="overflow-hidden ">
        <img
          src={wine.src}
          alt="wine"
          className="object-cover h-[40vh] w-full
          hover:grayscale-0 grayscale transition
          duration-500"
        />
      </div>
    </div>
  );
}

export default Header