import React from "react";

const Footer = () => {
  const styles = {
    marginTop: "30px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000000",
    color: "white",
  };
  return (
    <div style={styles}>
      <h2>copyright 2020</h2>
    </div>
  );
};

export default Footer;