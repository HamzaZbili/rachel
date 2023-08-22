import React from 'react'
import Carousel from './components/Carousel';

const MyWork = () => {
  return (
    <div
      id="myWork"
      className="flex justify-between flex-col mt-10 px-10 md:py-10"
    >
       <h2
          className="text-[40px] sm:text-[50px] lg:text-[60px] font-light
        pl-[15vw] mb-10"
        >My Work</h2>
      <Carousel/>
    </div>
  );
}

export default MyWork