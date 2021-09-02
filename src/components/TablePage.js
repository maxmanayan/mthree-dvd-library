import React, { Component } from "react";
import Navbar from "./Navbar";

class TablePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="table-page">
        <h1>TablePage</h1>
        <Navbar setHomeState={this.props.setHomeState} />
      </div>
    );
  }
}

export default TablePage;
