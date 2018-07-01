import React from "react";
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  render() {
    return (
      <ul className="recipe-list">
        {Object.keys(this.props.recipes).map(key => {
          return (
            <RecipeItem
              deleteRecipe={this.props.deleteRecipe}
              key={key}
              index={key}
              recipes={this.props.recipes[key]}
            />
          );
        })}
      </ul>
    );
  }
}

export default RecipeList;
