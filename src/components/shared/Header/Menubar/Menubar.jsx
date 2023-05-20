import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Menubar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    
    logOut()
    .then(()=>{
      Swal.fire({
        title: 'Success',
        text: 'Log Out Done!',
        icon: 'info',
        timer:4000,
        confirmButtonText: 'Go'
      })
    })
    .catch(()=>{})
  }
    const navMenu=<>
    
    <li><ActiveLink to="/">Home</ActiveLink></li>
    <li><ActiveLink to="/alltoys">All toys</ActiveLink></li>

    <li><ActiveLink to="/blog">Blogs</ActiveLink></li>
      
    {
      user ? <>
    <li><ActiveLink to="">My toys</ActiveLink></li>
    <li><ActiveLink to="/addtoy">Add a toy</ActiveLink></li>
      </>:<>
      
      </>
    }
   
    </>
return (
    <div className=' max-w-7xl mx-auto '>
        <div className="navbar ">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  italic text-gray-500 font-semibold  md:text-xl text-lg w-52">
    {
        navMenu
    }
  </ul>
</div>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal italic text-gray-500 font-semibold  md:text-xl text-lg px-1">
  {
    navMenu
  }
</ul>
</div>
<div className="navbar-end">
{
          user ? <div className=" flex justify-end gap-3">
          <button onClick={handleLogOut} className="btn btn-active btn-ghost font-bold text-gray-950  tracking-wider">Log Out</button>
            
          </div>
           :
          <div className=" flex justify-end gap-3">
            <Link to="/login"><button className='btn btn-active btn-ghost  text-gray-950 font-bold tracking-wider'>Log in</button></Link>
            
          </div>
        }
</div>
</div>
    </div>
);
};

export default Menubar;