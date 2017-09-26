import {
  getInitialConversion,
  changeCurrencyAmount,
  swapCurrency,
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../currencies';

it('creates a GET_INITIAL_CONVERSION action', () => {
  expect(getInitialConversion()).toMatchSnapshot();
});

it('creates a CHANGE_CURRENCY_AMOUNT action', () => {
  expect(changeCurrencyAmount(1000)).toMatchSnapshot();
});

it('creates a SWAP_CURRENCY action', () => {
  expect(swapCurrency()).toMatchSnapshot();
});

it('creates a CHANGE_BASE_CURRENCY action', () => {
  expect(changeBaseCurrency('USD')).toMatchSnapshot();
});

it('creates a CHANGE_QUOTE_CURRENCY action', () => {
  expect(changeQuoteCurrency('GBP')).toMatchSnapshot();
});
