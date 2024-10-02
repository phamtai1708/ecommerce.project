import { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";

function User() {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/users");
        setAllUser(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <div className="userBox">
        <p className="od1">
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
        <div className="statisticalBox">
          <p className="od1">Total Users</p>
          <div className="listRender">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.userId}</td>
                    <td>
                      {item.firstName} {item.lastName}
                    </td>{" "}
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
