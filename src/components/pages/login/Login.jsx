import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Login = () => {
  const { logIn,GoogleLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogInBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    logIn(email, password)
      .then((result) => {
        setError("");
        Swal.fire({
            title: 'Success!',
            text: 'Login successfully!',
            icon: 'success',
            timer:4000,
            confirmButtonText: 'Go'
          })
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message.slice(9, -1));
      });
  }

  //google submit

  return (
    <div>
      <div className=" min-h-screen bg-[#E3F4F4]">
        <div className="hero-content mx-auto flex">
          <div className="card mt-16 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogInBtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt text-red-500 tracking-wider">
                    {error}
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Log In"
                  className="btn border-none text-black hover:bg-[#E3F4F4] tracking-wider font-bold bg-[#C4DFDF]"
                ></input>
              </div>
              <Link
                className="text-sm link-hover text-[#73A9AD]"
                to="/register"
              >
                New to TrusToy? <span className="">Please Register</span>
              </Link>
            </form>

            <div className="divider mx-8 mt-0">OR</div>
            <div className=" flex mx-7 mb-10 justify-center">
                <button onClick={handleGoogleSubmit} className="btn border-none w-full  bg-[#5F939A] hover:bg-[#537188] duration-500">Sign In With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
