import React, { Component } from "react";
import "../style/OverviewPage.scss";
class ImageDetailPage extends Component {
  render() {
    return (
      <div className="detail-page">
        <div className="overview">
          <img src="https://via.placeholder.com/700x200" alt="/" />
          <div className="banner">
            <h1>SAINT SEIYA</h1>
            <h2>******</h2>
            <span>2200 viewers</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqu
            </p>
            <button>Watch Trailer</button>
            <button>Add To WatchList</button>
          </div>
        </div>
        <div>
          <button>overview</button>
          <button>character</button>
          <button>review</button>
        </div>
      </div>
    );
  }
}

export default ImageDetailPage;
