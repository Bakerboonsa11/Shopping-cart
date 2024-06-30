import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page_routes/home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
