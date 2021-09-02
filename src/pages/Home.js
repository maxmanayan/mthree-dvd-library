import React, { Component } from "react";
import DvdForm from "../components/DvdForm";
import TablePage from "../components/TablePage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "table",
    };
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <div id="home">
        <h1>Home</h1>
        <div>
          {this.state.view === "table" && (
            <TablePage setHomeState={this.setState} />
          )}
          {this.state.view === "form" && (
            <DvdForm setHomeState={this.setState} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
