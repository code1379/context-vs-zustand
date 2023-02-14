// import { PetContextProvider, Container } from "./components/ContextContainer";
// import { Container } from "./components/ZustandContainer";
// import { Container } from "./components/ReduxContainer";
// import ZustandRequest from "./components/ZustandRequest";
import CounterWrapper from "./components/Counter/CounterWrapper";
function App() {
  const handleAdd = (...args) => {
    console.log("args", args);
  };
  return (
    <div className="App">
      {/* <PetContextProvider> */}
      {/* <Container /> */}
      {/* </PetContextProvider> */}
      {/* <ZustandRequest /> */}
      <CounterWrapper />
      <CounterWrapper count={99} add={handleAdd} />
      <CounterWrapper />
    </div>
  );
}

export default App;
