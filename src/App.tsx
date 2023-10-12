import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoList from "./pages/add-todo-list";
import TodoListPage from "./pages/todo-list-page";
import TransactionListPage from "./pages/transaction-list-page";
import CategoryPage from "./pages/category-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AddTodoList />}></Route> */}
        <Route path="/list" element={<TodoListPage />}></Route>
        <Route path="/" element={<TransactionListPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
