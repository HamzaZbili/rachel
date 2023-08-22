import React from 'react'
import wine from "../../images/site photos/wine.png"

const Header = () => {
  return (

      <div className="pt-[20px] px-[20px] ">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h1
            className="text-[75px] sm:text-[80px] lg:text-[85px]
     w-[320px] font-light leading-tight mb-[20px] z-50"
          >
            Rachel Naismith
          </h1>
        </div>
        <div className="overflow-hidden px-[15px]">
          <img
            src={wine.src}
            alt="wine"
            className="object-cover h-[30vh] sm:h-[40vh] w-full
          hover:grayscale-0 grayscale transition
          duration-300"
          />
        </div>
      </div>
  );
}

export default Header