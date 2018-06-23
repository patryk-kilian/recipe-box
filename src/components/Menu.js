import React from "react";
import SearchForm from "./SearchForm";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <SearchForm heading="Search for recipes" />
        <button>New recipe</button>
        <button onClick={this.props.loadSampleRecipes}>
          Load sample recipes
        </button>
      </div>
    );
  }
}

export default Menu;
