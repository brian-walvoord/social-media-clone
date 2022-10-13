import "../styles/picture.css"
import React from "react";

export const Picture = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <img className="picture-img" src="logo512.png"></img>
    </div>
  )
}