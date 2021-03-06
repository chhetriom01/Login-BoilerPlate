import produce from 'immer';
import { DEFAULT_ACTION, DELETE_ERROR } from './constants';

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
    case 'SUBMIT_ERROR':
      return { ...state };

    case 'FETCH_REQUESTING':
      console.log('from reducer of fetch_requesting');
      return { ...state, Loading: true };
    case 'FETCH_SUCCESS':
      console.log(action.json.data.dataList, 'from reducer of testimonial');
      return { ...state, om: action.json.data.dataList, Loading: false };

    case 'DELETE_REQUESTING':
    console.log('from reducers DELETE_REQUESTING', action);
      return { action, Loading: true };
    case 'DELETE_SUCCESS':
      console.log('from reducers DELETE_SUCCESS',state, action);
      return { action, loading: false };
    case 'DELETE_ERROR':
      console.log('from reducers DELETE_ERROR', action);
      return { Loading: true };
    default:
      return state;
  }
};

export default testimonialReducer;
