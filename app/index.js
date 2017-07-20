import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import buildStyles from './config/styles';

buildStyles();

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider>
          <Navigator onNavigationStateChange={null} />
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
