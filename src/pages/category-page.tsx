import { useEffect, useState } from "react";
import CategoryForm from "../components/category-form/CategoryForm";
import CategoryList from "../components/category-list/CategoryList";
import { addCategory, getCategories } from "../services/categorie.service";
const CategoryPage = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const handleSubmit = (category: any) => {
    console.log(category);
    addCategory(category).then((data) => {
      category.id = data.id;
      setCategories([...categories, category]);
    });
  };
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <>
      <CategoryForm handleSubmit={handleSubmit}></CategoryForm>
      <CategoryList categories={categories}></CategoryList>
    </>
  );
};
export default CategoryPage;
