import { createSlice } from "@reduxjs/toolkit";
interface State {
  items: any[];
}
const initialState: State = {
  items: [],
};
export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setTransactions: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export const { addTransaction, setTransactions } = transactionSlice.actions;

export const selectTransactions = (state: any) => state.transactions.items;

export const selectIncomes = (state: any) => {
  return state.transaction.items.filter(
    (transaction: any) => transaction.montant > 0
  );
};

export default transactionSlice.reducer;
