import React from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <SearchForm heading="Search for recipes" />
        <Link to="/add-recipe">New recipe</Link>
        <button onClick={this.props.loadSampleRecipes}>
          Load sample recipes
        </button>
        <Link to="/">Recipe list</Link>
      </div>
    );
  }
}

export default Menu;
