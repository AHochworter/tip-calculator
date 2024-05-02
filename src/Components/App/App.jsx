import { useState, useEffect } from "react";
import "./App.css";
import Bill from "../Bill/Bill";
import Tip from "../Tip/Tip";

function App() {
  const [billData, setBillData] = useState({
    bill: "",
    tipPercent: "",
    numOfPeople: "",
  });

  const [customTip, setCustomTip] = useState("");

  const [amounts, setAmounts] = useState({
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0,
  });

  const updateBillData = (data) => {
    setBillData({ ...billData, ...data });
  };

  useEffect(() => {
    calculateAmounts();
  }, [billData]);

  const calculateAmounts = () => {
    const { bill, tipPercent, numOfPeople } = billData;

    const billAmount = parseFloat(bill);
    const tipPercentage = parseFloat(tipPercent);
    const peopleCount = parseFloat(numOfPeople);

    if (billAmount !== 0 && tipPercentage !== 0 && peopleCount !== 0) {
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;
      const tipAmountPerPerson = tipAmount / peopleCount;
      const totalAmountPerPerson = totalAmount / peopleCount;

      setAmounts({
        tipAmountPerPerson,
        totalAmountPerPerson,
      });
    } else {
      setAmounts({
        tipAmountPerPerson: 0,
        totalAmountPerPerson: 0,
      });
    }
  };

  const resetCustomTip = () => {
    setCustomTip("");
  };

  return (
    <div className="app">
      <header className="header">
        <img src="/assets/images/logo.svg" alt="splitter logo" />
      </header>
      <div className="calculator-wrapper">
        <div className="bill-wrapper">
          <Bill
            billData={billData}
            updateBillData={updateBillData}
            customTip={customTip}
            setCustomTip={setCustomTip}
          />
        </div>
        <div className="tip-wrapper">
          <Tip
            setBillData={setBillData}
            tipAmountPerPerson={amounts.tipAmountPerPerson}
            totalAmountPerPerson={amounts.totalAmountPerPerson}
            resetCustomTip={resetCustomTip}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
