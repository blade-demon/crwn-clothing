/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCollectionAndDocuments(
        "categories",
        SHOP_DATA
      );

      setCategories(categoriesMap);
      console.log(categoriesMap);
    };
    getCategories();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
