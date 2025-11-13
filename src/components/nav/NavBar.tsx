

import { NavLink } from "react-router"


export const NavBar = () => {
  return (
    <div>
<ul>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>






</ul>
</div>
  )
}
