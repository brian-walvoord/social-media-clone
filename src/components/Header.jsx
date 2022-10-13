import "../styles/header.css";
import React from "react";

export const Header = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <img className="header-img" src="logo192.png"></img>
      <h1 className="header-text">This is a social media clone, using React!</h1>
      <img className="header-img" src="logo192.png"></img>
    </div>
  )
}