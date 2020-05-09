import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../intefaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...todos]);
  };

  const toggleHandler = (id: number) => {
    console.log("test");
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("Вы уверены, что хотите удалить элемент?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </React.Fragment>
  );
};
