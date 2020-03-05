import React, { Component } from "react";
import "../style/OverviewPage.scss";
import HeaderComponent from "../components/HeaderComponent";
import ImageDetailPage from "../components/ImageDetailPage";
import FooterComponent from "../components/FooterComponent";
import OverviewComponent from "../components/OverviewComponent";

class DetailPageOverview extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ImageDetailPage />
        <OverviewComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default DetailPageOverview;
