import React from 'react';
import style from './Separation.module.css';

const Separation = () => {
  const classes = {
    fixedContainer: `
      ${style.wave}    
      w-full
      h-36
      bg-surface
    `,
  };

  return <div className={classes.fixedContainer}></div>;
};

export default Separation;
