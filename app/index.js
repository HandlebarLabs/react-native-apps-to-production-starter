import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/es/integration/react';
import codePush from 'react-native-code-push';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import configureStore from './config/store';
import buildStyles from './config/styles';

buildStyles();

class App extends React.Component {
  constructor(props) {
    super(props);

    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.persistor}>
          <AlertProvider>
            <Navigator onNavigationStateChange={null} />
          </AlertProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default codePush(App);
