import React from 'react';
import { currencyList, currencyMap } from './config';

const BaseCurrency = () => {
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
    console.log(e.target.value);
  };

  return (
    <div>
      Please, select base currency
      <form>
        <select name='base-currency' id='' onChange={handleChange}>
          {displayOption()}
        </select>
      </form>
    </div>
  );
};

export default BaseCurrency;
