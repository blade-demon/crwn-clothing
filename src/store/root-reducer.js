import { combineReducers } from "redux";
import { userReducer } from "../store/user/user.reducer";
import { categoryReducer } from "./category/category.reducer";
import { cartReducer } from "../store/cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoryReducer,
});
