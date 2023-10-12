import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./reducers/transactions.reducer";
export default configureStore({
  reducer: {
    transaction: transactionsReducer,
  },
});
