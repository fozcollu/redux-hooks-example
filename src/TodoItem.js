import { css } from "emotion";
import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "./redux/store";

export default function TodoItem({ index }) {
  const { todo, deleteTodo } = useTodo(index);

  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

// Example of creating a custom hook to encapsulate the store
function useTodo(index) {
  const todo = useMappedState(
    useCallback(state => state.todos[index], [index])
  );

  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    () => dispatch({ type: "delete todo", index }),
    [index]
  );
  return { todo, deleteTodo };
}

const styles = {
  root: css`
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
