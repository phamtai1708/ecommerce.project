import "./MyProfile.css";

function MyProfile() {
  return (
    <>
      <div className="profileBox">
        <p className="pfp1">My Profile</p>
        <div className="pfName">
          <div className="pfd1">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="Tai" />
          </div>
          <div className="pfd1">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Pham" />
          </div>
        </div>
        <div className="pfName">
          <div className="pfd1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="phamtai.tind46@gmail.com"
            />
          </div>
          <div className="pfd1">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Ngo 637, Truong Dinh, Thinh Liet, Hoang Mai, Ha Noi"
            />
          </div>
        </div>
        <div className="pfName">
          <div className="pfd1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="********" />
          </div>
        </div>
        <p className="pfp2">My Infomation</p>
        <div className="infoBox">
          <div className="pfd2">
            <label htmlFor="gender">Gender:</label>
            <input type="text" name="gender" placeholder="Nam" />
          </div>
          <div className="pfd2">
            <label htmlFor="height">Height(cm):</label>
            <input type="text" name="height" placeholder="165" />
          </div>
          <div className="pfd2">
            <label htmlFor="weight">Weight(kg):</label>
            <input type="text" name="weight" placeholder="76" />
          </div>
        </div>
        <p className="pfp2">My Favorite</p>
        <div className="favoriteList">
          <p>Polo shirt</p>
          <p>Shorts</p>
          <p>Glasses</p>
          <p>Games</p>
          <p>Technology</p>
        </div>
        <div className="btnProfile">
          <button className="btnCancel">Cancel</button>
          <button className="btnChange">Change</button>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
