import React from "react";

const TodoList: React.FC<{ items: any }> = ({ items }) => {
  return (
    <u>
      {items.map((item: any) => {
        return (
          <li>
            {item.title} - {item.description}
          </li>
        );
      })}
    </u>
  );
};
export default TodoList;
