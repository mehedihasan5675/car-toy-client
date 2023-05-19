import React, { useContext } from "react";
import { FaCarCrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
const Topbar = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user);
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
  // <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
  return (
    <div className="bg-[#C4DFDF] ">
      <div className="navbar gap-5 max-w-7xl mx-auto  justify-between">
        <div className="navbar flex-shrink-0 w-4/12">
          <a className="btn px-0 btn-ghost  normal-case text-xl"><span className="text-[#376060]   text-3xl md:text-5xl "><FaCarCrash></FaCarCrash></span><span className="text-black font-bold text-2xl">Trus</span> <span className="text-rose-600 font-bold text-xl md:text-2xl">Toy</span></a>
        </div>

        <div className="form-control relative w-6/12">
          <input 
            type="text"
            placeholder="Search"
            className="input  w-full md:w-5/6 input-bordered"
          />
          <button className="btn  absolute top-0 md:right-12 xl:right-[76px] right-0 btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
        </div>

        <div className="w-2/12">
        {
          user ? 
          <div className=" flex justify-end gap-3">
          <button onClick={handleLogOut} className="btn btn-active btn-ghost text-white font-semibold tracking-wider">Log Out</button>
            <label tabIndex={0} className="btn flex flex-row  btn-ghost btn-circle avatar">
            
              <div title={user?.displayName} className="w-32   rounded-full">
                <img src={user?.photoURL} className="w-full"/>
              </div>
            </label>
          </div> :
          <div className=" flex justify-end gap-3">
            <Link to="/login"><button className='btn btn-active btn-ghost  text-white font-semibold tracking-wider'>Login</button></Link>
            <Link to="/register"> <button className='btn btn-active btn-secondary text-white font-semibold tracking-wider '>Sign Up</button></Link>
          </div>
        }
        </div>
      </div>
    </div>
  );
};

export default Topbar;
