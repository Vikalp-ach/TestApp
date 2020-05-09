import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import axios from 'axios'
import MainNavigator from './src/routes/index.js'
// import CheckNetwork from './src/utils/OfflineNotice'
import NavigationService from './src/navigationService/index.js';
import { View} from 'react-native';

const store = configureStore({});

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <MainNavigator
          ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      
      </Provider>
    );
  }
}
