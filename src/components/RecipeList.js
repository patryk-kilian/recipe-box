import React from "react";
import RecipeItem from "./RecipeItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class RecipeList extends React.Component {
  render() {
    return (
      <TransitionGroup component="ul" className="recipe-list">
        {Object.keys(this.props.recipes).map(key => {
          return (
            <CSSTransition
              classNames="item"
              key={key}
              timeout={{ enter: 250, exit: 250 }}
            >
              <RecipeItem
                deleteRecipe={this.props.deleteRecipe}
                key={key}
                index={key}
                recipes={this.props.recipes[key]}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

export default RecipeList;
