import React from "react";
interface Transaction {
  id: number;
  description: string;
  montant: number;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}
const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Montant</th>
        <th>Date</th>
      </tr>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction?.description}</td>
              <td>{transaction?.montant}</td>
              <td>{transaction?.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionList;
