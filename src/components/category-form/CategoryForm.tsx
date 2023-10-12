import { useState } from "react";

const CategoryForm: React.FC<{ handleSubmit: Function }> = ({
  handleSubmit,
}) => {
  const [category, setCategory] = useState({ label: "" });
  return (
    <>
      <label>Label</label>
      <input
        type="text"
        name="label"
        onChange={(e) => setCategory({ ...category, label: e.target.value })}
      />
      <button type="button" onClick={() => handleSubmit(category)}>
        ADD CATEGORY
      </button>
    </>
  );
};
export default CategoryForm;
