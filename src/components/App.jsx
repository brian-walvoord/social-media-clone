import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Header } from "./Header.jsx";
import { Picture } from "./Picture.jsx"

export default function App() {
  return (
    <div>
      <Header className="header"/>
      <Picture className="picture"/>
    </div>
  );
}