import { Footer } from "../footer/Footer"
import { NavBar } from "../nav/NavBar"


export const Login = () => {
  return (
    <div>
      <NavBar/>

    <div className="card w-full max-w-sm shrink-0 shadow-2xl border-2 mx-auto mt-10 bg-blue-400 mb-10">
      <div className="card-body">
        <fieldset className="fieldset">
           <label className="label  text-white">Email</label>
           <input type="email" className="input" placeholder="Email" />
           <label className="label  text-white">Password</label>
           <input type="password" className="input" placeholder="Password" />
           <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
  
      
      <Footer/>
      </div>
  )
}
