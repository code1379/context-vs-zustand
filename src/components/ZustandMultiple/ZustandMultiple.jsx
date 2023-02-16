import React from "react";
import { useBoundStore } from "./store";

export default function ZustandMultiple() {
  const bears = useBoundStore((state) => state.bears);
  const addBear = useBoundStore((state) => state.addBear);
  return <div onClick={addBear}>ZustandMultiple - {bears}</div>;
}
