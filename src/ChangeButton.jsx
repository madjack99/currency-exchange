import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExchangeRate } from './actions/actions';

import './changeButton.css';

const ChangeButton = () => {
  const { baseCurrency, targetCurrencyArr } = useSelector((state) => state);
  const dispatch = useDispatch();
  const baseUrl = 'https://api.exchangeratesapi.io/latest';

  const handleClick = () => {
    const targetUrl = `${baseUrl}?base=${baseCurrency}&symbols=${targetCurrencyArr.join(
      ','
    )}`;
    dispatch(getExchangeRate(targetUrl));
    console.log(targetUrl);
  };

  return (
    <button className='change-button' onClick={handleClick}>
      Show exchange rate
    </button>
  );
};

export default ChangeButton;
