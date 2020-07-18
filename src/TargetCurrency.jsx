import React from 'react';
import { currencyList, currencyMap } from './config';

const TargetCurrency = () => {
  const [currencies, setCurrencies] = React.useState([]);

  const displayOption = () => {
    const currencyListWithoutSelected = currencyList.filter(
      (currency) => !currencies.includes(currency)
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
    setCurrencies([...currencies, e.target.value]);
  };

  const displaySelectedCurrencies = () => {
    if (currencies.length) {
      console.log(currencies);
      return currencies.map((currency) => {
        return <li key={currency}>{currencyMap[currency]}</li>;
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
          {displayOption()}
        </select>
      </form>
      <ul>{displaySelectedCurrencies()}</ul>
    </div>
  );
};

export default TargetCurrency;
