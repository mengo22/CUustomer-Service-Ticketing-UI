import aboutImg from "../assets/images/about img.jpg"
import { NavBar } from "./nav/NavBar"

export const About = () => {
  return (
    <div>
     <NavBar/> 

  <div>
<h1 className="text-5xl mb-2.5 ml-2">About Us</h1>
<p>Welcome to our Customer Service Ticketing System — your centralized hub for seamless support and efficient issue resolution.

We believe that great customer service starts with clarity, speed, and accountability.
 Our platform is designed to empower teams to manage inquiries, track progress, and deliver timely solutions with confidence.</p>

<h2 className="text-3xl mt-2 mb-1">What We Offer :</h2>
<p>
<ul>

     <li> - Streamlined Ticket Management: Easily create, assign, and track support requests from start to finish.</li>
          <li> - Real-Time Updates: Stay informed with instant notifications and status changes.</li>
           <li> - Collaborative Workflows: Enable teams to communicate, share insights, and resolve issues faster.</li>
              <li> - Analytics & Reporting: Gain insights into performance, response times, and customer satisfaction.</li>
</ul>


</p>

</div>


<div className="m-3.5 
flex justify-center w-2/5 h-1/4">
  <img src={aboutImg} alt="about us Img" />
  </div>

    </div>
  )
}
