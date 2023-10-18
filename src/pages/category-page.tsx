import { useCallback, useEffect, useState } from "react";
import CategoryForm from "../components/category-form/CategoryForm";
import CategoryList from "../components/category-list/CategoryList";
import {
  addCategory,
  deleteCategory,
  getCategories as getCategoriesService,
  modifyCategory,
} from "../services/categorie.service";
import { Categorie } from "../models/entities";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CategoryPage = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (category: any) => {
    addCategory(category).then((data) => {
      category.id = data.id;
      setCategories([...categories, category]);
    });
  };

  const getCategories = useCallback(() => {
    getCategoriesService().then((data) => {
      setCategories(data);
    });
  }, []);
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleSubmitDeleteModal = (selectedCategory: Categorie) => {
    deleteCategory(selectedCategory.id).then(() => {
      getCategories();
    });
  };

  const handleSubmitModifyModal = (selectedCategory: Categorie) => {
    modifyCategory(selectedCategory).then(() => {
      getCategories();
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="w-50">
          <BsFillArrowLeftSquareFill
            onClick={() => {
              navigate(-1);
            }}
          />
          <CategoryForm handleSubmit={handleSubmit}></CategoryForm>
          <CategoryList
            categories={categories}
            handleSubmitDeleteModal={handleSubmitDeleteModal}
            handleSubmitModifyModal={handleSubmitModifyModal}
          ></CategoryList>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
