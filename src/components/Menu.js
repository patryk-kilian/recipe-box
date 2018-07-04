import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../css/images/icons.svg";
// import Icon from "./Icon";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <SearchForm
          searchChange={this.props.searchChange}
          heading="Search for recipes"
        />
        <Link className="btn menu__button" to="/add-recipe">
          New recipe
        </Link>
        <Link className="btn menu__button" to="/">
          Recipe list
        </Link>
        <button
          className="btn menu__button"
          onClick={this.props.loadSampleRecipes}
        >
          Load sample recipes
        </button>
      </div>
    );
  }
}

export default Menu;
