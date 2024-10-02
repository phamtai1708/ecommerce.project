import "./Admin.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Order from "./order/Order.jsx";
import User from "./user/User.jsx";
import Product from "./products/Product.jsx";
import Income from "./income/Income.jsx";
import Myshop from "./myshop/Myshop.jsx";
import Message from "./message/Message.jsx";
import React, { useState } from "react";

function Admin() {
  const [selectOption, setSelectOption] = useState("Dashboard");
  const handleOptionClick = (option) => {
    setSelectOption(option);
  };
  const renderComponent = () => {
    switch (selectOption) {
      case "Dashboard":
        return <Dashboard />;
      case "Income":
        return <Income />;
      case "Order":
        return <Order />;
      case "User":
        return <User />;
      case "Product":
        return <Product />;
      case "Shop":
        return <Myshop />;
      case "Message":
        return <Message />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <>
      <Header />
      <div className="adminPage">
        <div className="optionAdmin">
          <p
            className={`${selectOption === "Dashboard" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Dashboard")}
          >
            <span className="material-symbols-outlined">dashboard</span>{" "}
            Dashboard
          </p>
          <p
            className={`${selectOption === "Income" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Income")}
          >
            <span className="material-symbols-outlined">paid</span> Income
          </p>
          <p
            className={`${selectOption === "Order" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Order")}
          >
            <span className="material-symbols-outlined">local_mall</span> Orders
          </p>
          <p
            className={`${selectOption === "Product" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Product")}
          >
            <span className="material-symbols-outlined">package_2</span>{" "}
            Products
          </p>
          <p
            className={`${selectOption === "User" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("User")}
          >
            <span className="material-symbols-outlined">manage_accounts</span>{" "}
            Users
          </p>
          <p
            className={`${selectOption === "Shop" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Shop")}
          >
            <span className="material-symbols-outlined">storefront</span> My
            Shop
          </p>
          <p
            className={`${selectOption === "Message" ? "active" : "adp1"}`}
            onClick={() => handleOptionClick("Message")}
          >
            <span className="material-symbols-outlined">Mail</span> Message
          </p>
        </div>
        <div className="adBox">{renderComponent()}</div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
