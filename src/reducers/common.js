
import createReducer from './createReducers.js'
import * as types from '../actions/types'

  export const common = createReducer({}, {
    [types.GET_INITIAL_VALUE](state, action) {
      return {
        ...state,
        list: false,
        listError: false
      }
    },
    [types.GET_LIST_SUCCESS](state, action) {

      return {
        ...state,
        success: false,
        error: false,
        serverError: false,
        list: action.payload
      }
    },
  });
