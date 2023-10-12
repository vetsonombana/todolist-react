import React, { useState } from "react";
import { Categorie } from "../../models/entities";

const TransactionForm: React.FC<{
  handleSubmit: Function;
  categories: Categorie[];
}> = ({ handleSubmit, categories = [] }) => {
  const [transaction, setTransaction] = useState({
    montant: "",
    description: "",
    date: "",
    id_categorie: categories[0]?.id,
  });

  const addTransaction = () => {
    console.log(transaction);
    handleSubmit(transaction);
  };

  return (
    <>
      <div className="item">
        <label>Montant</label>
        <input
          type="number"
          name="montant"
          onChange={(e) =>
            setTransaction({ ...transaction, montant: e.target.value })
          }
        />
      </div>
      <div className="description">
        <label>Description</label>
        <textarea
          name="description"
          onChange={(e) =>
            setTransaction({ ...transaction, description: e.target.value })
          }
          rows={5}
          cols={20}
        />
      </div>
      <div className="date">
        <label>Date</label>
        <input
          type="date"
          name="date"
          onChange={(e) =>
            setTransaction({ ...transaction, date: e.target.value })
          }
        />
      </div>
      <div className="id_categorie">
        <label>Id Categorie</label>
        <select
          name="id_categorie"
          onChange={(e) =>
            setTransaction({
              ...transaction,
              id_categorie: parseInt(e.target.value),
            })
          }
          value={transaction.id_categorie}
        >
          {categories.map((categorie) => {
            return <option value={categorie.id}>{categorie.label}</option>;
          })}
        </select>
      </div>
      <button type="button" onClick={addTransaction}>
        ADD TRANSACTION
      </button>
    </>
  );
};

export default TransactionForm;
