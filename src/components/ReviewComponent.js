import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import ImageDetailPage from "./ImageDetailPage";
import FooterComponent from "./FooterComponent";
import "../style/ReviewPage.scss";

class ReviewComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ImageDetailPage />
        <div className="review-container">
          <div className="review-image">
            <img
              src="https://www.panditfootball.com/content/uploads/2014/03/343374_heroa.jpg"
              alt="/"
            />
          </div>
          <h2>Yudi Kaka</h2>
          <span>******</span>
          <br />
          <input type="text" name="text" placeholder="leave a review" />
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ReviewComponent;
