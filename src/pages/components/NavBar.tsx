import React from 'react'

const NavBar = () => {
  const navButton = "cursor-pointer hover:scale-105 transition-transform";

  const navigateToElement = (page: string) => {
      const section = document.getElementById(page);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    };

  return (
    <ul
      className="w-[240px] sm:w-[300px] md:w-[400px] flex mb-[20px]
    justify-between  text-[14px] sm:text-[17px] lg:text-[19px] mr-[20px]"
    >
      <li className={navButton} onClick={() => navigateToElement("aboutMe")}>
        About Me
      </li>
      <li className={navButton} onClick={() => navigateToElement("myWork")}>
        My Work
      </li>
      <li className={navButton} onClick={() => navigateToElement("contactMe")}>
        Contact Me
      </li>
    </ul>
  );
}

export default NavBar