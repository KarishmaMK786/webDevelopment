import React from 'react';
import "../styles/header.css";
import {Link} from "react-router-dom";

function Heading() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    
    </nav>
  )
}

export default Heading