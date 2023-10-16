import React, { useState } from "react";
import { Categorie, Transaction } from "../../models/entities";
import "./TransactionList.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { selectCategories } from "../../reducers/categories.reducer";

interface TransactionListProps {
  transactions: Transaction[];
  deleteTransaction: Function;
  modifyTransaction: Function;
}
const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  deleteTransaction,
  modifyTransaction,
}) => {
  const [show, setShow] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const categories = useSelector(selectCategories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = (transaction: Transaction) => {
    setShowDeleteModal(true);
    setSelectedTransaction(transaction);
  };

  const handleSubmitModifyTransaction = (selectedTransaction: Transaction) => {
    modifyTransaction(selectedTransaction);
    setShow(false);
  };

  return (
    <>
      {" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Montant</th>
            <th>Date</th>
            <th>Categorie id</th>
            <th>Plus</th>
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
                <td>
                  {" "}
                  <Button
                    type="button"
                    onClick={() => {
                      handleShow();
                      setSelectedTransaction(transaction);
                    }}
                  >
                    Modifier
                  </Button>
                  <Button
                    style={{ marginLeft: "10px" }}
                    type="button"
                    onClick={() => handleShowDeleteModal(transaction)}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {show && selectedTransaction != null && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier votre transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Montant</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="montant"
                    value={selectedTransaction.montant}
                    onChange={(e) =>
                      setSelectedTransaction({
                        ...selectedTransaction,
                        montant: parseInt(e.target.value),
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                {" "}
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="description"
                    value={selectedTransaction.description}
                    onChange={(e) =>
                      setSelectedTransaction({
                        ...selectedTransaction,
                        description: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="date"
                    value={selectedTransaction.date}
                    onChange={(e) =>
                      setSelectedTransaction({
                        ...selectedTransaction,
                        date: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Id Categorie</Form.Label>
                  <Form.Select
                    name="id_categorie"
                    value={selectedTransaction.id_categorie}
                    onChange={(e) =>
                      setSelectedTransaction({
                        ...selectedTransaction,
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
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSubmitModifyTransaction(selectedTransaction)}
            >
              Valider
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer votre transaction </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Voulez-vous vraiment supprimer cette transaction ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteTransaction(selectedTransaction);
              setShowDeleteModal(false);
            }}
          >
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TransactionList;
