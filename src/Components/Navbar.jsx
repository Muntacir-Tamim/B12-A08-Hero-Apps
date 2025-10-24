import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/Installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="font-bold text-3xl flex items-center gap-2"
          >
            <img src={logo} alt="" className="w-8 h-8" />
            <h1>HERO.IO</h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/Installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/"
            className="btn flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-[#FFFFFF]"
          >
            <Github className="w-5 h-5" />
            contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
