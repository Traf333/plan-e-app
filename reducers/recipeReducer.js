// reducers/recipeReducer.js
const initialState = {
  recipess: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipess: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
