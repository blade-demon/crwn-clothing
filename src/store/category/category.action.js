import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (err) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_FAILED, err);
