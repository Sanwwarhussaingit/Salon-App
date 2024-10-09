import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLogin from './pages/User/UserLogin.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import UserRegister from './pages/User/UserRegister.jsx';
import Login from './pages/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/userLogin",
        element: <UserLogin/>,
       
      },
      {
        path: "/userRegister",
        element: <UserRegister/>,
      },
      {
        path: "/admin",
        element: <AdminLogin/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
