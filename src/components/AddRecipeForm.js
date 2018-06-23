import React from "react";

class AddRecipeForm extends React.Component {
  nameRef = React.createRef();
  ingredientsRef = React.createRef();
  imageRef = React.createRef();
  instructionRef = React.createRef();

  createRecipe = event => {
    event.preventDefault();
    const recipe = {
      name: this.nameRef.current.value,
      ingredients: this.ingredientsRef.current.value,
      image: this.imageRef.current.value,
      instruction: this.instructionRef.current.value
    };
    this.props.addRecipe(recipe);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form action="" className="add-recipe" onSubmit={this.createRecipe}>
        <label>
          Recipe Name:
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          Recipe Ingredients:
          <input
            ref={this.ingredientsRef}
            name="ingredients"
            type="text"
            placeholder="Ingredients"
          />
        </label>
        <label>
          Optional Image Url:
          <input
            ref={this.imageRef}
            name="image"
            type="text"
            placeholder="Image Url"
          />
        </label>
        Instruction to make this great dish:
        <textarea
          ref={this.instructionRef}
          name="instruction"
          placeholder="Instruction"
        />
        <button type="submit">Add Recipe +</button>
      </form>
    );
  }
}

export default AddRecipeForm;
