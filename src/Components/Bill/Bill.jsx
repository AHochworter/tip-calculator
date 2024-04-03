import React from 'react';
import './Bill.css';

function Bill() {
  return (
    <form className='bill-input-wrapper'>
      <label for="bill" className='bill-label'>Bill</label>
        <input 
        type="text" 
        id="bill" 
        name="bill" 
        // value={}
        />
        <label for="tip-percent" className='tip-percent-label'>Select Tip %</label>
        <input 
        type='button'
        name='tip-percent'
        value="5%"
        />
        <input 
        type='button'
        name='tip-percent'
        value="10%"
        />
        <input 
        type='button'
        name='tip-percent'
        value="15%"
        />
        <input 
        type='button'
        name='tip-percent'
        value="25%"
        />
        <input 
        type='button'
        name='tip-percent'
        value="50%"
        />
        <input 
        type='button'
        name='tip-percent'
        value="Custom"
        />
    </form>
  );
}

export default Bill;
