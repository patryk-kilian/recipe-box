import "focus-visible/dist/focus-visible.js";
import React from "react";
import Menu from "./Menu";
import Main from "./Main";
import sampleRecipes from "../sample-recipes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  state = {
    recipes: {},
    searchfield: ""
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
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

  deleteRecipe = key => {
    const recipes = { ...this.state.recipes };
    delete recipes[key];
    this.setState({ recipes });
  };

  updateRecipe = (key, updatedRecipe) => {
    const recipes = { ...this.state.recipes };
    recipes[key] = updatedRecipe;
    this.setState({ recipes });
  };

  loadSampleRecipes = () => {
    const recipes = { ...this.state.recipes, ...sampleRecipes };
    this.setState({ recipes });
  };

  render() {
    let filteredRecipes = {};
    const filteredKeys = Object.keys(this.state.recipes).filter(key => {
      return this.state.recipes[key].name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    filteredKeys.forEach(key => {
      filteredRecipes[key] = this.state.recipes[key];
    });

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="recipe-box">
          <Menu
            searchChange={this.onSearchChange}
            loadSampleRecipes={this.loadSampleRecipes}
          />
          <Main
            deleteRecipe={this.deleteRecipe}
            addRecipe={this.addRecipe}
            recipes={filteredRecipes}
            updateRecipe={this.updateRecipe}
          />
        </div>
      </Router>
    );
  }
}

export default App;
