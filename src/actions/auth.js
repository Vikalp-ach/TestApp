import * as types from './types';
import axios from 'axios'
import {
  LOGIN,
  SIGNUP,
  VERIFY,
  RESEND_OTP,
  FORGOT_PASSWORD
} from '../utils/ApiConstants'
import {
  AUTH_TOKEN,
  USER_INFO,
  USER_TYPE,
  IS_LOGIN
} from '../utils/AppConstants'
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../navigationService/index.js';

export const login = (email, password) => async dispatch => {
  debugger
    dispatch({
      type: types.GET_INITIAL_VALUE,
    })
    const requestBody = {
      email: email,
      password: password,
    }
    debugger
     axios.post(LOGIN, JSON.stringify(requestBody))
     .catch(function (error) {
       debugger
        if(error.response){
          dispatch({
            type: types.LOGIN_ERROR,
            payload: error.response
          })
        }
     })
     .then((res)=>{
debugger
    if (res && res.status == 200) {
      let data = res.data
      AsyncStorage.removeItem(AUTH_TOKEN)
      AsyncStorage.setItem(AUTH_TOKEN,data.token)
      axios.defaults.headers.post['Authorization'] = "Bearer "+data.token;
      NavigationService.navigate('Dashboard');
debugger
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: data.user
      })
    }
  })
}

export const register = (firstname, email, phone, password, password_confirmation) => async dispatch => {
debugger
    dispatch({
      type: types.GET_INITIAL_VALUE,
    })
    const requestBody = {
      fullname: firstname,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: password_confirmation
    }
    debugger
     axios.post(SIGNUP, JSON.stringify(requestBody))
     .then((res)=>{
       debugger
    if (res.status == 200) {
      debugger
      NavigationService.navigate('LoginScreen');
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data
      })
    }
  }).catch(function (error) {
    debugger
      if(error.response){
        dispatch({
          type: types.REGISTER_ERROR,
          payload: error.response
        })
      }
    })
}
