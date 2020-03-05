import React, { Component } from "react";
import "../style/OverviewPage.scss";
class OverviewComponent extends Component {
  render() {
    return (
      <div className="detail-page">
        <div className="container-overview">
          <h1>SYNPOSYS</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s, when an unknown printer took.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s, when an unknown printer took.
          </p>
          <h1>Movie Info</h1>
          <div className="movieinfo">
            <p>Release date :January 5,1998</p>
            <p>Director :John Dea</p>
            <p>Feautured song:Pegasus Fantasi</p>
            <p>Budget :200 million USD</p>
            <p>Release date :January 5,1998</p>
            <p>Director :John Dea</p>
            <p>Feautured song:Pegasus Fantasi</p>
            <p>Budget :200 million USD</p>
          </div>
        </div>

        {/* disini overview */}

        {/* disini character */}

        {/* disini review */}
      </div>
    );
  }
}

export default OverviewComponent;
