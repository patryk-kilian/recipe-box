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
          <input name="name" ref={this.nameRef} type="text" required />
        </label>
        <label>
          Recipe Ingredients:
          <textarea
            ref={this.ingredientsRef}
            name="ingredients"
            type="text"
            placeholder="Separate each ingredient by @ sign, for example: 1/2 cup balsamic vinegar@1 tablespoon olive oil"
            required
          />
        </label>
        <label>
          Image Url(optional):
          <input ref={this.imageRef} name="image" type="text" />
        </label>
        <label>
          Instruction to make this great dish:
          <textarea
            ref={this.instructionRef}
            name="instruction"
            placeholder="Separate each step by @ sign"
            required
          />
        </label>
        <button className="btn add-recipe__button" type="submit">
          Add Recipe +
        </button>
      </form>
    );
  }
}

export default AddRecipeForm;
