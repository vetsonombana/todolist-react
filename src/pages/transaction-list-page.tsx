import React, { useEffect, useState } from "react";
import Transaction from "../components/transaction-list/TransactionList";
import {
  getTransactions,
  addTransaction,
} from "../services/transaction.service";
import TransactionForm from "../components/transaction-form/TransactionForm";
import { getCategories } from "../services/categorie.service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction as addTransactionReducer,
  selectIncomes,
  selectTransactions,
  setTransactions,
} from "../reducers/transactions.reducer";
const TransactionListPage = () => {
  const navigate = useNavigate();
  //const [transactions, setTransactions] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const dispatch = useDispatch();
  const transactions = useSelector(selectIncomes);

  useEffect(() => {
    getTransactions()
      .then((data: any) => {
        //setTransactions(data);
        dispatch(setTransactions(data));
      })
      .catch((err: Error) => {
        console.log(err);
      });
    getCategories()
      .then((data: any) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (transaction: any) => {
    addTransaction(transaction).then((data) => {
      transaction.id = data.id;
      //setTransactions([...transactions, transaction]);
      dispatch(addTransactionReducer(transaction));
    });
  };

  const redirectToCategoryPage = () => {
    navigate("/category ");
  };

  return (
    <>
      <Transaction transactions={transactions} />
      <TransactionForm handleSubmit={handleSubmit} categories={categories} />
      <br></br>
      <button type="button" onClick={redirectToCategoryPage}>
        VOIR CATEGORIE
      </button>
    </>
  );
};
export default TransactionListPage;
