import { useEffect, useState, useCallback } from "react";
import Transaction from "../components/transaction-list/TransactionList";
import {
  getTransactions as getTransactionsService,
  addTransaction,
  deleteTransaction as deleteTransactionService,
  modifyTransaction as modifyTransactionService,
} from "../services/transaction.service";
import TransactionForm from "../components/transaction-form/TransactionForm";
import { getCategories } from "../services/categorie.service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction as addTransactionReducer,
  selectTransactions,
  setTransactions,
} from "../reducers/transactions.reducer";
import Button from "react-bootstrap/Button";
import { setCategories } from "../reducers/categories.reducer";
import Overlay from "../components/overlay/Overlay";
import { Transaction as TransactionEntity } from "../models/entities";

const TransactionListPage = () => {
  const navigate = useNavigate();
  //const [transactions, setTransactions] = useState<any[]>([]);
  //const [categories, setCategories] = useState<any[]>([]);
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const transactions = useSelector(selectTransactions);

  const getTransations = useCallback(() => {
    getTransactionsService()
      .then((data: any) => {
        //setTransactions(data);
        dispatch(setTransactions(data));
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    getTransations();
    getCategories()
      .then((data: any) => {
        dispatch(setCategories(data));
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [getTransations, dispatch]);

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

  const deleteTransaction = (id: number) => {
    setShowOverlay(true);
    deleteTransactionService(id).then(() => {
      getTransations();
      setShowOverlay(false);
    });
  };

  const modifyTransaction = (transaction: TransactionEntity) => {
    setShowOverlay(true);
    modifyTransactionService(transaction).then(() => {
      getTransations();
      setShowOverlay(false);
    });
  };

  return (
    <>
      {showOverlay && <Overlay />}
      <div className="wrapper">
        <div className="w-50">
          <TransactionForm handleSubmit={handleSubmit} />
          <Transaction
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            modifyTransaction={modifyTransaction}
          />
          <br></br>
          <Button
            style={{ float: "right" }}
            type="button"
            onClick={redirectToCategoryPage}
          >
            VOIR CATEGORIE
          </Button>
        </div>
      </div>
    </>
  );
};
export default TransactionListPage;
