import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
    const {name}=useContext(AuthContext)
  return (
    <div>
      <div className=" min-h-screen bg-[#E3F4F4]">
        <div className="hero-content mx-auto flex">
          <form className="card mt-16 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>

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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn border-none text-black hover:bg-[#E3F4F4] tracking-wider font-bold bg-[#C4DFDF]"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
