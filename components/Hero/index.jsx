import React from 'react';
import Image from 'next/image';
import illu from './../../public/ilu1.png';

const Hero = () => {
  return (
    <div className="gap-16 flex flex-col sm:flex-row items-center h-screen w-3/4 m-auto">
      <div className="mt-20 sm:mt-0 w-4/6">
        <Image src={illu} alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-mono">Sofía Orrego Brito</h1>
        <h2>A veces artista, proyecto de arquitecta.</h2>
      </div>
    </div>
  );
};

export default Hero;
