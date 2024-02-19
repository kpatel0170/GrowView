import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Currency from "./pages/Currency";


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
 
const App = () => {
 return (
   <>
     {/* <Navbar /> */}
     <BrowserRouter>
     <Routes>
     <Route exact path="/signup" element={<Signup />} />
       <Route exact path="/login" element={<Login />} />
     <Route path='/' element={<Layout />}>
       <Route exact path="/currency" element={<Currency />} />
      </Route>
     </Routes>
      </BrowserRouter>
   </>
 );
};
 
export default App;