import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MyProfile from "./profile/MyProfile.jsx";
import "./Account.css";

function Account() {
  return (
    <>
      <Header />
      <div className="accountPageBox">
        <div className="accountMenu">
          <p className="acp1">Manage My Account</p>
          <p className="acp2">My Profile</p>
          <p className="acp2">My Address Book</p>
          <p className="acp2">My Payment Options</p>
          <p className="acp1">My Orders</p>
          <p className="acp2">My Returns</p>
          <p className="acp2">My Cancellations</p>
          <p className="acp1">Finish Jobs</p>
        </div>
        <div className="infoRender">
          <MyProfile />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
