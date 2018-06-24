import React from "react";
import { Link } from "react-router-dom";

class RecipeItem extends React.Component {
  render() {
    const { name, ingredients, image, instruction } = this.props.recipes;
    return (
      <li className="recipe-item">
        <img className="recipe-item__image" src={image} alt="" />
        <Link className="recipe-item__link" to={`/recipe/${this.props.index}`}>
          {name}
          {console.log(this.props.recipes.name)}
        </Link>
        <div className="recipe-item__buttons">
          <button className="recipe-item__button">delete</button>
          <button className="recipe-item__button">edit</button>
        </div>
      </li>
    );
  }
}

export default RecipeItem;
