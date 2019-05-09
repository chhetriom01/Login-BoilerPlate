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
      console.log('from reducers submit requesting');
      return { ...state, Loading: true };
    case 'SUBMIT_SUCCESS':
      console.log(action, 'state from reducers testimonial');
      return { action, Loading: false };
    case 'FETCH_REQUESTING':
      console.log('from reducer of fetch_requesting');
      return {  ...state,Loading: true };
    case 'FETCH_SUCCESS':
      // console.log(action.json.data.dataList[0].organization, 'from reducer of testimonial');
      return { ...state,value:action.json.data, Loading: false };
    default:
      return state;
  }
};

export default testimonialReducer;
