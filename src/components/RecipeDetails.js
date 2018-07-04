import React from "react";

class RecipeDetails extends React.Component {
  render() {
    if (this.props.recipe) {
      const { name, ingredients, image, instruction } = this.props.recipe;
      return (
        <div className="details">
          <img src={image} alt="" />
          <p>{name}</p>
          <ul>
            {ingredients.split("/").map(el => {
              return <li>{el}</li>;
            })}
          </ul>
          <p>
            {instruction.split("/").map(el => {
              return <span className="text-new-line">{el}</span>;
            })}
          </p>
        </div>
      );
    } else {
      return <p />;
    }
  }
}

export default RecipeDetails;
