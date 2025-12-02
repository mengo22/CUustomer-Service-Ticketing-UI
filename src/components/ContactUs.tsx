import { Footer } from "./footer/Footer"
import { NavBar } from "./nav/NavBar"
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa"


export const ContactUs = () => {
  return (
    <div>
        <NavBar/>

     <h1 className="text-4xl text-center  mt-10 font-bold"> How to reach us</h1> 
     <h2 className="flex justify-center items-center mt-10 text-2xl">Find us on our social media platforms: </h2>
    
  <h2 className="flex justify-center items-center  mt-5 mb-10"> 
    <section className="flex justify-center items-center mt-5 mb-10"> 
    <ul className="space-y-3 text-lg">
      <li className="flex items-center gap-3">
        <FaTwitter className="text-sky-400" size={20} aria-hidden="true" />
        <span>Twitter: <a href="https://twitter.com/QuickFixSupport" target="_blank" rel="noopener noreferrer" className="hover:underline">@QuickFixSupport</a></span>
      </li>
      <li className="flex items-center gap-3">
        <FaFacebookF className="text-blue-700" size={20} aria-hidden="true" />
        <span>Facebook: <a href="https://facebook.com/QuickFixHelp" target="_blank" rel="noopener noreferrer" className="hover:underline">@QuickFixHelp</a></span>
      </li>
      <li className="flex items-center gap-3">
        <FaLinkedinIn className="text-blue-600" size={20} aria-hidden="true" />
        <span>LinkedIn: <a href="https://www.linkedin.com/company/quickfix-solutions" target="_blank" rel="noopener noreferrer" className="hover:underline">QuickFix Solutions</a></span>
      </li>
      <li className="flex items-center gap-3">
        <FaEnvelope className="text-gray-700" size={20} aria-hidden="true" />
        <span>Email us directly at: <a href="mailto:quickfix@gmail.com" className="hover:underline">quickfix@gmail.com</a></span>
      </li>
    </ul>
  </section>
  </h2>
<Footer/>
      </div>
  )
}
