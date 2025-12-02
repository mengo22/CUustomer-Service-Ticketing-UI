import { Footer } from "../footer/Footer"
import { NavBar } from "../nav/NavBar"


export const Register = () => {
  return (
    <div>
      <NavBar/>

    <div className="card w-full max-w-sm shrink-0 shadow-2xl border-2 mx-auto mt-10 bg-blue-400 mb-10">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label text-white">First Name </label>
          <input type="name" className="input" placeholder="First Name" />
           <label className="label  text-white">Last Name</label>
          <input type="name" className="input" placeholder="Last Name" />
           <label className="label  text-white">Phone No.</label>
          <input type="integer" className="input" placeholder="Phone No." />
           <label className="label  text-white">Email</label>
          <input type="email" className="input" placeholder="Email" />
           <label className="label  text-white">Set Password</label>
          <input type="password" className="input" placeholder=" New Password" />
            <label className="label  text-white">Confirm Password</label>
          <input type="password" className="input" placeholder=" Confirm Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
  
      
      <Footer/>
      </div>
  )
}
