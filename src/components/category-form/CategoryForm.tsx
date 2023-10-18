import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const CategoryForm: React.FC<{ handleSubmit: Function }> = ({
  handleSubmit,
}) => {
  const [category, setCategory] = useState({ label: "" });
  return (
    <>
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Label</Form.Label>
            <Form.Control
              required
              type="text"
              name="label"
              onChange={(e) =>
                setCategory({ ...category, label: e.target.value })
              }
            />
          </Form.Group>
        </Row>
      </Form>
      <Button
        style={{ width: "100%" }}
        type="button"
        onClick={() => handleSubmit(category)}
      >
        AJOUTER
      </Button>
    </>
  );
};
export default CategoryForm;
