import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./Register.css";
import imgRegister from "../data/login_image.png";
import imgBtnGoogle from "../data/IconGoogle.png";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleClickRegister = async () => {
    try {
      // Tạo đối tượng chứa dữ liệu người dùng
      const userData = {
        userName: nameValue,
        email: emailValue,
        password: passwordValue,
      };

      // Gửi yêu cầu POST tới API
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        userData
      );

      // Xử lý kết quả thành công từ API
      if (response.status === 200) {
        setSuccessMessage("Tạo tài khoản thành công!");
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
      <div className="registerPage">
        <img src={imgRegister} alt="Register image" />
        <div className="registerDetails">
          <p className="rgp1">Create an account</p>
          <p className="rgp2">Enter your details below</p>
          <div className="inputDetailsBox">
            <input
              type="text"
              placeholder="Enter your full name"
              value={nameValue}
              onChange={handleChangeName}
            />
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
          <button className="btnCreate" onClick={handleClickRegister}>
            Create account
          </button>
          <br />
          <button className="btnLoginWithGG">
            <img src={imgBtnGoogle} alt="icon google" />
            Sign up with google
          </button>
          <p className="rgp3">
            Already have an account? <a href="">Login</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
