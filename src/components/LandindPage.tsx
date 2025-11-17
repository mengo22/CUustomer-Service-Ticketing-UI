import customerServiceImg from "../assets/images/customer-service.jpg"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./footer/footer"

export const LandindPage = () => {
  return (
    <div>
      <NavBar/>


      <div className="ml-3.5 mr-3.5">
        <h1 className="text-4xl mt- mb-2.5 ml-3.5 mr-3.5">Welcome to Quick Fix.</h1>
        <h2>Your all-in-one solution for effortless customer support management.</h2>
        <p>With Quick Fix , every customer inquiry becomes an organized, trackable ticket — helping your team respond faster, stay on top of requests, and deliver exceptional service every time.

Whether you’re a small business or a large enterprise, our platform is designed to simplify your support process with:
<ul className="mt-4 mb-4 ">
       <li> 1.Automated ticket creation and tracking</li>

       <li> 2.Multi-channel integration (email, chat, forms, and more)</li>

          <li> 3.Collaborative tools for teams</li>

           <li> 4.Real-time performance insights</li>
</ul>
Start transforming your customer service today...because great support shouldn’t be complicated.</p>

</div>


<div className="ml-3.5 mr-3.5">

  <img src={customerServiceImg} alt="customer-service" />

  </div>

  <Footer/>
      </div>
  )
}
