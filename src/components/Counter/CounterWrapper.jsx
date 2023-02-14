import React from "react";
import { createStore, Provider } from "./Store";
import Counter from "./Counter";

export default function CounterWrapper() {
  return (
    <Provider createStore={createStore}>
      <div>CounterWrapper</div>
      <Counter />
    </Provider>
  );
}
