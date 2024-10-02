import { useState } from "react";
import imgQRCODE from "../data/QrCode.png";
import imgCHPlay from "../data/chplayicon.png";
import imgAppStore from "../data/appstoreicon.png";
import iconFacebook from "../data/IconFacebook.png";
import iconTwitter from "../data/IconTwitter.png";
import iconInstagram from "../data/IconInstagram.png";
import iconLinkedIn from "../data/IconLinkedIn.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logoAndSub">
          <div>
            <p className="p1">Exclusive</p>
            <p>Subscribe</p>
            <p>Get 10% your first order</p>
          </div>
          <div className="inputEmailBox">
            <input type="text" placeholder="Enter your email" />
            <span className="material-symbols-outlined">send</span>
          </div>
        </div>
        <div className="supportBox">
          <p className="p1">Support</p>
          <div>
            <p>
              Số nhà 27/637 đường Trương Định,
              <br /> Thịnh Liệt, Hoàng Mai, Hà Nội
            </p>
            <p>phamtai.tind46@gmail.com</p>
            <p>(+84)946-969-965</p>
          </div>
        </div>
        <div className="accountBox">
          <p className="p1">Account</p>
          <div>
            <a className="a1" href="">
              My account
            </a>
            <a className="a1" href="">
              Login/Register
            </a>
            <a className="a1" href="">
              Cart
            </a>
            <a className="a1" href="">
              Wishlist
            </a>
            <a className="a1" href="">
              Shop
            </a>
          </div>
        </div>
        <div className="quickLinkBox">
          <p className="p1">Quick Link</p>
          <div>
            <a className="a1" href="">
              Privacy Policy
            </a>
            <a className="a1" href="">
              Terms of use
            </a>
            <a className="a1" href="">
              FAQs
            </a>
            <a className="a1" href="">
              Contact
            </a>
          </div>
        </div>
        <div className="appBox">
          <p className="p1">Download App</p>
          <div className="qrBox">
            <p>Save $3 with App New User Only</p>
            <div className="qrAndDownload">
              <img src={imgQRCODE} alt="qr code to download app" />
              <div className="downloadBox">
                <button className="btnCHplay">
                  <img src={imgCHPlay} alt="icon CHplay" />
                </button>
                <button className="btnAppStore">
                  <img src={imgAppStore} alt="icon App Store" />
                </button>
              </div>
            </div>
            <div className="socialBox">
              <button className="btnSocial">
                <img src={iconFacebook} alt="icon Facebook" />
              </button>
              <button className="btnSocial">
                <img src={iconTwitter} alt="icon twitter" />
              </button>
              <button className="btnSocial">
                <img src={iconInstagram} alt="icon instagram" />
              </button>
              <button className="btnSocial">
                <img src={iconLinkedIn} alt="icon linkedIn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
