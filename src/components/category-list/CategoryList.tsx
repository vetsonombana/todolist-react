import React, { useState } from "react";
import { Categorie } from "../../models/entities";
import { Button, Table, Modal, Form, Row, Col } from "react-bootstrap";

const CategoryList: React.FC<{
  categories: Categorie[];
  handleSubmitDeleteModal: Function;
  handleSubmitModifyModal: Function;
}> = ({
  categories = [],
  handleSubmitDeleteModal,
  handleSubmitModifyModal,
}) => {
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Categorie | null>(
    null
  );

  const handleCloseModifyModal = () => setShowModifyModal(false);
  const handleShowModifyModal = () => setShowModifyModal(true);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Plus</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categorie) => {
            return (
              <tr key={categorie.id}>
                <td>{categorie.id}</td>
                <td>{categorie.label}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleShowModifyModal();
                      setSelectedCategory(categorie);
                    }}
                    type="button"
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={handleShowDeleteModal}
                    style={{ marginLeft: "10px" }}
                    type="button"
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {showModifyModal && selectedCategory != null && (
        <Modal show={showModifyModal} onHide={handleCloseModifyModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier votre catégorie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Label</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="label"
                    value={selectedCategory.label}
                    onChange={(e) =>
                      setSelectedCategory({
                        ...selectedCategory,
                        label: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModifyModal}>
              Fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmitModifyModal(selectedCategory);
                handleCloseModifyModal();
              }}
            >
              Valider
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer votre categorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Voulez-vous vraiment supprimer votre catégorie ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteModal(selectedCategory);
              handleCloseDeleteModal();
            }}
          >
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CategoryList;
