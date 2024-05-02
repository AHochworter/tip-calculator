import React, { useState } from "react";
import "./Bill.css";

function Bill({ billData, updateBillData, customTip, setCustomTip }) {
  const [clickedButton, setClickedButton] = useState("");

  const parseFormValue =  (value) => {
    const parsedValue = parseFloat(value)
    return parsedValue > 0 ? parsedValue : null;
  }

  const handleRegularInputChange = (name, value) => {
    const parsedValue = parseFormValue(value)
    if(parsedValue !== null) {
      updateBillData({ [name]: parsedValue });
    }
  }

  const handleTipPercentChange = (value) => {
    if (value !== "Custom") {
      setClickedButton(value);
      setCustomTip("");
      updateBillData({ "tipPercent": parseFloat(value) });
    } else {
      setClickedButton("");
    }
  }

  const handleCustomTipChange = (event) => {
    const { value } = event.target;
    if (!isNaN(value)) { 
      setCustomTip(value); 
      updateBillData({ "tipPercent": value }); 
    } else {
      setCustomTip(""); 
    }
  };

  const identifyInputType = (eventOrValue) => {
    if (typeof eventOrValue === "object") {
      const { name, value } = eventOrValue.target;
      if (name === "bill" || name === "numOfPeople") {
        handleRegularInputChange(name, value);
      } else if (name === "tipPercent") {
        updateBillData({ [name]: parseFloat(value) }); 
      } 
    } else {
      handleTipPercentChange(eventOrValue );
    }
  };
  
  const resetButtonColors = () => {
    setClickedButton("");
  };

  return (
    <form className="form-bill-input">
      <div className="bill-input-wrapper">
        <label htmlFor="bill" className="bill-label">
          Bill
        </label>
        <div className="input-with-icon">
          <img src="/assets/images/icon-dollar.svg" className="input-icon" />
          <input
            type="number"
            id="bill"
            name="bill"
            className="input-field"
            placeholder="0"
            value={billData.bill}
            onChange={identifyInputType}
          />
        </div>
      </div>
      <div className="tip-percent-wrapper">
        <label htmlFor="tip-percent" className="tip-percent-label">
          Select Tip %
        </label>
        <div className="button-wrapper">
          <input
            type="button"
            className={`button ${clickedButton === "5%" ? "clicked" : ""}`}
            name="tipPercent"
            value="5%"
            onClick={() => identifyInputType("5%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "10%" ? "clicked" : ""}`}
            name="tipPercent"
            value="10%"
            onClick={() => identifyInputType("10%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "15%" ? "clicked" : ""}`}
            name="tipPercent"
            value="15%"
            onClick={() => identifyInputType("15%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "25%" ? "clicked" : ""}`}
            name="tipPercent"
            value="25%"
            onClick={() => identifyInputType("25%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "50%" ? "clicked" : ""}`}
            name="tipPercent"
            value="50%"
            onClick={() => identifyInputType("50%")}
          />
          <input
            type="text"
            className="custom-tip"
            name="customTip"
            placeholder="Custom"
            value={customTip}
            onClick={resetButtonColors}
            onChange={handleCustomTipChange}
          />
        </div>
      </div>
      <div className="num-of-people-wrapper">
        <label htmlFor="number-of-people" className="num-people-label">
          Number of People
          {billData.numOfPeople === 0 && (<p className="error-zero">Can't be zero</p>)}
        </label>
        <div className="input-with-icon">
          <img src="/assets/images/icon-person.svg" className="input-icon" />
            <input
              type="number"
              id="num-of-people"
              name="numOfPeople"
              className="input-field num-people"
              placeholder="0"
              value={billData.numOfPeople}
              onChange={identifyInputType}
              />
        </div>
      </div>
    </form>
  );
}

export default Bill;
