import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SupportBox from "../components/SupportBox.jsx";
import Fame1 from "../data/Frame560.png";
import Fame2 from "../data/Frame597.png";
import Fame3 from "../data/Frame600.png";
import Fame4 from "../data/Frame739.png";
import Card from "../components/Card.jsx";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [productsFLS, setProductsFLS] = useState([]);
  const [coutFls, setCoutFls] = useState(0);

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

  useEffect(() => {
    const xxx = products.slice(coutFls, coutFls + 4);
    setProductsFLS(xxx);
  }, [coutFls]);
  function clickBackFLS() {
    if (coutFls > 0) {
      setCoutFls(coutFls - 1);
    }
  }
  function clickNextFLS() {
    if (coutFls < 4) {
      setCoutFls(coutFls + 1);
    }
  }
  return (
    <>
      <Header />
      <div className="homePage">
        <div className="listShop">
          <div className="listShopBox">
            <p>Woman's Fashion</p>
            <p>Men's Fashion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sport & Outdoor</p>
            <p>Baby's & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div>
            <img src={Fame1} alt="" />
          </div>
        </div>
        <div className="flashSale">
          <div className="fsBox1">
            <div>
              <p className="today">Today's</p>
              <p className="flashsale">Flash Sale</p>
            </div>
            <div className="timeCoutdown">
              <div className="tcd1">
                <p className="tcdp1">Days</p>
                <p className="tcdp2">3</p>
              </div>
              <div className="tcd1">
                <p className="tcdp1">Hours</p>
                <p className="tcdp2">23</p>
              </div>
              <div className="tcd1">
                <p className="tcdp1">Minutes</p>
                <p className="tcdp2">19</p>
              </div>
              <div className="tcd1">
                <p className="tcdp1">Seconds</p>
                <p className="tcdp2">56</p>
              </div>
            </div>
          </div>
          <div className="fsBtn">
            <button onClick={clickBackFLS}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={clickNextFLS}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="flsProduct">
          {productsFLS.map((item) => (
            <Card item={item} key={item.productId} />
          ))}
        </div>
        <div className="flashSale">
          <div className="fsBox1">
            <div>
              <p className="today">Categories</p>
              <p className="flashsale">Browse By Category</p>
            </div>
          </div>
          <div className="fsBtn">
            <button>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <img src={Fame2} alt="fd" />
        <div className="flashSale">
          <div className="fsBox1">
            <div>
              <p className="today">This month</p>
              <p className="flashsale">Best Selling Products</p>
            </div>
          </div>
          <div className="fsBtn">
            <button onClick={clickBackFLS}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={clickNextFLS}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="flsProduct">
          {productsFLS.map((item) => (
            <Card item={item} key={item.productId} />
          ))}
        </div>
        <img src={Fame3} alt="fdsf" />
        <div className="flashSale">
          <div className="fsBox1">
            <div>
              <p className="today">Our Products</p>
              <p className="flashsale">Explore Our Products</p>
            </div>
          </div>
          <div className="fsBtn">
            <button>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="flsProduct">
          {products.slice(0, 4).map((item) => (
            <Card item={item} key={item.productId} />
          ))}
        </div>
        <div className="flsProduct">
          {products.slice(4, 8).map((item) => (
            <Card item={item} key={item.productId} />
          ))}
        </div>
        <div className="flashSale">
          <div className="fsBox1">
            <div>
              <p className="today">Featured</p>
              <p className="flashsale">New Arrivals</p>
            </div>
          </div>
        </div>
        <img src={Fame4} alt="fdsf" />
      </div>
      <SupportBox />
      <Footer />
    </>
  );
}

export default Home;
