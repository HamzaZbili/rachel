import React from 'react'
const { useState } = React;

const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const hambugerbars = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex flex-row-reverse h-14 bg-teal w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col pr-3 py-2 justify-center items-end group"
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
    </div>
  );
};

export default HamburgerMenu;