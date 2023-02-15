import React, { createContext, useState, useContext, memo } from "react";
import ReactDom from "react-dom";

const PetContext = createContext(null);

export const PetContextProvider = (props) => {
  const [dogs, setDogs] = useState(1);
  const [cats, setCats] = useState(2);
  return (
    <PetContext.Provider value={{ dogs, cats, setDogs, setCats }}>
      {props.children}
    </PetContext.Provider>
  );
};

const Child1 = memo(() => {
  console.log("Child1 render");
  const { dogs, setDogs } = useContext(PetContext);
  return (
    <>
      <h3> Child1 - {dogs}</h3>
      <button onClick={() => setDogs(dogs + 1)}>dog +</button>
    </>
  );
});
const Child2 = memo(() => {
  console.log("Child2 render");
  const { cats, setCats } = useContext(PetContext);
  return (
    <>
      <h3> Child2 - {cats}</h3>
      <button onClick={() => setCats(cats + 1)}>cats +</button>
    </>
  );
});

export const Container = () => {
  return (
    <>
      <PetContextProvider>
        <Child1 />
        <Child2 />
      </PetContextProvider>
    </>
  );
};
