import React, { useState } from 'react';
import './Bill.css';

function Bill({ billData, updateBillData }) {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTip, setCustomTip] = useState('');
  const [clickedButton, setClickedButton] = useState("")

  const setValueFromForm = (eventOrValue) => {
    let name, value;
    
    if (typeof eventOrValue === 'object') {
      // If eventOrValue is an event object
      const { name, value } = eventOrValue.target;
      updateBillData({ [name]: parseFloat(value) });
  
      if (
        name === 'tipPercent' &&
        value !== 'Custom' // Check if the clicked button is not "Custom"
      ) {
        setShowCustomInput(false); // Hide the custom input
      } else if (value === 'Custom') {
        setShowCustomInput(true);
      }
      
      setClickedButton(value);
    } else {
      // If eventOrValue is a value directly
      updateBillData({ tipPercent: parseFloat(eventOrValue) });
      setClickedButton(eventOrValue);
    }
  };
  

  const handleCustomClick = () => {
    setShowCustomInput(true);
  };

  const handleCustomAmountChange = event => {
    setCustomTip(event.target.value);
  };

  const handleCustomAmountSubmit = event => {
    event.preventDefault();
    updateBillData({ tipPercent: parseFloat(customTip) });
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
            className={`button ${clickedButton === '5%' ? 'clicked' : ""}`} 
            name="tipPercent"
            value="5%"
            onClick={() => setValueFromForm('5%')}
          />
          <input
            type="button"
            className={`button ${clickedButton === '10%' ? 'clicked' : ""}`} 
            name="tipPercent"
            value="10%"
            onClick={() => setValueFromForm('10%')}
          />
          <input
            type="button"
            className={`button ${clickedButton === '15%' ? 'clicked' : ""}`} 
            name="tipPercent"
            value="15%"
            onClick={() => setValueFromForm('15%')}
          />
          <input
            type="button"
            className={`button ${clickedButton === '25%' ? 'clicked' : ""}`} 
            name="tipPercent"
            value="25%"
            onClick={() => setValueFromForm('25%')}
          />
          <input
            type="button"
            className={`button ${clickedButton === '50%' ? 'clicked' : ""}`} 
            name="tipPercent"
            value="50%"
            onClick={() => setValueFromForm('50%')}
          />
          <input
            type="button"
            className={`button ${clickedButton ? 'clicked' : ""}`} 
            name="tipPercent"
            value="Custom"
            onClick={handleCustomClick}
          />
          <div>
            {showCustomInput && (
              <div>
                <input
                  type="text"
                  name="custom-tip-amount"
                  value={customTip}
                  onChange={handleCustomAmountChange}
                />
                <button
                  className="btn-submit-custom"
                  onClick={handleCustomAmountSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
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
