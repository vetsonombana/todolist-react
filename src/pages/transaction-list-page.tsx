import React, { useEffect, useState } from "react";
import Transaction from "../components/transaction-list/TransactionList";
import {
  getTransactions,
  addTransaction,
} from "../services/transaction.service";
import TransactionForm from "../components/transaction-form/TransactionForm";
const TransactionListPage = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  useEffect(() => {
    getTransactions()
      .then((data: any) => {
        setTransactions(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (transaction: any) => {
    addTransaction(transaction).then((data) => {
      transaction.id = data.id;
      setTransactions([...transactions, transaction]);
    });
  };

  return (
    <>
      <Transaction transactions={transactions} />
      <TransactionForm handleSubmit={handleSubmit} />
    </>
  );
};
export default TransactionListPage;
