import { navigateToElement } from '@/utils/navigateToElement';
import React from 'react'
const { useState } = React;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hambugerbars = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-200`;
  const navButton = `cursor-pointer px-3 my-1`;
  
  const handleNavigate = ((page: string) => {
    setIsOpen(!isOpen)
    navigateToElement(page);
  })


  return (
    <div className={`flex flex-col h-14 w-full transition-color duration-200 `}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col place-self-end px-3 py-2 justify-center items-end group z-50"
      >
        <div
          className={`${hambugerbars} ${
            isOpen && "rotate-45 translate-y-3 group-hover:opacity-100"
          }`}
        />
        <div className={`${hambugerbars} ${isOpen && "opacity-0"}`} />
        <div
          className={`${hambugerbars} ${
            isOpen && "-rotate-45 -translate-y-3  group-hover:opacity-100"
          }`}
        />
      </button>
      <ul
        className={` text-right w-full transition-all duration-200
        absolute flex flex-col justify-center items-center
        h-[100vh] space-y-5 text-lg
          ${!isOpen ? " opacity-0 -z-10 scale-0" : " opacity-100 bg-white z-40"}`}
      >
        <li className={navButton} onClick={() => handleNavigate("aboutMe")}>
          About Me
        </li>
        <li className={navButton} onClick={() => handleNavigate("myWork")}>
          My Work
        </li>
        <li className={navButton} onClick={() => handleNavigate("contactMe")}>
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;