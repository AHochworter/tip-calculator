import React, { useState } from 'react';
import './Bill.css';

function Bill({ billData, updateBillData }) {

  const setValueFromForm = event => {
    const { name, value } = event.target;
    
    const numericalValue = value.includes('%') ? parseFloat(value) : value;
  
    updateBillData({ [name]: numericalValue });
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
            className="button"
            name="tipPercent"
            value="5%"
            onClick={setValueFromForm}
          />
          <input
            type="button"
            className="button"
            name="tipPercent"
            value="10%"
            onClick={setValueFromForm}
          />
          <input
            type="button"
            className="button"
            name="tipPercent"
            value="15%"
            onClick={setValueFromForm}
          />
          <input
            type="button"
            className="button"
            name="tipPercent"
            value="25%"
            onClick={setValueFromForm}
          />
          <input
            type="button"
            className="button"
            name="tipPercent"
            value="50%"
            onClick={setValueFromForm}
          />
          <input
            type="button"
            className="button"
            name="tipPercent"
            value="Custom"
            onClick={setValueFromForm}
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
