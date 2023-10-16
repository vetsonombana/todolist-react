import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./reducers/transactions.reducer";
import transactionReducer from "./reducers/transaction.reducer";
import categoriesReducer from "./reducers/categories.reducer";
export default configureStore({
  reducer: {
    transactions: transactionsReducer,
    transaction: transactionReducer,
    categories : categoriesReducer,
  },
});
