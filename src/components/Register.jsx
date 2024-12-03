import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none mb-12">
      <h2 className="font-semibold text-2xl mt-12 ml-8 text-green-700">
        Create an account
      </h2>
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="email"
            className="input border-b-black rounded-none"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input border-b-black rounded-none"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo_URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo_url"
            className="input border-b-black rounded-none"
            required
          />
        </div>
        <div className="form-control relative">
          <input
            // type={showPassword ? "text" : "password"}
            type="text"
            name="password"
            placeholder="Password"
            className="input border-b-black rounded-none w-full pr-10"
            required
          />
          {/* <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-xs outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-lg text-white">Register</button>
        </div>
      </form>
      {/* {errorMessage && (
        <p className="text-red-600 text-center">{errorMessage}</p>
      )}
      {success && <p className="text-green-600">Register is Successful.</p>} */}
      <p className="mb-6 text-center text-lg font-semibold ">
        Already have an account?{" "}
        <Link className="underline text-green-700" to="/login">
          Log in
        </Link>
      </p>
      <div className="flex justify-center items-center mb-4 ">
        <button
          // onClick={handleGoogleSignIn}
          className="btn btn-outline rounded-none"
        >
          Google <FcGoogle></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default Register;
