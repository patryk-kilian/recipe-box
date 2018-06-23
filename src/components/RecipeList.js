import React from "react";
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  render() {
    return (
      <ul className="recipe-list">
        <RecipeItem recipes={this.props.recipes} />
      </ul>
    );
  }
}

export default RecipeList;
