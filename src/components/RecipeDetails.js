import React from "react";

class RecipeDetails extends React.Component {
  render() {
    if (this.props.recipe) {
      const { name, ingredients, image, instruction } = this.props.recipe;
      return (
        <div className="details">
          <p>{name}</p>
        </div>
      );
    } else {
      return <p />;
    }
  }
}

export default RecipeDetails;
