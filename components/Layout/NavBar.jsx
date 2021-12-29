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
      text-black-text
      z-50
      ${
        scrolled
          ? `
        bg-surface
        text-white-text
        `
          : `
        bg-background
        `
      }
    `,
  };

  return (
    <div className={classes.fixedContainer}>
      <Link href="/" passHref>
        <button className="font-mono">Sofía Orrego Brito</button>
      </Link>
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
