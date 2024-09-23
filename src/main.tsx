import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

// import Category from  "@app/pages/Category"
// import Home from './pages/Home.tsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/category',
//     element: <Category/>
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </React.StrictMode>,
)
