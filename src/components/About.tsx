import aboutImg from "../assets/images/about img.jpg"
import { Footer } from "./footer/Footer"
import { NavBar } from "./nav/NavBar"

export const About = () => {
  return (
    <div>
     <NavBar/> 

  <div className="ml-3.5 mr-3.5">
    
    <div className="flex flex-row flex-wrap items-start">
      
      <div className="flex-1 pr-4">
        <h1 className=" flex items-center text-4xl mb-4 mt-4 ml-3.5  font-bold">About Us</h1>
        <p>Welcome to our Customer Service Ticketing System  your centralized hub for seamless support and efficient issue resolution.
              We believe that great customer service starts with clarity, speed, and accountability.
               Our platform is designed to empower teams to manage inquiries, track progress, and deliver timely solutions with confidence.</p>

        <h2 className=" text-3xl mt-4 mb-4  font-bold">What We Offer :</h2>
        <p>
        <ul>

             <li> - Streamlined Ticket Management: Easily create, assign, and track support requests from start to finish.</li>
                  <li> - Real-Time Updates: Stay informed with instant notifications and status changes.</li>
                   <li> - Collaborative Workflows: Enable teams to communicate, share insights, and resolve issues faster.</li>
                      <li> - Analytics & Reporting: Gain insights into performance, response times, and customer satisfaction.</li>
        </ul>


        </p>
      </div>
      <div className="flex-1">
        <img src={aboutImg} alt="about us Img" className="max-w-sm h-auto rounded-lg shadow-md mx-auto" />
      </div>
    </div>
  </div>
<Footer/>
    </div>
  )
}
