import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./TodoForm.css";
const TodoForm: React.FC<{ handleSubmit: Function }> = ({ handleSubmit }) => {
  const [item, setItem] = useState({ title: "", description: "" });
  //const navigate = useNavigate();
  const addItem = () => {
    console.log(item);
    handleSubmit(item);
    // navigate("/list");
  };

  return (
    <>
      <div className="item">
        <input
          type="text"
          name="title"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
      </div>
      <div className="description">
        <textarea
          name="description"
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          rows={5}
          cols={20}
        />
      </div>
      <button type="button" onClick={addItem}>
        ADD ITEM
      </button>
    </>
  );
};

export default TodoForm;
