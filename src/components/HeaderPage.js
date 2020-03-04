import React, { Component } from "react";
import "../style/HeaderPage.scss";
import { Link } from "react-router-dom";

export class HeaderPage extends Component {
  render() {
    return (
      <div className="header">
        <h1>SAHTA TV</h1>
        <input type="text" name="text" placeholder="search movie" />
        <button>search</button>
        <a href="#/">SIGN IN</a>
      </div>
    );
  }
}

export default HeaderPage;
