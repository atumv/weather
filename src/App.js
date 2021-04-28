import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NoTasksMessage from "./components/NoTasksMessage";
import "./styles/style.css";
import "./styles/media.css";

const App = () => {
  const todos = useSelector(state => state);

  return (
    <div className="wrapper">
      <Header />
      <Form />
      {!todos.length ? <NoTasksMessage /> : <TodoList todos={todos} />}
    </div>
  );
};

export default App;
