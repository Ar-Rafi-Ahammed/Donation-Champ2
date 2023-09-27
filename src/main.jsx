import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import './index.css'
import MyCreatedRouter from './Router/Router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
