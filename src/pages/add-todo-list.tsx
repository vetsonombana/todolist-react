import React, { useState } from "react";
import TodoForm from "../components/todo-form/TodoForm";
import TodoList from "../components/todolist/TodoList";

const AddTodoList = () => {
  const [todolist, setTodoList] = useState<any>([]);
  const handleSubmit = (item: any) => {
    setTodoList([...todolist, item]);
  };

  return (
    <>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList items={todolist} />
    </>
  );
};
export default AddTodoList;
