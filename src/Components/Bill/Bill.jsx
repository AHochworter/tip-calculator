import React from 'react';
import './Bill.css';

function Bill() {
  return (
    <form className="bill-input-wrapper">
      <label htmlFor="bill" className="bill-label">
        Bill
      </label>
      <input
        type="text"
        id="bill"
        name="bill"
        // value={}
      />
      <div className="tip-percent-wrapper">
        <label htmlFor="tip-percent" className="tip-percent-label">
          Select Tip %
        </label>
      </div>
      <div className="button-wrapper">
        <input type="button" className="button" name="tip-percent" value="5%" />
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
      <label htmlFor="number-of-people" className="num-people-label">
        Number of People
      </label>
      <input
        type="text"
        id="num-of-people"
        name="number-of-people"
        // value={}
      />
    </form>
  );
}

export default Bill;
