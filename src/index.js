import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Singleblog from './Pages/Singleblog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
  path:"/",
  element:<Home/>
    },
{
  path:"/blogs",
  element:<Blogs/>
},
{
  path:"/about",
  element:<About/>
},
{
  path:"/services",
  element:<Services/>
},{
  path:"/contact",
  element:<Contact/>
},
{
  path:"/blogs/:id",
  element:<Singleblog/>,
  loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
}
  ]
  }
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
