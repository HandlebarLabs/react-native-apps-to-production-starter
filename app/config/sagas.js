import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

export const getLatestRate = currency => fetch(`https://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* ({ currency }) {
  try {
    let usedCurrency = currency;
    if (usedCurrency === undefined) {
      usedCurrency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, usedCurrency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
