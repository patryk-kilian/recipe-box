import React from "react";
import Menu from "./Menu";
import Main from "./Main";
import sampleRecipes from "../sample-recipes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  state = {
    recipes: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("recipes");
    if (localStorageRef) {
      this.setState({ recipes: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  }

  addRecipe = recipe => {
    const recipes = { ...this.state.recipes };
    recipes[`recipe${Date.now()}`] = recipe;
    this.setState({ recipes });
  };

  loadSampleRecipes = () => {
    this.setState({ recipes: sampleRecipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <Router>
        <div className="recipe-box">
          <Menu loadSampleRecipes={this.loadSampleRecipes} />
          <Main addRecipe={this.addRecipe} recipes={this.state.recipes} />
        </div>
      </Router>
    );
  }
}

export default App;
