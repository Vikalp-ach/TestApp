import { combineReducers } from 'redux';

import * as commonReducers from './common';
import * as logInReducers from './login';

import createReducer from './createReducers.js'

const appReducer = combineReducers(Object.assign(
  commonReducers,
  logInReducers
));

const reducer = (state, action) => {
  if (action.type === 'APP_USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default reducer
