// reducers/index.js
import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  cart: cartReducer,
  // other reducers
});

export default rootReducer;
