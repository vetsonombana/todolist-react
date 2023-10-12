import React from "react";
import { Transaction } from "../../models/entities";
interface TransactionListProps {
  transactions: Transaction[];
}
const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Montant</th>
          <th>Date</th>
          <th>Categorie id</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction?.description}</td>
              <td>{transaction?.montant}</td>
              <td>{transaction?.date}</td>
              <td>{transaction?.id_categorie}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionList;
