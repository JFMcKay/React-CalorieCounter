import React from "react";

const Message = ({ type }) => {
  const messages = {
    needItem: "Please enter an Item",
    needCalories: "Please enter a number for calories!",
    deleted: "Post has been deleted.",
    edited: "Post has been edited",
  };
  return (
    <div className={`App-message ${type}`}>
      <p className="container">
        <strong>{messages[type]}</strong>
      </p>
    </div>
  );
};

export default Message;
