
import './App.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { LandindPage } from './components/LandindPage'
import { About } from './components/About'
import { ContactUs } from './components/ContactUs'
import { Register } from './components/Register'
import { Error } from './components/Error'
import { Login } from './components/Login'
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

])

  return (
   <>
 
 <RouterProvider router={router}/>
  
    </> 
  )
}

export default App
