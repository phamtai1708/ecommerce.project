import "./Order.css";

function Order() {
  return (
    <>
      <div className="orderBox">
        <p className="od1">
          Orders <span class="material-symbols-outlined">help</span>
        </p>
        <div className="dashboardProfit">
          <div className="valueBox">
            <p className="vlbp1">Total Orders</p>
            <p className="vlbp2">2.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Processing Orders</p>
            <p className="vlbp2">345</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Cancelled Orders</p>
            <p className="vlbp2">64</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Finished Orders</p>
            <p className="vlbp2">1.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
        </div>
        <div className="statisticalBox">
          <p className="od1">Total Orders</p>
          <div className="listRender"></div>
        </div>
      </div>
    </>
  );
}

export default Order;
