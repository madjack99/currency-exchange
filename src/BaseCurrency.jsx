import React from 'react';

const currencyList = [
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR',
];

const BaseCurrency = () => {
  const displayOption = () => {
    return currencyList.map((currency) => {
      return (
        <option value={currency} key={currency}>
          {currency}
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
