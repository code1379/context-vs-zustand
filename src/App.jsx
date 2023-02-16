// import { Container } from "./components/ContextContainer";
// import { Container } from "./components/ZustandContainer";
// import { Container } from "./components/ReduxContainer";
// import ZustandRequest from "./components/ZustandRequest";
// import CounterWrapper from "./components/Counter/CounterWrapper";
// import { Container } from "./components/ContextSelectorContainer";
import { Container } from "./components/ContextArray";
import ZustandMultiple from "./components/ZustandMultiple/ZustandMultiple";

function App() {
  return (
    <div className="App">
      <Container />
      <ZustandMultiple />
      {/* <ZustandRequest /> */}
      {/* <CounterWrapper />
      <CounterWrapper count={99} add={handleAdd} />
      <CounterWrapper /> */}
      {/* <Container /> */}
    </div>
  );
}

export default App;
