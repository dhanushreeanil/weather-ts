import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";

const App = () => {
  // const [country, setCountry] = useState("");

  return (
    <div className="App">
      <h2> Weather App </h2>
      <hr />
      <Form />
    </div>
  );
};

export default App;
