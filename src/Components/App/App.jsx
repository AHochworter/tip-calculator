import { useState } from 'react';
import './App.css';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';

function App() {
  const [billData, setBillData] = useState({
    bill: 0,
    tipPercent: 0,
    numOfPeople: 0,
  });

  const updateBillData = data => {
    setBillData({ ...billData, ...data });
  };

  //function to do the math might go here??  There's a note over in Tip component?  Devin thinks we might try it here first.

  return (
    <div className="app">
      <header className="header">
        <img src="src/assets/images/logo.svg" alt="splitter logo" />
      </header>
      <div className="calculator-wrapper">
        <div className="bill-wrapper">
          <Bill billData={billData} updateBillData={updateBillData} />
        </div>
        <div className="tip-wrapper">
          <Tip billData={billData} />
        </div>
      </div>
    </div>
  );
}

export default App;
