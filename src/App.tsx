
import './App.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { LandindPage } from './components/LandindPage'
import { About } from './components/About'
import { ContactUs } from './components/ContactUs'
import { Register } from './components/authorisation/Register'
import { Error } from './components/Error'
import { Login } from './components/authorisation/Login'

// import { Verification } from './components/authorisation/Verification'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <LandindPage/>
    
    },

  {
      path:'/about',
      element: <About/>
  },
  {
      path:'/contact',
      element:<ContactUs/>
  },
    {
      path:'/register',
      element: <Register/>
    },
  {
      path:'/*',
      element: <Error/>
      
    
    },

     {
      path:'\login',
      element: <Login/>
  
    }
// {
//       path:'\Verify',
//       element: <Verification/>
    
//     }

])

  return (
   <>
 
 <RouterProvider router={router}/>
  
    </> 
  )
}

export default App
