import React from 'react';
import Separation from './Separation';
import HeroIllu from './../elements/HeroIllu';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-center justify-evenly pt-20 px-20">
        <div className="w-3/12">
          <HeroIllu />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl font-mono">Sofía Orrego Brito</h1>
        </div>
      </div>
      <Separation />
    </section>
  );
};

export default Hero;
