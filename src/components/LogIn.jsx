import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {
 
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const {signInUser,signInWithGoogle,setForget,user} = useContext(AuthContext);

  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    setSuccess(false)
    setError(' ')

     //signin with user 
     signInUser(email,password)
     .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      // Display welcome message with the user's displayName
      const displayName = loggedInUser.displayName || 'User'; 
      Swal.fire(`Welcome, ${displayName}!`);

      e.target.reset();
      navigate('/');
      setSuccess(true);
  
     })
     .catch(error => {
       console.log('ERROR',error.message)
       setError(error.message)
     })
     
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate('/')
      const displayName = loggedInUser.displayName || 'User'; 
      Swal.fire(`Welcome, ${displayName}!`);
    })
    .catch(error => {
      console.log('ERROR',error.message)
    })

  }

 
  return (
    <>
 
    <div className="card w-full max-w-lg shrink-0 mx-auto border-black border  rounded-none">
        <h2 className="font-semibold text-2xl mt-12 ml-8 text-green-700">Log in here</h2>
        <form onSubmit={handleLogIn} className="card-body">
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  border-b-black rounded-none"
              required
            />
            <label className="label">
              <NavLink  className="label-text-alt link link-hover">
                Forgot password?
              </NavLink>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white text-lg">Login</button>
          
          </div>
        </form>
        {
          success && <p className='text-green-500'>user login successfully</p>
        }
        {
          error && <p className='text-red-700 text-center'>{error}</p>
        }


        <p className="text-center font-semibold text-lg mb-6">
          New to this website? Please <Link to='/register' className="underline text-green-700">Register</Link>
        </p>
        <div className="flex justify-center items-center mb-4 ">
          <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-none">Google<FcGoogle /></button>
      
        </div>
      </div>
      </>
  );
};

export default LogIn;