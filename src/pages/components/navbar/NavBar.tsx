import React, { useEffect, useState } from 'react'
import HamburgerMenu from "./HamburgerMenu"
import { navigateToElement } from '@/utils/navigateToElement';

const NavBar = () => {
  const [scrollShow, setScrollShow] = useState("top-0");
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
        setScrollShow("-top-[90px]");
      } else {
        setScrollShow("top-0");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
      return () => {
    window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navButton = "cursor-pointer hover:scale-105 transition-transform mx-10";

  return (
    <div
      className={`fixed ${scrollShow} w-full right-0
      transition-top duration-300 z-40`}
    >
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <ul
          className={`flex py-[20px]
          justify-end text-[17px]
           bg-teal `}
        >
          <li
            className={navButton}
            onClick={() => navigateToElement("aboutMe")}
          >
            About Me
          </li>
          <li className={navButton} onClick={() => navigateToElement("myWork")}>
            My Work
          </li>
          <li
            className={navButton}
            onClick={() => navigateToElement("contactMe")}
          >
            Contact Me
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar



const MobileNavBar = () => {
    const [scrollShow, setScrollShow] = useState("top-0");

    useEffect(() => {
      let prevScrollpos = window.scrollY;
      window.onscroll = () => {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
          setScrollShow("-top-[90px]");
        } else {
          setScrollShow("top-0");
        }
        prevScrollpos = scrollY;
      };
    }, []);

  return (
    <div
      className={`fixed ${scrollShow} right-0 w-[100vw] z-40
    h-8 bg-teal transition-top duration-300`}>
      <HamburgerMenu/>
    </div>
  );
}