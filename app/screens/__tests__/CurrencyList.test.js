import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import CurrencyList from '../CurrencyList';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders successfully', () => {
  const initialState = {
    currencies: {
      baseCurrency: 'USD',
      quoteCurrency: 'GBP',
    },
    theme: {
      primaryColor: 'red',
    },
  };

  const navigation = {
    state: { params: {} },
  };

  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: { store: mockStore(initialState) },
  });
  expect(rendered.dive()).toMatchSnapshot();
});
