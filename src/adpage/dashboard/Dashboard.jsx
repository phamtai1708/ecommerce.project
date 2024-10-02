import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboardBox">
        <p className="dbp1">
          Income Overview{" "}
          <span className="material-symbols-outlined">help</span>
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
        <p className="dbp1">
          Orders <span className="material-symbols-outlined">help</span>
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
        <p className="dbp1">
          Products <span className="material-symbols-outlined">help</span>
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
        <p className="dbp1">
          Users <span className="material-symbols-outlined">help</span>
        </p>
        <div className="dashboardProfit">
          <div className="valueBox">
            <p className="vlbp1">Total Users</p>
            <p className="vlbp2">10.234</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">New Users</p>
            <p className="vlbp2">345</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Recently Users</p>
            <p className="vlbp2">64</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
          <div className="valueBox">
            <p className="vlbp1">Active Users</p>
            <p className="vlbp2">24</p>
            <p className="vlbp3">Vs last month: </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
