import React, { MutableRefObject, useRef } from 'react'
import bread from "@/images/site photos/bread.png"
import Reveal from '@/hook/Reveal';



const AboutMe = () => {
  
  

  return (
    <div id="aboutMe">
      <Reveal threshold={0.2} transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div
          className="px-[20px] pt-[30px] flex flex-col
    items-center sm:items-start sm:flex-row justify-between"
        >
          <div className="flex flex-col sm:w-[55vw]">
            <h2
              className="text-[40px] sm:text-[50px] lg:text-[60px] font-light
        my-[40px] pl-[15vw]"
            >
              About Me
            </h2>
            <div className="text-right self-end pr-[30px] sm:pr-0">
              <p className="my-[10px] w-[300px]">
                Here I am in my natural habitat — purchasing bread! I have been
                writing about food (and travel, and other bits and bobs) for
                over four years
              </p>
              <p className="my-[30px] w-[300px]">
                I currently write for different publications, including{" "}
                <i>
                  Palate Magazine, Travel Mag, HiP Paris, and Paris Unlocked
                </i>
              </p>
            </div>
          </div>
          <img
            src={bread.src}
            alt="bread"
            className="w-[20rem] sm:w-[35vw]
      object-contain sm:mr-[15px] mt-[30px]
      hover:grayscale-0 grayscale transition
          duration-300"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default AboutMe