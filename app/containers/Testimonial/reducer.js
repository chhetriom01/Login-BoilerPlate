/*
 *
 * Testimonial reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  Loading : false,
  data: []

};

/* eslint-disable default-case, no-param-reassign */
const testimonialReducer = (state = initialState, action) =>{
    switch (action.type) {
      case "SUBMIT_REQUESTING":
      console.log(state)
      return {...state,Loading: true};
      default :
        return state
    }
  };

export default testimonialReducer;
