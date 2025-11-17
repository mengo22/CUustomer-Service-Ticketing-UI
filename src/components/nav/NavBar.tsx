

import { NavLink } from "react-router"


export const NavBar = () => {
  return (
    
<div className="navbar bg-base-100 shadow-sm width-full">
  {/* LEFT: Hamburger menu for mobile */}
  <div className="flex-none lg:hidden">
    <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
  </div>

  {/* CENTER: Logo */}
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Quick Fix</a>
  </div>

  {/* RIGHT: Desktop Menu */}
  <div className="flex-none hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>

      
      <li><a href="/contact">Contact Us</a></li>

      {/* Dropdown example */}
      <li>
        <details>
          <summary>Account</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </details>
      </li>

    </ul>
  </div>
</div>


  )
}