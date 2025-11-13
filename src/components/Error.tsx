import { Link } from "react-router"


export const Error = () => {
  return (
    <div>
            <h1>Could not find this page.</h1>
            <p>The page you are looking for does not exist.</p>

          <Link to="/"> Go back Home </Link>
    </div>
  )
}
