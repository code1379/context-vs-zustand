import React, { createContext, useState, useContext, memo } from "react";
import ReactDom from "react-dom";
import { create } from "zustand";

const useStore = create((set) => ({
  dogs: 1,
  cats: 2,
  setDogs: () =>
    set((state) => ({
      dogs: state.dogs + 1,
    })),
  setCats: () =>
    set((state) => ({
      cats: state.cats + 1,
    })),
}));

const Child1 = memo(() => {
  console.log("Child1 render");
  const dogs = useStore((state) => state.dogs);
  return (
    <>
      <h3> Child1 - {dogs}</h3>
    </>
  );
});
const Child2 = memo(() => {
  console.log("Child2 render");
  const cats = useStore((state) => state.cats);

  return (
    <>
      <h3> Child2 - {cats}</h3>
    </>
  );
});

export const Container = () => {
  // const setDogs = useStore((state) => state.setDogs);
  // const setCats = useStore((state) => state.setCats);
  const { setDogs, setCats } = useStore((state) => ({
    setDogs: state.setDogs,
    setCats: state.setCats,
  }));
  return (
    <>
      <Child1 />
      <Child2 />
      <button onClick={setDogs}>dog +</button>
      <button onClick={setCats}>cat +</button>
    </>
  );
};
