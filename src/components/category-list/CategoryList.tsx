import React from "react";
import { Categorie } from "../../models/entities";

const CategoryList: React.FC<{ categories: Categorie[] }> = ({
  categories = [],
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((categorie) => {
          return (
            <tr key={categorie.id}>
              <td>{categorie.id}</td>
              <td>{categorie.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CategoryList;
