import React, { Component } from "react";

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }

  setSearchValue = (value) => {
    console.log("setSearchValue", value);
    this.props.setSearchState({
      searchValue: value === "Search Category" ? null : value,
    });
  };

  render() {
    return (
      <div id="search-dropdown">
        <select onChange={(e) => this.setSearchValue(e.target.value)}>
          <option value={null} default>
            Search Category
          </option>
          <option value="title">Title</option>
          <option value="year">Release Date</option>
          <option value="director">Director</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
}

export default SearchDropdown;
