import { useState } from "react";
import "./App.css";
import Bill from "../Bill/Bill";
import Tip from "../Tip/Tip";

function App() {
  return (
    <div className="app">
      <header className='header'>
        <img src='src/assets/images/logo.svg' alt='splitter logo' />
      </header>
      <div className='calculator-wrapper'>
        <div className="bill-wrapper">
        <Bill />
        </div>
        <div className="tip-wrapper">
        <Tip />
        </div>
      </div>
    </div>
  );
}

export default App;
