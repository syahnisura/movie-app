import React, { Component } from "react";
import "../style/FooterPage.scss";

class SosialFooter extends Component {
  render() {
    return (
      <div>
        <h3>sosial media</h3>
        <div className="button-img">
          <i class="fab fa-facebook-square fa-3x"></i>
          <i class="fab fa-pinterest-square fa-3x"></i>
          <i class="fab fa-instagram-square fa-3x"></i>
        </div>
      </div>
    );
  }
}

export default SosialFooter;
