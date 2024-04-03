import React from 'react';
import './Bill.css';

function Bill() {
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
            // value={}
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
            name="tip-percent"
            value="5%"
          />
          <input
            type="button"
            className="button"
            name="tip-percent"
            value="10%"
          />
          <input
            type="button"
            className="button"
            name="tip-percent"
            value="15%"
          />
          <input
            type="button"
            className="button"
            name="tip-percent"
            value="25%"
          />
          <input
            type="button"
            className="button"
            name="tip-percent"
            value="50%"
          />
          <input
            type="button"
            className="button"
            name="tip-percent"
            value="Custom"
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
            name="number-of-people"
            className="input-field num-people"
            placeholder="0"
          />
        </div>
      </div>
    </form>
  );
}

export default Bill;
