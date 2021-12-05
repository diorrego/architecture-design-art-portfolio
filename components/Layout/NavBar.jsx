import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
  const mobileScreen = useMediaQuery('sm');

  return (
    <div className="fixed flex flex-row items-center justify-around w-full h-16 bg-black text-white z-50">
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
