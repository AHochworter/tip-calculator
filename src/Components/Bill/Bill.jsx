import React, { useState } from 'react';
import './Bill.css';

function Bill({ billData, updateBillData }) {
  //these two uses of state are an attempt to clear the 0 placeholder when you tab into the input fields.
  const [billPlaceholder, setBillPlaceholder] = useState('0');
  const [numOfPeoplePlaceholder, setNumOfPeoplePlaceholder] = useState('0');

  const setValueFromForm = event => {
    const { name, value } = event.target;

    const numericalValue = value.includes('%') ? parseFloat(value) : value;

    updateBillData({ [name]: numericalValue });
  };

  // this is the function that will set the placeholders to an empty string
  const clearPlaceholder = field => {
    if (field === 'bill') {
      setBillPlaceholder('');
    } else if (field === 'numOfPeople') {
      setNumOfPeoplePlaceholder('');
    }
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
            placeholder={billPlaceholder}
            onFocus={() => clearPlaceholder('bill')}
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
            onClick={setValueFromForm} //don't think this is going to work
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
            placeholder={numOfPeoplePlaceholder}
            onFocus={() => clearPlaceholder('numOfPeople')}
            value={billData.numOfPeople}
            onChange={setValueFromForm}
          />
        </div>
      </div>
    </form>
  );
}

export default Bill;
