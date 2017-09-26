import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import _ from 'lodash';

import { AlertProvider, connectAlert } from '../Alert';

describe('AlertProvider', () => {
  it('renders successfully', () => {
    const rendered = renderer
      .create(
        <AlertProvider>
          <View />
        </AlertProvider>,
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });

  it('adds alertWithType to child context', () => {
    const tree = renderer
      .create(
        <AlertProvider>
          <View />
        </AlertProvider>,
      )
      .toTree();

    expect(tree.type.childContextTypes.alertWithType).toBeTruthy();
  });

  it('adds alert to child context', () => {
    const tree = renderer
      .create(
        <AlertProvider>
          <View />
        </AlertProvider>,
      )
      .toTree();

    expect(tree.type.childContextTypes.alert).toBeTruthy();
  });
});

describe('connectAlert', () => {
  it('renders component wrapped with connectAlert successfully', () => {
    const WrappedComponent = connectAlert(View);
    const rendered = renderer.create(<WrappedComponent />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
