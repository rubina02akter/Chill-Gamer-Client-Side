import userIcon from "../../src/assets/icons/user.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
       <NavLink to='/'>Home</NavLink>
      </li>
      <li>
       <NavLink to='/allreviews'>All Reviews</NavLink>
      </li>
      <li>
       <NavLink to='/login'>Log In</NavLink>
      </li>
      <li>
       <NavLink to='/register'>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="md:w-24 w-12" src='{logo}' alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <div>
          {user && user?.email ? (
            <div className="flex mr-3 font-bold">
             
              <p className="mt-3 text-xs font-thin">{user.email}</p>
              <img
                className="w-12 h-12 rounded-full object-cover mr-10 md:mr-0"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <img src={userIcon} alt="user" />
          )}
        </div> */}

        {/* {user ? (
          <>
            <a onClick={handleSignOut} className="btn btn-neutral">
              Log out
            </a>
          </>
        ) : (
          <Link className="btn btn-outline ml-3" to="/login">
            Log in
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
