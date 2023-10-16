import { render, screen } from "@testing-library/react";
import TransactionList from "./TransactionList";
import { Transaction } from "../../models/entities";
const transactionMock: Transaction[] = [
  {
    id: 1,
    description: "salaire",
    montant: 50,
    date: "2013-02-20",
    id_categorie: 1,
  },
];
test("transaction list fully rendered", () => {
  render(
    <TransactionList
      transactions={transactionMock}
      deleteTransaction={() => {}}
      modifyTransaction={() => {}}
    />
  );

  expect(screen.getAllByRole("row")).toHaveLength(2);
});
