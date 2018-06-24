import React from "react";
import RecipeItem from "./RecipeItem";

class RecipeList extends React.Component {
  render() {
    return (
      <ul className="recipe-list">
        {Object.keys(this.props.recipes).map(key => {
          return (
            <RecipeItem
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
