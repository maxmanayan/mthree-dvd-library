import React, { Component } from "react";
import SearchDropdown from "./SearchDropdown";
import SearchInput from "./SearchInput";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      searchInput: null,
    };
    this.setSearchState = this.setState.bind(this);
  }

  handleSearch = () => {
    if (!this.state.searchValue || !this.state.searchInput) {
      // put error validation here
      console.log("error");
      console.log(
        "value",
        this.state.searchValue,
        "input",
        this.state.searchInput
      );
    } else {
      this.handleSearchCall();
    }
  };

  handleSearchCall = () => {
    this.props.getDvdSearch(this.state.searchValue, this.state.searchInput);
  };

  render() {
    return (
      <div id="search-container">
        <button onClick={this.handleSearch}>Search</button>
        <SearchDropdown setSearchState={this.setSearchState} />
        <SearchInput setSearchState={this.setSearchState} />
      </div>
    );
  }
}

export default SearchContainer;
