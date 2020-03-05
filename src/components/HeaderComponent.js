import React, { Component } from "react";
import "../style/HeaderPage.scss";

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  handleModalShow = e => {
    e.preventDefault();
    this.setState({
      modal: true
    });
  };

  handleCloseModal = e => {
    e.preventDefault();
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <div className="container-navbar">
        <div className="header">
          {/* <i class="fab fa-youtube"></i> */}
          <h1>SAHTA TV</h1>
          <div>
            <input type="text" name="text" placeholder="search movie" />
            <button>search</button>
          </div>

          <button onClick={e => this.handleModalShow(e)}>SIGN IN</button>
        </div>
        {this.state.modal ? (
          <div className="modal">
            <h1>Hello World</h1>
            <input type="text" placeholder="user name" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button onClick={e => this.handleCloseModal(e)}>Close Modal</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HeaderComponent;
