import axios from "axios";
import React, { Component } from "react";
import DvdDetails from "../components/DvdDetails";
import DvdForm from "../components/DvdForm";
import TablePage from "../components/TablePage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "table",
      dvds: null,
      dvd: null,
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

  getDvd = async (id) => {
    try {
      let res = await axios.get(`https://tsg-dvds.herokuapp.com/dvd/${id}`);
      this.setState({ dvd: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  getDvdSearch = async (value, input) => {
    try {
      let res = await axios.get(
        `https://tsg-dvds.herokuapp.com/dvds/${value}/${input}`
      );
      this.setState({ dvds: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div id="home">
        <div>
          {this.state.view === "table" && (
            <TablePage
              setHomeState={this.setState}
              dvds={this.state.dvds}
              getDvd={this.getDvd}
              getDvdSearch={this.getDvdSearch}
            />
          )}
          {this.state.view === "form" && (
            <DvdForm setHomeState={this.setState} />
          )}
          {this.state.view === "details" && this.state.dvd && (
            <DvdDetails setHomeState={this.setState} dvd={this.state.dvd} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
