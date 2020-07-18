import React from 'react';
import './exchange.css';
import BaseCurrency from './BaseCurrency';

const Exchange = () => {
  return (
    <div className='exchange'>
      <BaseCurrency />
      <span>Change</span>
      <span>Target</span>
    </div>
  );
};

export default Exchange;
