import React from "react";

class RecipeDetails extends React.Component {
  render() {
    if (this.props.recipe) {
      const { name, ingredients, image, instruction } = this.props.recipe;
      return (
        <div className="details">
          <h1 className="details__heading">{name}</h1>
          <img className="details__image" src={image} alt="" />
          <ul className="details__ingredients">
            {ingredients.split("@").map((el, i) => {
              return (
                <li key={i} className="details__ingredient">
                  {el}
                </li>
              );
            })}
          </ul>
          <ul className="details__instruction">
            {instruction.split("@").map((el, i) => {
              return (
                <li key={i} className="details__instruction-step">
                  <span className="details__instruction-step--number">
                    {i + 1}
                  </span>{" "}
                  <span className="details__instruction-step--text">{el}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <p />;
    }
  }
}

export default RecipeDetails;
