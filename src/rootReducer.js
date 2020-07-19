import {
  GET_EXCHANGE_RATE,
  SET_BASE_CURRENCY,
  SET_TARGET_CURRENCY,
} from './actions/actionTypes';

const initState = {
  baseCurrency: null,
  targetCurrencyArr: [],
  exchangeRate: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload,
      };
    case SET_TARGET_CURRENCY:
      return {
        ...state,
        targetCurrencyArr: action.payload,
      };
    case GET_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRate: action.payload,
      };
    default:
      return state;
  }
};
