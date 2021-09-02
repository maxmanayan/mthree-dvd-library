import React, { Component } from "react";

class CreateDvdButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="create-dvd-button">
        <div>
          <button onClick={() => this.props.setHomeState({ view: "form" })}>
            To Form
          </button>
        </div>
      </div>
    );
  }
}

export default CreateDvdButton;
