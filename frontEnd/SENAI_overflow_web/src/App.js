import { Router } from "react-router-dom";
import { GlobalStyleComponent } from "./GlobalStyles";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Teste from "./Teste";

function App() {
  return (
    <>
      <GlobalStyleComponent />
      <Router/>

      {/* <Teste></Teste> */}
    </>
  );

}

export default App;
