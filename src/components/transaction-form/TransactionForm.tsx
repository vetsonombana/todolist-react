import React, { useState } from "react";

const TransactionForm: React.FC<{ handleSubmit: Function }> = ({
  handleSubmit,
}) => {
  const [transaction, setTransaction] = useState({
    montant: "",
    description: "",
    date: "",
  });

  const addTransaction = () => {
    handleSubmit(transaction);
  };

  return (
    <>
      <div className="item">
        <input
          type="number"
          name="montant"
          onChange={(e) =>
            setTransaction({ ...transaction, montant: e.target.value })
          }
        />
      </div>
      <div className="description">
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
        <input
          type="date"
          name="date"
          onChange={(e) =>
            setTransaction({ ...transaction, date: e.target.value })
          }
        />
      </div>
      <button type="button" onClick={addTransaction}>
        ADD TRANSACTION
      </button>
    </>
  );
};

export default TransactionForm;
