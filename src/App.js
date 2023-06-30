import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityCard from "./components/Community";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Pricing/Subscription";
import Pricing from "./pages/Pricing/Pricing";
import PlanBlock from "./pages/Pricing/PlanBlock";
import CartItems from "./pages/Cart/CartItems";
import PricingAlt from "./pages/Pricing/PricingAlt";
import TestPage from "./components/TestPage";
import Payment from "./pages/Payment/Payment";
 
const App = () => {
 return (
   <>
     <Navbar />
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<CommunityCard />} />
       <Route exact path="/signup" element={<Signup />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/subs" element={<Subscription />} />
       <Route exact path="/pricing" element={<Pricing />} />
       <Route exact path="/pricingalt" element={<PricingAlt />} />
       <Route exact path="/plan" element={<PlanBlock />} />
       <Route exact path="/cartitems" element={<CartItems />} />
       <Route exact path="/payment" element={<Payment />} />
       <Route exact path="/test" element={<TestPage />} />
     </Routes>
      </BrowserRouter>
   </>
 );
};
 
export default App;