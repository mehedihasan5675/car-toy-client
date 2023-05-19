import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleRegisterBtn=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoUrl=form.photoUrl.value 
        console.log(name,email,password,photoUrl);
        createUser(email,password)
        .then(result=>{
            const latestUser=result.user
            console.log(latestUser);
            alert('hi regisetered')
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message.slice(9,-1))
        })
    }
    return (
        <div>
            <div className=" min-h-screen  bg-[#E3F4F4]">
  <div className="hero-content mx-auto  flex">
   
    <form onSubmit={handleRegisterBtn} className="card mt-16 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"name='name' placeholder="Your name" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password'  placeholder="password" className="input input-bordered" />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"name='photoUrl' placeholder="Photo url" className="input input-bordered" />

          <label className="label">
            <p  className="label-text-alt text-red-500 tracking-wider">{error}</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="Register"className="btn border-none text-black hover:bg-[#E3F4F4] tracking-wider font-bold bg-[#C4DFDF]"></input>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Register;