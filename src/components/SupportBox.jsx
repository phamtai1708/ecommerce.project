import "./SupportBox.css";
import imgDelivery from "../data/icondelivery.png";
import imgSupportService from "../data/iconsupport.png";
import imgBackMoney from "../data/Iconsecure.png";
function SupportBox() {
  return (
    <>
      <div className="supportBox2">
        <div className="serviceBox2">
          <button className="btnBox">
            <img src={imgDelivery} alt="iconDelivery" />
          </button>
          <p className="sp1">FREE AND FAST DELIVERY</p>
          <p className="sp2">Free delivery for all orders over $140 </p>
        </div>
        <div className="serviceBox2">
          <button className="btnBox">
            <img src={imgSupportService} alt="icon Support Service" />
          </button>
          <p className="sp1">24/7 CUSTOMER SERVICE</p>
          <p className="sp2">Friendly 24/7 customer support</p>
        </div>
        <div className="serviceBox2">
          <button className="btnBox">
            <img src={imgBackMoney} alt="icon Back Money Service" />
          </button>
          <p className="sp1">MONEY BACK GUARANTEE</p>
          <p className="sp2">We return money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default SupportBox;
