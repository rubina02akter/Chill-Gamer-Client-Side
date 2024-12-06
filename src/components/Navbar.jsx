import userIcon from "../../src/assets/icons/user.png";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/icons/logo-2.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signout successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-6">
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
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn bg-none rounded-full mr-2"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
        </button>
        <div>
          {user ?(
            <div className="flex mr-3 font-bold tooltip" data-tip={user?.displayName}>
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
          <a onClick={handleSignOut} className="btn btn-neutral">
            Log out
          </a>
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
