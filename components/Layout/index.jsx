import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <NavBar />
      {children}
      <footer className="flex items-center justify-center w-full h-screen border-t bg-gray-500" />
    </div>
  );
};

export default Layout;
