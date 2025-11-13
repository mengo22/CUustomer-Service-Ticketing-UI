import customerServiceImg from "../assets/images/customer-service.jpg"
import { NavBar } from "./nav/NavBar"

export const LandindPage = () => {
  return (
    <div>
      <NavBar/>
        <h1>Welcome to Quick Fix.</h1>
        <h2>Your all-in-one solution for effortless customer support management.</h2>
        <p>With Quick Fix , every customer inquiry becomes an organized, trackable ticket — helping your team respond faster, stay on top of requests, and deliver exceptional service every time.

Whether you’re a small business or a large enterprise, our platform is designed to simplify your support process with:
<ul>
       <li>Automated ticket creation and tracking</li>

       <li>Multi-channel integration (email, chat, forms, and more)</li>

          <li>Collaborative tools for teams</li>

           <li>Real-time performance insights</li>
</ul>
Start transforming your customer service today...because great support shouldn’t be complicated.</p>
<div>

  <img src={customerServiceImg} alt="customer-service" />

  </div>
      </div>
  )
}
