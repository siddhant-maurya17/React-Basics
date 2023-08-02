import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
const Navbar=()=>{

    return <div className="navbar">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink> 
      <NavLink to="/about">About</NavLink> 
      <NavLink to="/contact">Contact</NavLink> 
      {/* a href will relad the page that's why we not used */}
      {/* <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
    </div>
}


export default Navbar;