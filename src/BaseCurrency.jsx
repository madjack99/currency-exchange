import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyList, currencyMap } from './config';
import { setBaseCurrency } from './actions/actions';

import './currencyList.css';

const BaseCurrency = () => {
  const dispatch = useDispatch();
  const { baseCurrency } = useSelector((state) => state);

  const displayOption = () => {
    return currencyList.map((currency) => {
      return (
        <option value={currency} key={currency}>
          {currencyMap[currency]}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    dispatch(setBaseCurrency(e.target.value));
  };

  return (
    <div>
      Please, select base currency
      <form>
        <select name='base-currency' id='' onChange={handleChange}>
          <option>Choose currency</option>
          {displayOption()}
        </select>
      </form>
      <ul>
        <li>{baseCurrency}</li>
      </ul>
    </div>
  );
};

export default BaseCurrency;
