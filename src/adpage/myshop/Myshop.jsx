import "./Myshop.css";
import React, { useState } from "react";

function Myshop() {
  const [selectBtn, setSelectBtn] = useState("Categories");
  const handleBtnClick = (option) => {
    setSelectBtn(option);
  };
  const renderComponent = () => {
    switch (selectBtn) {
      case "Categories":
        return <p>Categories</p>;
      case "Products":
        return <p>Products</p>;
      case "Posts":
        return <p>Posts</p>;
      case "Comments":
        return <p>Comments</p>;
    }
  };
  return (
    <>
      <div className="myshopBox">
        <div className="detailShop">
          <button
            className={`${
              selectBtn === "Categories" ? "active" : "btnNoClick"
            }`}
            onClick={() => handleBtnClick("Categories")}
          >
            Categories
          </button>
          <button
            className={`${selectBtn === "Products" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Products")}
          >
            Products
          </button>
          <button
            className={`${selectBtn === "Posts" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Posts")}
          >
            Posts
          </button>
          <button
            className={`${selectBtn === "Comments" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Comments")}
          >
            Comments
          </button>
        </div>
        <div className="renderShop">{renderComponent()}</div>
      </div>
    </>
  );
}

export default Myshop;
