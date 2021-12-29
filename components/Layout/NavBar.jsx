import React, { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useBreakpoint';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
  const mobileScreen = useMediaQuery('sm');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavBar = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', updateNavBar);

    return () => {
      window.removeEventListener('scroll', updateNavBar);
    };
  }, []);

  const classes = {
    fixedContainer: `
      fixed 
      flex
      flex-row
      items-center
      justify-around
      w-full
      h-16
      bg-background
      text-black-text
      z-50
      ${
        scrolled &&
        `
        bg-surface
        text-white-text
      `
      }
    `,
  };

  return (
    <div className={classes.fixedContainer}>
      <div className="font-mono">Sofía Orrego</div>
      {mobileScreen && (
        <ul className="flex flex-row xl:gap-x-20 md:gap-x-16 sm:gap-x-6">
          <li>Arte</li>
          <li>Arquitectura</li>
          <li>Sobre mí</li>
        </ul>
      )}
      {!mobileScreen && <HiMenu />}
    </div>
  );
};

export default NavBar;
