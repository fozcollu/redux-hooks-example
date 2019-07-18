import React, { useState, useRef, useMemo } from "react";
import { css } from "emotion";

function useTodos(initial) {
  const [todos, setTodos] = useState([...initial]);

  const addTodo = action => setTodos(prevTodos => [...prevTodos, action]);

  const deleteTodo = todo => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item === todo);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return [todos, { addTodo, deleteTodo }];
}

const Title = props => {
  console.log("title render oldu");
  return <h1>{props.title}</h1>;
};

const CustomHookExample = () => {
  const initialTodos = ["Action 1", "Action2", "Action3"];
  const [todos, { addTodo, deleteTodo }] = useTodos(initialTodos);
  let todoRef = useRef();

  const [title, setTitle] = useState("Custom Hooks Example");
  return (
    <div>
      <div className={styles.title}>
        {useMemo(
          () => (
            <Title title={title} />
          ),
          [title]
        )}
        <input
          placeholder="Enter title"
          type="text"
          onKeyDown={e => {
            if (e.key === "Enter") setTitle(e.target.value);
          }}
        />
      </div>
      <input
        placeholder="What needs to be done?"
        className={styles.input}
        ref={todoRef}
        type="text"
        onKeyDown={e => {
          if (e.key === "Enter") addTodo(todoRef.current.value);
        }}
      />
      <div className={styles.count}>You have {todos.length} todos</div>
      <ul className={styles.todos}>
        {todos.map(todo => (
          <li className={styles.todoItem}>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  input: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `,
  title: css`
    &:hover {
      input {
        display: initial;
      }
    }
    input {
      box-sizing: border-box;
      font-size: 16px;
      margin-bottom: 24px;
      padding: 8px 12px;
      width: 100%;
      display: none;
    }
  `,
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `,
  todoItem: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;
    &:hover {
      background-color: #efefef;
      button {
        display: block;
      }
    }
    button {
      display: none;
    }
  `
};

export default CustomHookExample;
