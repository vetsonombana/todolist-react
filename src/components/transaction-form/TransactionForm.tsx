import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { selectCategories } from "../../reducers/categories.reducer";
import { useSelector } from "react-redux";
import { Categorie } from "../../models/entities";

const TransactionForm: React.FC<{
  handleSubmit: Function;
}> = ({ handleSubmit }) => {
  const categories = useSelector(selectCategories);
  // const dispatch = useDispatch();
  const [transaction, setTransaction] = useState({
    montant: "",
    description: "",
    date: "",
    id_categorie: categories[0]?.id,
  });

  const addTransaction = () => {
    handleSubmit(transaction);
  };

  return (
    <>
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Montant</Form.Label>
            <Form.Control
              required
              type="number"
              name="montant"
              onChange={(e) =>
                setTransaction({ ...transaction, montant: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              name="description"
              onChange={(e) =>
                setTransaction({ ...transaction, description: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="date"
              onChange={(e) =>
                setTransaction({ ...transaction, date: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Id Categorie</Form.Label>
            <Form.Select
              name="id_categorie"
              onChange={(e) =>
                setTransaction({
                  ...transaction,
                  id_categorie: parseInt(e.target.value),
                })
              }
            >
              {categories.map((categorie: Categorie) => {
                return (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.label}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>

      <Button
        type="button"
        style={{ width: "100%", marginBottom: "10px" }}
        onClick={addTransaction}
      >
        AJOUTER
      </Button>
    </>
  );
};

export default TransactionForm;
