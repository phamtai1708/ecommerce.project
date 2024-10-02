import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./Login.css";
import imgLogin from "../data/login_image.png";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleClickLogin = async () => {
    try {
      // Tạo đối tượng chứa dữ liệu người dùng
      const userData = {
        email: emailValue,
        password: passwordValue,
      };

      // Gửi yêu cầu POST tới API
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        userData
      );

      // Xử lý kết quả thành công từ API
      if (response.status === 200) {
        setSuccessMessage("Đăng nhập thành công!");
        setError(null); // Xóa thông báo lỗi nếu trước đó có
      }
    } catch (err) {
      // Xử lý lỗi khi gửi yêu cầu
      setError(
        err.response?.data?.message || "Đã xảy ra lỗi trong quá trình đăng ký."
      );
      setSuccessMessage(""); // Xóa thông báo thành công nếu có
    }
  };
  return (
    <>
      <Header />
      <div className="loginPage">
        <img src={imgLogin} alt="Login image" />
        <div className="loginBox">
          <p className="lgp1">Login to Exclusive</p>
          <p className="lgp2">Enter your details below.</p>
          <div className="inputLoginBox">
            <input
              type="email"
              placeholder="Your Email"
              value={emailValue}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Your Password"
              value={passwordValue}
              onChange={handleChangePassword}
            />
          </div>
          {error && <p className="errorMessage">{error}</p>}
          {successMessage && <p className="successMessage">{successMessage}</p>}
          <div className="btnLoginBox">
            <button onClick={handleClickLogin}>Login</button>
            <a href="">Forgot password?</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
