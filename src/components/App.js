import React from "react";
import Menu from "./Menu";
import Main from "./Main";
import SampleRecipes from "../sample-recipes";

class App extends React.Component {
  state = {
    recipes: {}
  };

  addRecipe = recipe => {
    const recipes = { ...this.state.recipes };
    recipes[`recipe${Date.now()}`] = recipe;
    this.setState({ recipes });
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: SampleRecipes });
  };

  render() {
    return (
      <div className="recipe-box">
        <Menu loadSampleRecipes={this.loadSampleRecipes} />
        <Main addRecipe={this.addRecipe} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
