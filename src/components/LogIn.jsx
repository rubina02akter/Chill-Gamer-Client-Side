import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const LogIn = () => {
  return (
    <div className="card w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none">
      <h2 className="font-semibold text-2xl mt-12 ml-8 text-green-700">
        Log in here
      </h2>
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            // ref={emailRef}
            name="email"
            placeholder="email"
            className="input border-b-black rounded-none"
            required
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
            className="input  border-b-black rounded-none"
            required
          />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-lg text-white">Login</button>
        </div>
      </form>
      {/* {success && <p className="text-green-500">user login successfully</p>}
      {error && <p className="text-red-700 text-center">{error}</p>} */}

      <p className="text-center font-semibold text-lg mb-6">
        New to this website? Please{" "}
        <Link to="/register" className="underline text-green-700">
          Register
        </Link>
      </p>
      <div className="flex justify-center items-center mb-4 ">
        <button
         
          className="btn btn-outline rounded-none"
        >
          Google
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
