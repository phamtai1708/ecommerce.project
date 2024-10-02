import { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ item, onClick }) {
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(`/product/${item.productId}`, { state: { item } });
    if (onClick) {
      onClick(item.images[0]);
    }
  };
  return (
    <>
      <div className="productCard" onClick={handleClickCard}>
        <div className="imgBox">
          <img src={item.images[0]} alt={item.productName} />
          <div className="productBtn">
            <button className="btnFavorite">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="btnAddToCart">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
        <p className="nameProduct">{item.productName}</p>
        <p className="category">{item.category}</p>
        <div className="price">
          <p className="minPrice">{item.min_price} đ</p>
          <p className="maxPrice">{item.max_price}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
