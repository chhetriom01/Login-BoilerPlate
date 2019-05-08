
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  Loading: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_REQUESTING':
      console.log(state,"from reducers submit requesting");
      return { ...state, Loading: true };
    case 'SUBMIT_SUCCESS':
      console.log(state, 'state from reducers');
      return { ...state, Loading: false };
    default:
      return state;
  }
};

export default testimonialReducer;
