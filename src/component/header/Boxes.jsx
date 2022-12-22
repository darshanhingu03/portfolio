import React from "react";

const BoxesDetails = ({ data }) => {
  const { user, text } = data;
  return (
    <div className="b-boxes">
      <span>{user}</span>
      <br />
      <span>{text}</span>
    </div>
  );
};

export default BoxesDetails;
