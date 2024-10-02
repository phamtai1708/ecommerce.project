import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Account from "./account/Account";
import Home from "./home/Home.jsx";
import Admin from "./adpage/Admin.jsx";
import ProductInfo from "./productinfo/ProductInfo.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:productId" element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
