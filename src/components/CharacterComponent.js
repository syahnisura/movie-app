import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import ImageDetailPage from "./ImageDetailPage";
import FooterComponent from "./FooterComponent";

class CharacterComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <ImageDetailPage />
        <FooterComponent />
      </div>
    );
  }
}

export default CharacterComponent;
