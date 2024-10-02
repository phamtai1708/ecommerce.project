import "./Product.css";

function Product() {
  return (
    <>
      <div className="productBox">
        <p className="od1">
          Product <span className="material-symbols-outlined">help</span>
        </p>
        <div className="dashboardProfit">
          <div className="valueBox">
            <p className="vlbp1">Total Products</p>
            <p className="vlbp2">3.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Processing Products</p>
            <p className="vlbp2">345</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Cancelled Products</p>
            <p className="vlbp2">64</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Finished Products</p>
            <p className="vlbp2">1.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
        </div>
        <div className="statisticalBox">
          <p className="od1">Total Products</p>
          <div className="listRender"></div>
        </div>
      </div>
    </>
  );
}

export default Product;
