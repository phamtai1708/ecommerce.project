import "./Message.css";
import React, { useState } from "react";

function Message() {
  const [selectBtn, setSelectBtn] = useState("All");
  const handleBtnClick = (option) => {
    setSelectBtn(option);
  };
  const renderComponent = () => {
    switch (selectBtn) {
      case "All":
        return <p>All Message</p>;
      case "Unread":
        return <p>Unread Message</p>;
      case "Read":
        return <p>Read Message</p>;
      case "Deleted":
        return <p>Delete</p>;
    }
  };
  return (
    <>
      <div className="messageBox">
        <div className="messageBtn">
          <button
            className={`${selectBtn === "All" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("All")}
          >
            All Messages
          </button>
          <button
            className={`${selectBtn === "Unread" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Unread")}
          >
            Unread
          </button>
          <button
            className={`${selectBtn === "Read" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Read")}
          >
            Read
          </button>
          <button
            className={`${selectBtn === "Deleted" ? "active" : "btnNoClick"}`}
            onClick={() => handleBtnClick("Deleted")}
          >
            Deleted
          </button>
        </div>
        <div className="renderMessage">{renderComponent()}</div>
      </div>
    </>
  );
}

export default Message;
