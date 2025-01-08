import React from 'react';
import PCNavBar from './PCNavBar/PCNavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';

const Navbar = () => {
  return (
    <div className='bg-[#0b000e] text-white sticky top-0 z-[999999]'>
    <div className='hidden lg:block'>  <PCNavBar/></div>
    <div className='block lg:hidden'>  <MobileNavBar/></div>
    </div>
  );
};

export default Navbar;