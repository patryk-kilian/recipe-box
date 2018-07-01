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
            />
          </label>
          <label>
            Recipe Ingredients:
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              value={ingredients}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Optional Image Url:
            <input
              name="image"
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={this.handleChange}
            />
          </label>
          Instruction to make this great dish:
          <textarea
            name="instruction"
            placeholder="Instruction"
            value={instruction}
            onChange={this.handleChange}
          />
          <Link to="/">Save</Link>
        </form>
      );
    } else {
      return <p>ERROR {console.log(this.props.recipe)}</p>;
    }
  }
}

export default EditRecipeForm;
