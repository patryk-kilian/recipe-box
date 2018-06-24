import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route
            path="/add-recipe"
            render={props => (
              <AddRecipeForm {...props} addRecipe={this.props.addRecipe} />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <RecipeList {...props} recipes={this.props.recipes} />
            )}
          />
          <Route
            exact
            path="/recipe/:index"
            render={props => (
              <RecipeDetails
                {...props}
                recipe={this.props.recipes[props.match.params.index]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;

// recipe={this.props.recipes[props.match.params.index]}
