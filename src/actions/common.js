import * as types from './types';
import axios from 'axios'
import {
  LIST
} from '../utils/ApiConstants'

import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../navigationService/index.js';

export const getItems = (page) => async dispatch => {
  debugger
    dispatch({
      type: types.GET_INITIAL_VALUE,
    })
    const requestBody = {
      page: page
    }
    debugger
    axios.get(LIST, JSON.stringify(requestBody))
     .then((res)=>{
       debugger
    if (res.status == 200) {
      dispatch({
        type: types.GET_LIST_SUCCESS,
        payload: res.data.hits
      })
    }
  }).catch(function (error) {
    debugger
    if(error.response){
      dispatch({
        type: types.GET_LIST_ERROR,
        payload: error.response
      })
    }
  })
}
