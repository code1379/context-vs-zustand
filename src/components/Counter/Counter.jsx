import React from "react";
import { useStore, useStoreApi } from "./Store";

export default function Counter() {
  const { count, add } = useStore();

  const storeApi = useStoreApi();
  console.log("storeApi", storeApi);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={add}>+</button>
    </div>
  );
}
