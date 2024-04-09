import React from 'react';
import './Tip.css';

function Tip({ billData, tipAmountPerPerson, totalAmountPerPerson }) {
  return (
    <>
      <div className="tip-amount-wrapper">
        <label htmlFor="tip-amount" className="amount-label">
          Tip Amount <br /> / person
        </label>
        <h2 className="dollar-amount">
          {isNaN(tipAmountPerPerson)
            ? '0.00'
            : `$${tipAmountPerPerson.toFixed(2)}`}
        </h2>
      </div>
      <div className="total-amount-wrapper">
        <label htmlFor="total-amount" className="amount-label">
          Total Amount <br /> / person
        </label>
        <h2 className="dollar-amount">
          {isNaN(totalAmountPerPerson)
            ? '0.00'
            : `$${totalAmountPerPerson.toFixed(2)}`}
        </h2>
      </div>
    </>
  );
}

export default Tip;
