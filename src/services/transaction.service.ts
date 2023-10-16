export const getTransactions = () => {
  return fetch("http://localhost:8000/api/transactions").then((response) =>
    response.json()
  );
};

export const addTransaction = (transaction: any) => {
  return fetch("http://localhost:8000/api/transactions", {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const modifyTransaction = (transaction: any) => {
  return fetch("http://localhost:8000/api/transactions", {
    method: "PUT",
    body: JSON.stringify(transaction),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteTransaction = (id: number) => {
  return fetch("http://localhost:8000/api/transactions?id=" + id, {
    method: "DELETE",
  }).then((response) => response.json());
};
