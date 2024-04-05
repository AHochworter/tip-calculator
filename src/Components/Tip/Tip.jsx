import React from 'react';
import './Tip.css';

function Tip() {
  return (
    <>
      <div className="tip-amount-wrapper">
        <label htmlFor="tip-amount" className="amount-label">
          Tip Amount <br /> / person
        </label>
        <h2 className="dollar-amount">$0.00</h2>
      </div>
      <div className="total-amount-wrapper">
        <label htmlFor="total-amount" className="amount-label">
          Total Amount <br /> / person
        </label>
        <h2 className="dollar-amount">$0.00</h2>
      </div>
    </>
  );
}

export default Tip;
