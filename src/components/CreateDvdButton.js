import React, { Component } from "react";

class CreateDvdButton extends Component {
  constructor(props) {
    super(props);
  }

  showFormView = () => {
    this.props.setHomeState({ view: "form" });
  };
  render() {
    return (
      <div id="create-dvd-button">
        <div>
          <button onClick={this.showFormView}>Create DVD</button>
        </div>
      </div>
    );
  }
}

export default CreateDvdButton;
