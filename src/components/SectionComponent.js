import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Section.scss";

export class SectionComponent extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="category">
          <h4 className="section">Browse by category</h4>
          <ul className="section-list">
            <li>all </li>
            <li>anime</li>
            <li>action</li>
            <li>adventure</li>
            <li>science fiction</li>
            <li>comedy</li>
          </ul>
        </div>
        <div className="wrapper">
          <div className="card">
            <Link to="/detailpage">
              <img
                className="img-card"
                src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
                alt="/"
              />
            </Link>
          </div>
          <div className="card">
            <img
              className="img-card"
              src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
              alt="/"
            ></img>
          </div>
          <div className="card">
            <img
              className="img-card"
              src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
              alt="/"
            ></img>
          </div>
          <div className="card">
            <img
              className="img-card"
              src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
              alt="/"
            ></img>
          </div>
          <div className="card">
            <img
              className="img-card"
              src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
              alt="/"
            ></img>
          </div>
          <div className="card">
            <img
              className="img-card"
              src="https://m.media-amazon.com/images/M/MV5BMDIxNTdhYzUtNGY3My00MTljLTlmNTctODA5MjAzN2JlN2Y3XkEyXkFqcGdeQXVyMTgyOTQ3ODM@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
              alt="/"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionComponent;
