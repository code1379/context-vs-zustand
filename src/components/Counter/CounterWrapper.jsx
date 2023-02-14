import React from "react";
import { createStore, Provider } from "./Store";
import Counter from "./Counter";
import StoreUpdater from "./StoreUpdater";

export default function CounterWrapper(props) {
  return (
    <Provider createStore={createStore}>
      <div>CounterWrapper</div>
      <Counter />
      <StoreUpdater {...props} />
    </Provider>
  );
}
