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
    // Destructure values from billData
    const { bill, tipPercent, numOfPeople } = billData;

    // Convert bill, tipPercent, and numOfPeople to numbers
    const billAmount = parseFloat(bill);
    const tipPercentage = parseFloat(tipPercent);
    const peopleCount = parseFloat(numOfPeople);

    if (billAmount !== 0 && tipPercentage !== 0 && peopleCount !== 0) {
      // Calculate tip amount
      const tipAmount = (billAmount * tipPercentage) / 100;

      // Calculate total amount with tip
      const totalAmount = billAmount + tipAmount;

      // Calculate amounts per person
      const tipAmountPerPerson = tipAmount / peopleCount;
      const totalAmountPerPerson = totalAmount / peopleCount;

      // Update state with calculated amounts
      setAmounts({
        tipAmountPerPerson,
        totalAmountPerPerson,
      });
    } else {
      // If not all required data is provided, set amounts to 0
      setAmounts({
        tipAmountPerPerson: 0,
        totalAmountPerPerson: 0,
      });
    }
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
