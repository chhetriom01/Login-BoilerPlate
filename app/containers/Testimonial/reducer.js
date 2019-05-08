/*
 *
 * Testimonial reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const testimonialReducer = (state = initialState, action) =>{
    switch (action.type) {
      case SUBMIT_REQUESTING:
      return {...state}
      default :
        return state
    }
  };

export default testimonialReducer;
