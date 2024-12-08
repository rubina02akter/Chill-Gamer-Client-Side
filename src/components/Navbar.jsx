import userIcon from "../../src/assets/icons/user.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/assets/icons/icons8-game-64.png";
import { useContext,  useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser} = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Persist theme on reload
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allreviews">All Reviews</NavLink>
      </li>
      
      {user && (
        <>
          <li>
            <NavLink to="/addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Review</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Game WatchList</NavLink>
          </li>
        </>
      )}
    </>
  );
const navigate = useNavigate()
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success(' Log Out Successfully!', {
          position: "top-right",
          autoClose: 2000,
         
          });
        navigate('/')
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="navbar text-white  dark:bg-gray-900  dark:text-gray-100 pt-6">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <img className="md:w-12 md:h-12 h-8 rounded-full w-8" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="bg-none rounded-full mr-2"
        >
          {darkMode ? <FaSun className="text-yellow-500 w-8 h-6" /> : <FaMoon className="w-8 h-6"/>}
        </button>
        <div>
          {user ?(
            <div className="flex mr-1 font-bold tooltip" data-tip={user?.displayName}>
              <img
                className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover "
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
           <div className="rounded-full">
             <img src={userIcon} alt="user" className="rounded-full"/>
           </div>
          )}
        </div>
        {user ? (
          <a onClick={handleSignOut} className="btn bg-gradient-to-r from-blue-950 to-rose-700 text-white">
            Log out
          </a>
        ) : (
         <>
          <Link className="btn btn-outline ml-3 text-white" to="/login">
            Log in
          </Link>
          <Link className="btn btn-outline ml-3 text-white" to="/register">
            Register
          </Link>

         </>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
