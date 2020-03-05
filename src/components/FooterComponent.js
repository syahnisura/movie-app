import React, { Component } from "react";
import SidebarFooter from "./SidebarFooter";
import MiddleFooter from "./MiddleFooter";
import RightSideFooter from "./RightSideFooter";
import SosialFooter from "./SosialFooter";

class FooterComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <SidebarFooter />
          <MiddleFooter />
          <div className="wrapper-footer">
            <RightSideFooter />
            <SosialFooter />
          </div>
        </div>

        <div className="hr">
          <hr></hr>
        </div>

        <div>
          <p>Copyright © 2000-2020 SahtaTV. All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
