import React from "react";

export const ToDoForm = () => {
  return (
    <form className="ToDoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="O que vc vai fazer hoje?"
      />

      <button type="submit" className="todo-btn">
        Adicione uma tarefa
      </button>
    </form>
  );
};

export default ToDoForm