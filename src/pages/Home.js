import axios from "axios";
import React, { Component } from "react";
import DvdForm from "../components/DvdForm";
import TablePage from "../components/TablePage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "table",
      dvds: null,
    };
    this.setState = this.setState.bind(this);
  }

  getDvds = async () => {
    try {
      let res = await axios.get(`https://tsg-dvds.herokuapp.com/dvds`);
      this.setState({ dvds: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getDvds();
  }

  render() {
    return (
      <div id="home">
        <div>
          {this.state.view === "table" && (
            <TablePage setHomeState={this.setState} dvds={this.state.dvds} />
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
