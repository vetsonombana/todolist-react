import { createSlice } from "@reduxjs/toolkit";
import { Categorie } from "../models/entities";
interface State {
  categories: Categorie[];
}
const initialState: State = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    setCategories: (state, action) => {
      state.categories = [...action.payload];
    },
  },
});

export const { addCategory, setCategories } = categoriesSlice.actions;
export const selectCategories = (state: any) => state.categories.categories;
export default categoriesSlice.reducer;
