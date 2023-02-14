// import { PetContextProvider, Container } from "./components/ContextContainer";
// import { Container } from "./components/ZustandContainer";
// import { Container } from "./components/ReduxContainer";
// import ZustandRequest from "./components/ZustandRequest";
import CounterWrapper from "./components/Counter/CounterWrapper";
function App() {
  return (
    <div className="App">
      {/* <PetContextProvider> */}
      {/* <Container /> */}
      {/* </PetContextProvider> */}
      {/* <ZustandRequest /> */}
      <CounterWrapper />
      <CounterWrapper />
      <CounterWrapper />
    </div>
  );
}

export default App;
