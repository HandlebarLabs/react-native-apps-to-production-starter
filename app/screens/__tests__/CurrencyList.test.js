import React from 'react';
import { shallow } from 'enzyme';

import configureStore from 'redux-mock-store';

import CurrencyList from '../CurrencyList';

const mockStore = configureStore([]);

it('renders successfully', () => {
  const initialState = { currencies: { baseCurrency: 'USD', quoteCurrency: 'GBP' }, theme: { primaryColor: 'red' } };
  const navigation = { state: { params: { type: 'quote' } } };

  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: { store: mockStore(initialState) },
  });
  expect(rendered.dive()).toMatchSnapshot();
});
