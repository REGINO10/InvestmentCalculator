import Header from "./components/Header";
import { useState } from "react";
import Inputs from "./components/Inputs";
import Output from "./components/Output";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const stateUpdate = (valueSet) => {
    setInputValues(() => valueSet);
  };

  return (
    <>
      <Header />
      <div id="user-input">
        <Inputs inputs={{ ...inputValues }} valueChange={stateUpdate} />
      </div>
      <Output output={{ ...inputValues }} />
    </>
  );
}

export default App;
