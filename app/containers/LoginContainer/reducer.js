import produce from 'immer';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import { retry } from '@redux-saga/core/effects';
import payload from './saga';

export const initialState = {
  Loading: false,
  data: [],
  payload: [],
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUESTING':
      // console.log(state,"from reudcer login request");
      return { ...state, Loading: true };
    case 'LOGIN_SUCCESS':
      console.log(action, 'from reducers');
      return { value: action.json.data, Loading: false };

    case 'LOGIN_ERROR':
      console.log(action.payload, '>> fron reducers');
      return { error: action.payload };
    default:
      return state;
  }
};

export default loginContainerReducer;
