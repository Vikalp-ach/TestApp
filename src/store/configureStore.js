import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'
import rootReducer from '../reducers'
import { config } from '../config'
import AsyncStorage from '@react-native-community/async-storage';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const configureStore = () => {
  axios.defaults.baseURL = config.API_BASE_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  AsyncStorage.getItem('AUTH_TOKEN').then((value) => {
      axios.defaults.headers.common['Authorization'] = value;
   })
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware,))
  return store
}

export default configureStore
