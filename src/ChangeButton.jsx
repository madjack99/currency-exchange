import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExchangeRate } from './actions/actions';

import './changeButton.css';

const ChangeButton = () => {
  const [error, setError] = React.useState(null);

  const { baseCurrency, targetCurrencyArr } = useSelector((state) => state);
  const dispatch = useDispatch();
  const baseUrl = 'https://api.exchangeratesapi.io/latest';

  const handleClick = () => {
    setError(null);
    if (!baseCurrency) {
      setError('Please add base currency');
      return;
    }

    const targetUrl = `${baseUrl}?base=${baseCurrency}&symbols=${targetCurrencyArr.join(
      ','
    )}`;
    dispatch(getExchangeRate(targetUrl));
    console.log(targetUrl);
  };

  return (
    <div>
      <button className='change-button' onClick={handleClick}>
        Show exchange rate
      </button>
      <p>{error}</p>
    </div>
  );
};

export default ChangeButton;
