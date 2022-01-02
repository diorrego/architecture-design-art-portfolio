import React, { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useBreakpoint';
import { HiMenu } from 'react-icons/hi';
import Link from 'next/link';

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
      text-white-text
      z-50
      ${
        scrolled
          ? `
        bg-surface
        text-white-text
        `
          : `
        bg-surface
        `
      }
    `,
  };

  return (
    <div className={classes.fixedContainer}>
      <div>
        <Link href="/" passHref>
          <button className="rounded-full border-2 w-10 h-10 border-white text-2xl pb-2">S</button>        
        </Link>
        <span className="inline pl-1">ofía Orrego Brito</span>
      </div>
      
      {mobileScreen && (
        <div className="flex flex-row xl:gap-x-20 md:gap-x-16 sm:gap-x-6">
          <Link href="/art" passHref>
            <button>Arte</button>
          </Link>
          <Link href="/architecture" passHref>
            <button>Arquitectura</button>
          </Link>
        </div>
      )}
      {!mobileScreen && <HiMenu />}
    </div>
  );
};

export default NavBar;
