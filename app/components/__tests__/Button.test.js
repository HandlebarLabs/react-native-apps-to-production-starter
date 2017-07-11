import React from 'react';
import renderer from 'react-test-renderer';
import buildStyles from '../../config/styles';

import { ClearButton, styles } from '../Button';

beforeAll(() => {
  buildStyles();
});

it('renders successfully', () => {
  const rendered = renderer.create(<ClearButton />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});

it('renders custom text pass via props', () => {
  const rendered = renderer.create(<ClearButton text="hey this is a test" />).toJSON();
  expect(rendered).toMatchSnapshot();
});
