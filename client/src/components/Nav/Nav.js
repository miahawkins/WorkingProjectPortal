import React from "react";
import "./Nav.css";

const Nav = () =>
  <div className= "navbar">
    <h1>The Project Portal</h1>
    <h4>Handy helpers at work.</h4>
    <div id="nav">
      <button type="button" href="/todo" className="tabButton1">
        <p>Job Queue</p>
      </button> 
      <button type="button" className="tabButton">
        <p>Announcements</p>
      </button> 
      <button type="button" className="tabButton">
        <p>Calendar</p>
      </button> 
    </div>
  </div>;

export default Nav;