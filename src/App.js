import React from "react";
import "./App.css";
import { css } from "emotion";
import CustomHookExample from "./CustomHookExample";
import ReduxHooksExample from "./redux-hooks-example/ReduxHooksExample";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className={styles.root}>
        <CustomHookExample />
      </div>
      <div className={styles.root}>
        <ReduxHooksExample />
      </div>
    </div>
  );
}

const styles = {
  root: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    margin: 24px auto;
    padding: 4px 24px 24px 24px;
    width: 500px;
  `
};
