import React from "react";
import AddRecipeForm from "./AddRecipeForm";
import EditRecipeForm from "./EditRecipeForm";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { Route, Switch } from "react-router-dom";

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
            path="/edit-recipe/:index"
            render={props => (
              <EditRecipeForm
                {...props}
                index={props.match.params.index}
                recipe={this.props.recipes[props.match.params.index]}
                addRecipe={this.props.addRecipe}
                updateRecipe={this.props.updateRecipe}
              />
            )}
          />
          <Route
            exact
            path="{process.env.PUBLIC_URL + '/'}"
            render={props => (
              <RecipeList
                {...props}
                deleteRecipe={this.props.deleteRecipe}
                recipes={this.props.recipes}
              />
            )}
          />
          <Route
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
