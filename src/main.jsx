import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Error from "./pages/Error.jsx";
import Testimonials from './pages/Testimonials.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'projects',
        element:<Projects />
      },
      {
        path:'aboutme',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'skills',
        element:<Skills/>
      },
      {
        path:'testimonials',
        element:<Testimonials/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
