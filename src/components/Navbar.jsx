import userIcon from "../../src/assets/icons/user.png";
import { Link, NavLink } from "react-router-dom";
import logo from '../../src/assets/icons/logo-2.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

  const{user, signOutUser} = useContext(AuthContext)
 
  
  const links = (
    <>
      <li>
       <NavLink to='/'>Home</NavLink>
      </li>
      <li>
       <NavLink to='/allreviews'>All Reviews</NavLink>
      </li>
     {
      user && (
        <>
         <li>
       <NavLink to='/addReview'>Add Review</NavLink>
      </li>
      <li>
       <NavLink to='/updateReview'>Update Review</NavLink>
      </li>
      <li>
       <NavLink to='/myReviews'>My Review</NavLink>
      </li>
      <li>
       <NavLink to='/watchlist'>Game WatchList</NavLink>
      </li>
      
        </>
      )
     }
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signout successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="md:w-12 md:h-12 h-8 rounded-full w-8" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
          </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user && user?.email ? (
            <div className="flex mr-3 font-bold tooltip" data-tip={user?.displayName
            }>
             
              <img
                className="w-12 h-12 rounded-full object-cover mr-10 md:mr-0"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <img src={userIcon} alt="user" />
          )}
        </div>

        {user ? (
          <>
            <a onClick={handleSignOut} className="btn btn-neutral">
              Log out
            </a>
          </>
        ) : (
          <Link className="btn btn-outline ml-3" to="/login">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
