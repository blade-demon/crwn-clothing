import CATEGORIES_ACTION_TYPES from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (err) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_REQUEST_FAILED, err);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    fetchCategoriesFailed(error);
  }
};
