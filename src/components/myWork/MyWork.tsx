import React from 'react'
import Reveal from '@/hook/Reveal';
import Carousel from './components/Carousel';


const MyWork = () => {
  return (
    <div id="myWork">
      <Reveal threshold={0.2} transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div className="flex justify-between flex-col mt-10  ">
          <h2
            className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-light
         sm:text-left sm:pl-[15vw] sm:mb-10"
          >
            My Work
          </h2>
          <Carousel />
        </div>
      </Reveal>
    </div>
  );
}

export default MyWork