import { useState, useEffect } from 'react';
import './App.css';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';

function App() {
  const [billData, setBillData] = useState({
    bill: 0,
    tipPercent: 0,
    numOfPeople: 0,
  });

  const [amounts, setAmounts] = useState({
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0,
  });

  const updateBillData = data => {
    setBillData({ ...billData, ...data });
  };

  useEffect(() => {
    calculateAmounts();
  }, [billData]);

  const calculateAmounts = () => {
    const bill = parseFloat(billData.bill);
    const tipPercent = parseFloat(billData.tipPercent);
    const numOfPeople = parseFloat(billData.numOfPeople);

    //calculate tip amount
    const tipAmount = (bill * tipPercent) / 100;
    console.log('tipAmount', tipAmount);

    //calculate total amount with tip
    const totalAmount = bill + tipAmount;
    console.log('bill', billData.bill);

    //calculate amounts per person
    const tipAmountPerPerson = tipAmount / numOfPeople;
    console.log('tipAmountPerPerson', tipAmountPerPerson);
    const totalAmountPerPerson = totalAmount / numOfPeople;

    setAmounts({
      tipAmountPerPerson,
      totalAmountPerPerson,
    });
  };

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
          <Tip
            billData={billData}
            tipAmountPerPerson={amounts.tipAmountPerPerson}
            totalAmountPerPerson={amounts.totalAmountPerPerson}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
