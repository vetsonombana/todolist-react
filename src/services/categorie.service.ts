export const getCategories = () => {
  return fetch("http://localhost:8000/api/categories").then((response) =>
    response.json()
  );
};

export const addCategory = (category: any) => {
  return fetch("http://localhost:8000/api/categories", {
    method: "POST",
    body: JSON.stringify(category),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteCategory = (id: number) => {
  return fetch("http://localhost:8000/api/categories?id=" + id, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const modifyCategory = (category: any) => {
  return fetch("http://localhost:8000/api/categories", {
    method: "PUT",
    body: JSON.stringify(category),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
