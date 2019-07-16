import React from "react";
import "./App.css";
import { css } from "emotion";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function App() {
  return (
    <div className={styles.root}>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

const styles = {
  root: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    margin: 24px auto;
    padding: 4px 24px 24px 24px;
    width: 300px;
  `
};
