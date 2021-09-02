import React, { Component } from "react";

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="search-dropdown">
        <div>
          <select>
            <option>Title</option>
            <option>Release Date</option>
            <option>Director</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchDropdown;
