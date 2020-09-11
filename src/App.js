import "./App.css";

import React, { useState, useEffect } from "react";
import InfoDisplay from "./components/InfoDisplay";




function App() {
  return (
    <div className="App">
      <p>
        <span role="img" aria-label="go!">
          🚀
        </span>
      </p>

      <InfoDisplay />
     
    </div>
  );
}

export default App;
