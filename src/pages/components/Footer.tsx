import React from 'react'
import spritz from "../../images/site photos/spritz.jpg"
import Reveal from '@/hook/Reveal'

const Footer = () => {

    const listItem = 'py-[10px]'
  return (
    <div id="contactMe">
      <Reveal threshold={0.2} transition={{ duration: 0.8, ease: "easeInOut" }}>
        <div
          className="px-[20px] pt-[60px] flex flex-col items-center sm:items-start
    sm:flex-row justify-between "
        >
          <h2
            className="text-[50px] sm:text-[80px] 
        font-light leading-tight pl-[5vw] mb-[60px]
         sm:pt-[100px]"
          >
            Work with me
          </h2>
          <address>
            <img
              src={spritz.src}
              alt="drinks"
              className="w-[25rem] sm:w-[40vw]
        hover:grayscale-0 grayscale transition
          duration-300 mr-[15px] "
            />
            <ul className="not-italic font-thin py-[25px]">
              <li className={listItem}>
                Instagram
                <br />
                @writefood
              </li>
              <li className={listItem}>
                Email
                <br />
                rmnaismith@me.com
              </li>
              <li className={listItem}>
                Phone
                <br />
                +33 7 67 05 50 92
              </li>
            </ul>
          </address>
        </div>
      </Reveal>
    </div>
  );
}

export default Footer