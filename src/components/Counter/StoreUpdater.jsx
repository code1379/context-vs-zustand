import React from "react";
import { useStoreApi } from "./Store";
import { useEffect } from "react";
// https://juejin.cn/post/7182462103297458236#heading-7
export const useStoreUpdater = (key, value, deps = [value], updater) => {
  const store = useStoreApi();

  useEffect(() => {
    if (typeof value !== "undefined") {
      store.setState({ [key]: value });
    }
  }, deps);
};

const StoreUpdater = ({ count, add }) => {
  useStoreUpdater("count", count);
  useStoreUpdater("add", add);
};

export default StoreUpdater;
