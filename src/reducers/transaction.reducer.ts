import { Transaction } from "../models/entities";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  items: {};
}
const initialState: State = {
  items: {
    montant: 0,
    description: "",
    date: "",
    id_categorie: 1,
    id: 0,
  },
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.items = { ...state.items, ...action.payload };
    },
  },
});

export const { setTransaction } = transactionSlice.actions;

export const selectTransaction = (state: any) => state.transaction.items;

export default transactionSlice.reducer;
