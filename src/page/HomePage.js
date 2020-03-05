import React, { Component } from "react";

// Import Component
import HeaderComponent from "../components/HeaderComponent";
import SlideShowComponent from "../components/SlideShowComponent";
import SectionComponent from "../components/SectionComponent";
import FooterComponent from "../components/FooterComponent";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <SlideShowComponent />
        <SectionComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
