import React from 'react';

const NavBar = () => {
  return(
  <div className="fixed flex flex-row items-center justify-around w-full h-16 bg-indigo-300">
    <div className="font-mono">Sofía Orrego</div>
    <ul className="flex flex-row gap-x-6">
      <li>Arte</li>
      <li>Arquitectura</li>
      <li>Sobre mí</li>
    </ul>
  </div>
  );
}

export default NavBar;