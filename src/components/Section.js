import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Section.scss";

export class Section extends Component {
  render() {
    return (
      <div>
        <h4>Browse by category</h4>
        <ul className="section-list">
          <li>all </li>
          <li>anime</li>
          <li>action</li>
          <li>adventure</li>
          <li>science fiction</li>
          <li>comedy</li>
        </ul>
      </div>
    );
  }
}

export default Section;
