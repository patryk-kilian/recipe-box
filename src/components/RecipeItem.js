import React from "react";

class RecipeItem extends React.Component {
  render() {
    return (
      <li className="recipe-item">
        <h2 className="recipe-item__name">{this.props.recipes.name}</h2>
      </li>
    );
  }
}

export default RecipeItem;
