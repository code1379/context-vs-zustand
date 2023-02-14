import React, { createContext, useState, useContext, memo } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { addDogs, addCats } from "./petSlice";

const Child1 = memo(() => {
  console.log("Child1 render");
  const dogs = useSelector((state) => state.pet.dogs);
  return (
    <>
      <h3> Child1 - {dogs}</h3>
    </>
  );
});
const Child2 = memo(() => {
  console.log("Child2 render");
  const cats = useSelector((state) => state.pet.cats);

  return (
    <>
      <h3> Child2 - {cats}</h3>
    </>
  );
});

export const Container = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Child1 />
      <Child2 />
      <button onClick={() => dispatch(addDogs())}>dog +</button>
      <button onClick={() => dispatch(addCats())}>cat +</button>
    </>
  );
};
