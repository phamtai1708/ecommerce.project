import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import SupportBox from "../components/SupportBox.jsx";
import "./ProductInfo.css";
import "./Color.css";
import "./Size.css";
import { useLocation, useParams } from "react-router-dom";

function ProductInfo() {
  const { productId } = useParams();
  const location = useLocation();
  const { item } = location.state;
  // Relate Product

  const [mainImg, setMainImg] = useState(item.images[0]);
  function clickImage(xxx) {
    setMainImg(item.images[xxx]);
  }
  const updateMainImage = (aaa) => {
    setMainImg(aaa);
  };
  //Tạo dữ liệu color
  const listColors = item.colors.split(" ");
  const listSizes = item.sizes.split(" ");

  const [count, setCount] = useState(1);
  function prvCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function nextCount() {
    setCount(count + 1);
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/products"
        );
        // Lấy 8 sản phẩm đầu tiên

        const newData = response.data.data.slice(0, 8);
        setProducts(newData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="productInfo">
        <div className="productImage">
          <div className="listImage">
            {item.images.map((image, index) => (
              <img
                src={image}
                alt={index}
                onClick={() => clickImage(index)}
                key={index}
              />
            ))}
          </div>
          <div className="mainImg">
            <img src={mainImg} alt={item.productName} />
          </div>
        </div>
        <div className="productDetail">
          <p className="productName">{item.productName}</p>
          <p className="productStar">Star: {item.star}</p>
          <p className="minPrice">
            {item.min_price}đ{" "}
            <span className="maxPrice">{item.max_price}đ</span>
          </p>
          <p className="productDescription">Description: {item.description}</p>
          <p>Color: {item.colors}</p>
          <div className="listColors">
            {listColors.map((color, index) => (
              <button className={color} key={index}></button>
            ))}
          </div>
          <div className="listSizes">
            {listSizes.map((size, index) => (
              <button className={size} key={index}>
                {size}
              </button>
            ))}
          </div>
          <div className="productBox">
            <div className="volume">
              <span className="material-symbols-outlined" onClick={prvCount}>
                remove
              </span>
              <p>{count}</p>
              <span className="material-symbols-outlined" onClick={nextCount}>
                add
              </span>
            </div>
            <button className="btnBuyNow">Buy Now</button>
            <button className="btnFavorit">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
      </div>
      <p className="relatedItem"> Related Item</p>
      <div className="flsProduct">
        {products.slice(0, 4).map((item) => (
          <Card
            item={item}
            key={item.productId}
            onClick={() => updateMainImage(item.images[0])}
          />
        ))}
      </div>
      <div className="flsProduct">
        {products.slice(4, 8).map((item) => (
          <Card
            item={item}
            key={item.productId}
            onClick={() => updateMainImage(item.images[0])}
          />
        ))}
      </div>
      <SupportBox />
      <Footer />
    </>
  );
}

export default ProductInfo;
