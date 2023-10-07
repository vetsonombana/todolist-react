export const getTransactions = () => {
  return fetch("http://localhost:8000/").then((response) => response.json());
};

export const addTransaction = (transaction: any) => {
  return fetch("http://localhost:8000", {
    method: "POST",
    body: JSON.stringify(transaction),
  }).then((response) => response.json());
};
