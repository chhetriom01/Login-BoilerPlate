/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOGIN_REQUESTING,LOGIN_SUCCESS,LOGIN_ERROR } from './constants';
import { retry } from '@redux-saga/core/effects';
import payload from './saga';

export const initialState = {
  Loading: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUESTING':
      return { ...state, Loading: true };
    case 'LOGIN_SUCCESS':
      return { action, Loading: false };
    case 'LOGIN_ERROR':
      return {...state,error:payload};
    default:
      return state;
  }
};

export default loginContainerReducer;
