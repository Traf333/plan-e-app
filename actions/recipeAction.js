import axios from "axios";

// actions/recipeActions.js
export const setRecipes = (recipes) => ({
  type: "SET_RECIPES",
  payload: recipes,
});

export const fetchRecipes = () => {
  // Assuming you use a library like axios for API requests
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://somebo.eu.ngrok.io/api/recipes?populate=*&pagination[pageSize]=50",
      );
      const recipes = response.data.data;
      console.log(recipes.length);
      dispatch(setRecipes(recipes));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
};
