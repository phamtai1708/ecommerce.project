import "./Income.css";

function Income() {
  return (
    <>
      <div className="incomeBox">
        <p className="ic1">
          Income Overview <span class="material-symbols-outlined">help</span>
        </p>
        <div className="dashboardProfit">
          <div className="valueBox">
            <p className="vlbp1">Orders Finished</p>
            <p className="vlbp2">1.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Products</p>
            <p className="vlbp2">2.345</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Total Income</p>
            <p className="vlbp2">12.3M</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Output Costs</p>
            <p className="vlbp2">8.9M</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Profit</p>
            <p className="vlbp2">3.4M</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
        </div>
        <div className="chartBox"></div>
        <div className="statisticalBox">
          <p className="ic1">Details Statical</p>
          <div className="listRender"></div>
          <p className="ic1">Output Costs</p>
          <div className="listRender"></div>
        </div>
      </div>
    </>
  );
}

export default Income;
