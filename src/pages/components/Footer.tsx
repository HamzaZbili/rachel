import React from 'react'
import spritz from "../../images/site photos/spritz.jpg"

const Footer = () => {

    const listItem = 'py-[10px]'
  return (
    <div
      className="px-[20px] pt-[60px] flex flex-col
    sm:flex-row justify-between "
      id="contactMe"
    >
      <h2
        className="text-[75px] sm:text-[80px] lg:text-[85px]
        font-light leading-tight pl-[5vw] w-[400px] mb-[60px]"
      >
        Work with me
      </h2>
      <address>
        <img
          src={spritz.src}
          alt="drinks"
          className="sm:w-[40vw]
        hover:grayscale-0 grayscale transition
          duration-300"
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
  );
}

export default Footer