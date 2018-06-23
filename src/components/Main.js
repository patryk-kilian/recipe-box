import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        {/* <AddRecipeForm addRecipe={this.props.addRecipe} /> */}
        <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}

export default Main;
