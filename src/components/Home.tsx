import customerServiceImg from "../assets/images/customer-service.jpg"

export const Home = () => {
  return (
   
     <div className="ml-3.5 mr-3.5 inline-block mt-4 mb-4">
        <h1 className=" flex justify-center items-center text-4xl mt-4 mb-4 ml-3.5 mr-3.5 font-bold ">Welcome to Quick Fix.</h1>
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex-1 pr-4">
            <h2>Your all in one solution for effortless customer support management.</h2>
            <p>With Quick Fix , every customer inquiry becomes an organized, trackable ticket helping your team respond faster, stay on top of requests, and deliver exceptional service every time.

Whether you’re a small business or a large enterprise, our platform is designed to simplify your support process with:
<ul className="mt-4 mb-4 ">
       <li> 1.Automated ticket creation and tracking</li>

       <li> 2.Multi-channel integration (email, chat, forms, and more)</li>

          <li> 3.Collaborative tools for teams</li>

           <li> 4.Real-time performance insights</li>
</ul>
Start transforming your customer service today...because great support shouldn’t be complicated.</p>
          </div>
          <div className="flex-1 border- 0 outline-none">
            <img src={customerServiceImg} alt="customer-service" className="max-w-sm h-auto rounded-lg shadow-md mx-auto" />
          </div>
        </div>
  </div>
  
    
  )
}
 