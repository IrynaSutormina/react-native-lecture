import * as types from '../actionTypes';
import { LOG_IN, SIGN_UP } from '../../../https/endpoints';
import axios from 'axios';

export const logIn = (email, password) => dispatch => {
  // Api call logic
  axios.post(LOG_IN, {
    email: email,
    password: password
  }). then(function(response) {
    console.log('ok', response);
  }).catch(function(error){
    console.log('error', error)
  });

    console.log('axios', email, password)
  return {
    type: types.LOGIN_USER,
    payload: 'login'
  }
};

export const signUp = (email, password) => dispatch => {
  axios.post(SIGN_UP, 
    {
    email: email,
    password: password
    }
  ). then(function(response) {
    console.log('ok', response);
  }).catch(function(error){
    console.log('error', error)
  });

    console.log('axios', email, password)
  return {
    type: types.REGISTER_USER,
    payload: 'register'
  }
};

