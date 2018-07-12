import React from "react";
import { Link } from "react-router-dom";

class EditRecipeForm extends React.Component {
  handleChange = event => {
    const updatedRecipe = {
      ...this.props.recipe,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateRecipe(this.props.index, updatedRecipe);
  };

  render() {
    if (this.props.recipe) {
      const { name, ingredients, image, instruction } = this.props.recipe;
      return (
        <form action="" className="add-recipe">
          <label>
            Recipe Name:
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Recipe Ingredients:
            <textarea
              name="ingredients"
              type="text"
              placeholder="Separate each ingredient by @ sign, for example: 1/2 cup balsamic vinegar@1 tablespoon olive oil"
              value={ingredients}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Image Url(optional):
            <input
              name="image"
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Instruction to make this great dish:
            <textarea
              name="instruction"
              placeholder="Separate each step by @ sign"
              value={instruction}
              onChange={this.handleChange}
              required
            />
          </label>
          <Link className="btn add-recipe__button" to="/">
            Save
          </Link>
        </form>
      );
    } else {
      return <p>ERROR {console.log(this.props.recipe)}</p>;
    }
  }
}

export default EditRecipeForm;
