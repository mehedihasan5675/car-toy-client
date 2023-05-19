import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Menubar = () => {
    const navMenu=<div className='flex gap-10 '>
    <ActiveLink to="">Home</ActiveLink>
    <ActiveLink to="">All Toys</ActiveLink>
    <ActiveLink to="">My Toys</ActiveLink>
    <ActiveLink to="">Add A Toy</ActiveLink>
    <ActiveLink to="">Blogs</ActiveLink>
    <ActiveLink to="/login">Login</ActiveLink>
    <ActiveLink to="/register">Sing Up</ActiveLink>
    </div>
return (
    <div className=' max-w-7xl mx-auto '>
        <div className="navbar ">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100   italic text-gray-500 font-semibold  md:text-xl text-lg w-52">
    {
        navMenu
    }
  </ul>
</div>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal  italic text-gray-500 font-semibold  md:text-xl text-lg px-1">
  {
    navMenu
  }
</ul>
</div>
<div className="navbar-end">
</div>
</div>
    </div>
);
};

export default Menubar;