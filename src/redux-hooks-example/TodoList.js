import { css } from "emotion";
import React, { useCallback } from "react";
import { useMappedState } from "../redux/store";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { lastUpdated, todoCount } = useMappedState(
    useCallback(
      state => ({
        lastUpdated: state.lastUpdated,
        todoCount: state.todos.length
      }),
      []
    )
  );

  return (
    <div>
      <div className={styles.count}>You have {todoCount} todos</div>
      <ul className={styles.todos}>
        {new Array(todoCount).fill(null).map((_, index) => (
          <TodoItem index={index} key={index} />
        ))}
      </ul>
      <div className={styles.lastUpdated}>
        Last updated: {lastUpdated ? new Date(lastUpdated).toString() : "never"}
      </div>
    </div>
  );
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `
};
