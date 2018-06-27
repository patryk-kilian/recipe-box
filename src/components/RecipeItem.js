import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { textTruncate } from "../helpers";

class RecipeItem extends React.Component {
  render() {
    const { name, ingredients, image, instruction } = this.props.recipes;
    return (
      <li className="recipe-item">
        <figure className="recipe-item__fig">
          <img className="recipe-item__image" src={image} alt="" />
        </figure>
        <Link className="recipe-item__link" to={`/recipe/${this.props.index}`}>
          {textTruncate(name, 30)}
        </Link>
        <div className="recipe-item__buttons">
          <button className="recipe-item__button recipe-item__button--delete">
            <Icon name="bin" size="40" color="#f33" />
          </button>
          <button className="recipe-item__button recipe-item__button--edit">
            <Icon name="pencil " size="40" color="#00b300" />
          </button>
        </div>
      </li>
    );
  }
}

export default RecipeItem;
