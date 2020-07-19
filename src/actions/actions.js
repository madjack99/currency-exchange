import { GET_EXCHANGE_RATE, SET_BASE_CURRENCY, SET_TARGET_CURRENCY } from './actionTypes';

export const getExchangeRate = async (url) => {
  return (dispatch) => {
    const res = await fetch(url);
    const data = res.json();
    return {
      type: GET_EXCHANGE_RATE,
      payload: data.rates
    }
  }
}

export const setBaseCurrency = currency => ({
  type: SET_BASE_CURRENCY,
  payload: currency,
})

export const setTargetCurrency = currencyArr => ({
  type: SET_TARGET_CURRENCY,
  payload: currencyArr,
})