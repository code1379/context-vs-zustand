import createContext from "zustand/context";
import create from "zustand";
// https://docs.pmnd.rs/zustand/previous-versions/zustand-v3-create-context
export const createStore = () =>
  create((set) => ({
    count: 1,
    add: () =>
      set((state) => ({
        count: state.count + 1,
      })),
  }));

export const { Provider, useStore, useStoreApi } = createContext();
