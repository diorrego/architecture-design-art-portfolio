import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <NavBar />
      {children}
      <footer className="flex items-center justify-center w-full h-screen bg-surface" />
    </div>
  );
};

export default Layout;
