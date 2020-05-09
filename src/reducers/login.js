import createReducer from './createReducers.js'
import * as types from '../actions/types'

export const logIn = createReducer({}, {
  [types.GET_INITIAL_VALUE](state, action) {
    return {
      ...state,
      success: false,
      error: false,
      loginError: false,
      data: false,
      registerData: false,
      registerError: false
    }
  },
  [types.LOGIN_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload
    }
  },
  [types.LOGIN_ERROR](state, action) {

    return {
      ...state,
      loginError: action.payload
    }
  },
  [types.REGISTER_SUCCESS](state, action) {
    return {
      ...state,
      registerData: action.payload
    }
  },
  [types.REGISTER_ERROR](state, action) {
    return {
      ...state,
      registerError: action.payload
    }
  }
});
