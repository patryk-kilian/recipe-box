import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search">
        <h3 className="search__heading">{this.props.heading}</h3>
        <form action="" className="search__form">
          <input
            onChange={this.props.searchChange}
            type="search"
            className="search__input"
          />
          <button type="submit" className="btn search__button">
            search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
