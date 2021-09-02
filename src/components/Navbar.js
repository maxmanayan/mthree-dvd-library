import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="navbar">
        <h1>Navbar</h1>
        <div>
          <button onClick={() => this.props.setHomeState({ view: "form" })}>
            To Form
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
