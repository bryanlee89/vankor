import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <nav>
        <div
          className="nav-wrapper blue lighten-5"
          style={{ marginTop: "10px" }}
        >
          <form>
            <div className="input-field black-text">
              <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons black-text">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
