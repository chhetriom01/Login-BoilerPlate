/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOGIN_REQUESTING } from './constants';
import { retry } from '@redux-saga/core/effects';

export const initialState = {
  Loading: false,
  error: false, 
  data: [],

};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) =>
   {
    switch (action.type) {
      case 'LOGIN_REQUESTING':
      return {...state,Loading:true}
      case 'LOGIN_SUCCESS':
      return {action,Loading:false}
      case 'ERROR':
      return {}
      default:  
      return state;
    }
  }


export default loginContainerReducer;
