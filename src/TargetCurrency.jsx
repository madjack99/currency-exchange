import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTargetCurrency } from './actions/actions';
import { currencyList, currencyMap } from './config';

const TargetCurrency = () => {
  const dispatch = useDispatch();
  const { targetCurrencyArr } = useSelector((state) => state);

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
    console.log('delete');
    const filteredCurrencies = targetCurrencyArr.filter(
      (currency) => currency !== deletedCurrency
    );
    dispatch(setTargetCurrency(filteredCurrencies));
  };

  const displaySelectedCurrencies = () => {
    if (targetCurrencyArr.length) {
      console.log(targetCurrencyArr);
      return targetCurrencyArr.map((currency) => {
        return (
          <li
            key={currency}
            onClick={deleteCurrency(currency)}
          >{`${currencyMap[currency]}, ${currency}`}</li>
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
    </div>
  );
};

export default TargetCurrency;
