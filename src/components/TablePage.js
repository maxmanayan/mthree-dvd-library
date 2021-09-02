import React, { Component } from "react";
import Navbar from "./Navbar";

class TablePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="table-page">
        <Navbar setHomeState={this.props.setHomeState} />
        <h1>TablePage</h1>
      </div>
    );
  }
}

export default TablePage;
