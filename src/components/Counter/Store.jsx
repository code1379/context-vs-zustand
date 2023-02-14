import createContext from "zustand/context";
import create from "zustand";

export const createStore = () =>
  create((set) => ({
    count: 1,
    add: () =>
      set((state) => ({
        count: state.count + 1,
      })),
  }));

export const { Provider, useStore, useStoreApi } = createContext();
