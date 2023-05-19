import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Register = () => {
    const navigate=useNavigate()

    const {createUser,logOut}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleRegisterBtn=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoUrl=form.photoUrl.value 
        // console.log(name,email,password,photoUrl);
        const userUpdate=(currentUser,name,photoUrl)=>{
            updateProfile(currentUser,{
               displayName:name,photoURL:photoUrl
           })
           .then(()=>{
            // setReload(true)
           })
          .catch(error=>{
           console.log(error);
          })
          }
        createUser(email,password)
        .then(result=>{
            logOut()
            .then(()=>{})
            .catch(()=>{})
            const currentUser=result.user
            userUpdate(currentUser,name,photoUrl)
            console.log(currentUser);
            setError('')

            Swal.fire({
                title: 'Success!',
                text: 'user register successfully!',
                icon: 'success',
                timer:4000,
                confirmButtonText: 'Cool'
              })
              navigate('/login')
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
        <Link className='text-sm link-hover text-[#73A9AD]' to="/login">Already have an account? <span className=''>Please  Login</span></Link>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Register;