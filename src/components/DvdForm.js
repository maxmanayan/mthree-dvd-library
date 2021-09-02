import React, { Component } from "react";

class DvdForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="dvd-form">
        <h1>DvdForm</h1>
        <button onClick={() => this.props.setHomeState({ view: "table" })}>
          To Table
        </button>
      </div>
    );
  }
}

export default DvdForm;
