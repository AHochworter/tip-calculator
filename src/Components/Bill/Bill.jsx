import React, { useState } from "react";
import "./Bill.css";

function Bill({ billData, updateBillData, customTip, setCustomTip }) {
  const [clickedButton, setClickedButton] = useState("");

  const setValueFromForm = (eventOrValue) => {
    if (typeof eventOrValue === "object") {
      const { name, value } = eventOrValue.target;
      updateBillData({ [name]: parseFloat(value) });

      if (name === "tipPercent") {
        if (value !== "Custom") {
          setClickedButton(value);
          setCustomTip("");
        } else {
          setClickedButton("");
        }
      }
    } else {
      if (eventOrValue !== "Custom") {
        setClickedButton(eventOrValue);
        updateBillData({ tipPercent: parseFloat(eventOrValue) });
        setCustomTip("");
      } else {
        setClickedButton("");
      }
    }
  };

  const handleCustomTipChange = (event) => {
    const value = event.target.value;
    setCustomTip(value);
    updateBillData({ tipPercent: parseFloat(value) });
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
          <img src="src/assets/images/icon-dollar.svg" className="input-icon" />
          <input
            type="number"
            id="bill"
            name="bill"
            className="input-field"
            placeholder="0"
            value={billData.bill}
            onChange={setValueFromForm}
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
            onClick={() => setValueFromForm("5%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "10%" ? "clicked" : ""}`}
            name="tipPercent"
            value="10%"
            onClick={() => setValueFromForm("10%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "15%" ? "clicked" : ""}`}
            name="tipPercent"
            value="15%"
            onClick={() => setValueFromForm("15%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "25%" ? "clicked" : ""}`}
            name="tipPercent"
            value="25%"
            onClick={() => setValueFromForm("25%")}
          />
          <input
            type="button"
            className={`button ${clickedButton === "50%" ? "clicked" : ""}`}
            name="tipPercent"
            value="50%"
            onClick={() => setValueFromForm("50%")}
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
        </label>
        <div className="input-with-icon">
          <img src="src/assets/images/icon-person.svg" className="input-icon" />
          <input
            type="number"
            id="num-of-people"
            name="numOfPeople"
            className="input-field num-people"
            placeholder="0"
            value={billData.numOfPeople}
            onChange={setValueFromForm}
          />
        </div>
      </div>
    </form>
  );
}

export default Bill;
