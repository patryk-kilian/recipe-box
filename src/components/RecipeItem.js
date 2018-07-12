import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { textTruncate } from "../helpers";
import defaultImage from "../css/images/default.jpg";

class RecipeItem extends React.Component {
  render() {
    const { name, image } = this.props.recipes;
    return (
      <li className="recipe-item">
        <figure className="recipe-item__fig">
          <img
            className="recipe-item__image"
            src={image}
            alt=""
            onError={e => {
              e.target.onError = null;
              e.target.src = `${defaultImage}`;
            }}
          />
        </figure>
        <Link className="recipe-item__link" to={`/recipe/${this.props.index}`}>
          {textTruncate(name, 35)}
        </Link>
        <div className="recipe-item__buttons">
          <button
            onClick={() => this.props.deleteRecipe(this.props.index)}
            className="recipe-item__button recipe-item__button--delete"
          >
            <Icon name="bin" size="40" color="#f33" />
          </button>
          <Link
            to={`/edit-recipe/${this.props.index}`}
            className="recipe-item__button recipe-item__button--edit"
          >
            <Icon name="pencil " size="40" color="#00b300" />
          </Link>
        </div>
      </li>
    );
  }
}

export default RecipeItem;
