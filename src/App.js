// import './App.css';
import React from "react";
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/LogOut";
import ProductDetails from "./components/Products/ProductDetails";
import 'antd/dist/reset.css';
import MyLayout from "./components/Router/MyLayout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
// import ProtectedRoute from "./components/Router/protectedRoute";

function App() {
  
  return (
    <BrowserRouter>
      <MyLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </MyLayout>
      < ToastContainer position="bottom-right"/>
    </BrowserRouter>
  );
}

export default App;
