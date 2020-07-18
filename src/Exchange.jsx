import React from 'react';
import './exchange.css';
import BaseCurrency from './BaseCurrency';
import TargetCurrency from './TargetCurrency';
import ChangeButton from './ChangeButton';

const Exchange = () => {
  return (
    <div className='exchange'>
      <BaseCurrency />
      <ChangeButton />
      <TargetCurrency />
    </div>
  );
};

export default Exchange;
