import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTargetCurrency } from './actions/actions';
import { currencyList, currencyMap } from './config';

import './currencyList.css';

const TargetCurrency = () => {
  const dispatch = useDispatch();
  const { targetCurrencyArr, exchangeRate } = useSelector((state) => state);

  const displayOption = () => {
    const currencyListWithoutSelected = currencyList.filter(
      (currency) => !targetCurrencyArr.includes(currency)
    );
    return currencyListWithoutSelected.map((currency) => {
      return (
        <option value={currency} key={currency}>
          {currencyMap[currency]}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    dispatch(setTargetCurrency([...targetCurrencyArr, e.target.value]));
  };

  const deleteCurrency = (deletedCurrency) => () => {
    const filteredCurrencies = targetCurrencyArr.filter(
      (currency) => currency !== deletedCurrency
    );
    dispatch(setTargetCurrency(filteredCurrencies));
  };

  const displaySelectedCurrencies = () => {
    if (targetCurrencyArr.length) {
      return targetCurrencyArr.map((currency) => {
        return (
          <li key={currency} onClick={deleteCurrency(currency)}>{`${
            currencyMap[currency]
          }, ${currency}: ${
            exchangeRate[currency] ? exchangeRate[currency].toFixed(3) : ''
          }`}</li>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      Select your target currency
      <form>
        <select name='target-currency' id='' onChange={handleChange}>
          <option>Choose currency</option>
          {displayOption()}
        </select>
      </form>
      <ul>{displaySelectedCurrencies()}</ul>
      <p>{targetCurrencyArr.length ? 'Click on currency to delete' : ''}</p>
    </div>
  );
};

export default TargetCurrency;
