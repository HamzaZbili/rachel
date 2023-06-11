import React from 'react'

const NavBar = () => {
  return (
    <div
      className="w-[240px] sm:w-[300px] md:w-[400px] flex mb-[20px]
    justify-between  text-[14px] sm:text-[17px] lg:text-[19px]"
    >
      <a className="cursor-pointer">About Me</a>
      <a className="cursor-pointer">My Work</a>
      <a className="cursor-pointer">Contact Me</a>
    </div>
  );
}

export default NavBar