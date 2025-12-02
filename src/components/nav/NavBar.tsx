

 import { NavLink } from "react-router"
import { FaToolbox } from "react-icons/fa";

export const NavBar = () => {
  return (
    
<div>

 
<header className="text-white body-font bg-blue-400">
  <div className=" flex justify-betweencontainer ml-2 mr-2 p-4 flex-col md:flex-row items-center ">
    <div className="flex justify-start">
     
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <FaToolbox />
    
      <span className="ml-3 text-3xl font-bold">Quick Fix</span>
    </a>
    
    </div>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     
      
       <a className="mr-5 hover:text-gray-900"><NavLink to="/">Home</NavLink></a>
      <a className="mr-5 hover:text-gray-900"><NavLink to="/about">About</NavLink></a>
      <a className="mr-5 hover:text-gray-900"><NavLink to="/contact">Contact Us</NavLink></a>
      <a className="mr-5 hover:text-gray-900"><NavLink to="/dashboard">Dashboard</NavLink></a>
    </nav>
    <div className="flex justify-end-safe">
    {/* <button className="flex text-blue-400 bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 "><a className="mr-5 hover:text-gray-900"><NavLink to="/register">Register</NavLink></a> */}
    <a className="mr-5 hover:text-gray-900"><NavLink to="/login">Login</NavLink></a>
    <a className="mr-5 hover:text-gray-900"><NavLink to="/register">Register</NavLink></a>
   
    {/* </button> */}
    </div>
  </div>
</header>
</div>


  )
}