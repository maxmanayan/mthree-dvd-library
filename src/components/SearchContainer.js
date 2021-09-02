import React, { Component } from "react";
import SearchDropdown from "./SearchDropdown";

class SearchContainer extends Component {
  render() {
    return (
      <div id="search-container">
        <button>Search</button>
        <SearchDropdown />
        <input></input>
      </div>
    );
  }
}

export default SearchContainer;
