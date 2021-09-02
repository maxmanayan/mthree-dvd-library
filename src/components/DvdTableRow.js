import React, { Component } from "react";

class DvdTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      releaseYear: this.props.releaseYear,
      director: this.props.director,
      rating: this.props.rating,
    };
  }

  render() {
    return (
      <>
        <tr className="dvd-table-row">
          <td>{this.state.title}</td>
          <td>{this.state.releaseYear}</td>
          <td>{this.state.director}</td>
          <td>{this.state.rating}</td>
        </tr>
      </>
    );
  }
}

export default DvdTableRow;
