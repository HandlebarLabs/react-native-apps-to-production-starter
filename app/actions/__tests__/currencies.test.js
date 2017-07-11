import { getInitialConversion, changeCurrencyAmount } from '../currencies';

it('creates a GET_INITIAL_CONVERSION action', () => {
  expect(getInitialConversion()).toMatchSnapshot();
});

it('creates a CHANGE_CURRENCY_AMOUNT action', () => {
  expect(changeCurrencyAmount(1000)).toMatchSnapshot();
});
