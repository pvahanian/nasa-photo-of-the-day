import "./App.css";

import React, { useState, useEffect } from 'react'
import PicMaker from './components/PicMaker'

 



function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <PicMaker />
    </div>
  );
}

export default App;
