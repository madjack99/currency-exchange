import React from 'react';
import { currencyList, currencyMap } from './config';

const TargetCurrency = () => {
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
      Select your target currency
      <form>
        <select name='target-currency' id='' onChange={handleChange}>
          {displayOption()}
        </select>
      </form>
    </div>
  );
};

export default TargetCurrency;
