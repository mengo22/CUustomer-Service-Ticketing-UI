import { Link } from "react-router"


export const Error = () => {
  return (
    <div>
            <h1>Could not find this page.</h1>
            <p>The page you are looking for does not exist.</p>

       <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><Link to="/"> Go back Home </Link></button>
    </div>
  )
}
