import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import Themes from '../Themes';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders successfully', () => {
  const initialState = {};
  const rendered = shallow(<Themes />, { context: { store: mockStore(initialState) } });
  expect(rendered).toBeTruthy();
});
