import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./1-Navigation";
import About from "./2-About";
import Booking from "./3-Booking";
import Services from "./4-Services";



const App = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('token')) || null);
  const [userID, setUserID] = useState('');

  const handleLogin = (email, password) => {    
    console.log(email, password);
    return axios.post('/api/users/login', {email, password})
    .then(response => response.data.data)
    .then(token => {      
      setUserID(token.id);
      localStorage.setItem('token',JSON.stringify(token))
      setCurrentUser(token);
    });
  
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <HomeLayout> <Error /> </HomeLayout>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
      ] 
    }, 
    {
      path: "/login",
      element: currentUser ? <Navigate to="/account/dashboard" /> : <Login onLogin={handleLogin}  />
    },
    {
      path: "/logout",
      element: <Login onLogin={handleLogin} />,
    },  
    {
      element: <Layout  handleLogout = {handleLogout}/>,
      children: [
        {
          path: "/account/dashboard",
          element: currentUser? <Dashboard userID={userID}/> : <Navigate to="/login" />
        },
        {
          path: "/account/exercises",
          element: currentUser ? <Exercises userID={userID}/> : <Navigate to="/login" />,
        },
        {
          path: "/account/about",
          element:  currentUser ? <About userID={userID}/> : <Navigate to="/login" />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;